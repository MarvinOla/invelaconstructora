/* ============================================================
   INVELA — Three.js renders 3D para proyectos
   Urbanización wireframe, edificios, parqueos con estructura
   metálica — usando THREE desde CDN global
   ============================================================ */

const ACCENT = 0xF5C518; // amarillo INVELA
const DIM    = 0x2a2a2a; // líneas grid

// ---- Función principal: inicializa todos los canvas ----
export function initThreeRenders() {
  document.querySelectorAll('[data-three-render]').forEach(canvas => {
    const type = canvas.dataset.threeRender || 'urbanizacion';
    createRender(canvas, type);
  });
}

// ---- Crear render en un canvas ----
function createRender(canvas, type) {
  const THREE = window.THREE;
  if (!THREE) { console.warn('Three.js no cargado'); return; }

  const w = canvas.offsetWidth  || canvas.parentElement.offsetWidth  || 400;
  const h = canvas.offsetHeight || canvas.parentElement.offsetHeight || 260;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 200);

  // Posición inicial de cámara
  camera.position.set(14, 9, 14);
  camera.lookAt(0, 2, 0);

  // Materiales
  const matAccent = new THREE.LineBasicMaterial({ color: ACCENT,  linewidth: 1 });
  const matDim    = new THREE.LineBasicMaterial({ color: DIM,     linewidth: 1 });
  const matFaint  = new THREE.LineBasicMaterial({ color: 0x1a1a1a, linewidth: 1 });

  // Grid floor
  const gridHelper = new THREE.GridHelper(24, 24, DIM, 0x161616);
  scene.add(gridHelper);

  // Construir escena según tipo
  const builders = {
    urbanizacion: buildUrbanizacion,
    estructura:   buildEstructuraMetalica,
    parqueo:      buildParqueo,
    residencial:  buildResidencial,
    industrial:   buildIndustrial,
    civil:        buildCivil,
  };

  const builder = builders[type] || buildUrbanizacion;
  builder(scene, matAccent, matDim, THREE);

  // Animación
  let angle = Math.random() * Math.PI * 2;
  const radius = 16;
  let animId;

  const animate = () => {
    animId = requestAnimationFrame(animate);
    angle += 0.004;
    camera.position.x = Math.sin(angle) * radius;
    camera.position.z = Math.cos(angle) * radius;
    camera.lookAt(0, 2, 0);
    renderer.render(scene, camera);
  };
  animate();

  // Detener cuando fuera de viewport (performance)
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animate();
      } else {
        cancelAnimationFrame(animId);
      }
    });
  }, { threshold: 0.01 });
  io.observe(canvas);

  // Hover: acelerar rotación
  canvas.parentElement.addEventListener('mouseenter', () => { /* acelerar via angle delta */ });

  // Responsive
  window.addEventListener('resize', () => {
    const nw = canvas.parentElement.offsetWidth;
    const nh = canvas.parentElement.offsetHeight || h;
    renderer.setSize(nw, nh);
    camera.aspect = nw / nh;
    camera.updateProjectionMatrix();
  });
}

/* ============================================================
   Escenas 3D específicas
   ============================================================ */

// Edificio como wireframe: caja con aristas
function addWireBox(scene, mat, x, y, z, w, h, d, THREE) {
  const geo   = new THREE.BoxGeometry(w, h, d);
  const edges = new THREE.EdgesGeometry(geo);
  const mesh  = new THREE.LineSegments(edges, mat);
  mesh.position.set(x, y + h / 2, z);
  scene.add(mesh);
  return mesh;
}

// Urbanización: manzana residencial con torre central
function buildUrbanizacion(scene, matA, matD, THREE) {
  const layout = [
    // [x, z, w, d, h]  — townhouses perimetrales
    [-5,  -5, 1.6, 1.6, 3.5],
    [-2.5,-5, 1.6, 1.6, 3.0],
    [ 0,  -5, 1.6, 1.6, 3.8],
    [ 2.5,-5, 1.6, 1.6, 3.2],
    [ 5,  -5, 1.6, 1.6, 3.5],

    [-5,   0, 1.6, 1.6, 3.0],
    [ 5,   0, 1.6, 1.6, 3.5],

    [-5,   5, 1.6, 1.6, 3.8],
    [-2.5, 5, 1.6, 1.6, 3.2],
    [ 0,   5, 1.6, 1.6, 3.0],
    [ 2.5, 5, 1.6, 1.6, 3.5],
    [ 5,   5, 1.6, 1.6, 3.8],
  ];

  layout.forEach(([x, z, w, d, h]) => addWireBox(scene, matD, x, 0, z, w, h, d, THREE));

  // Torre central
  addWireBox(scene, matA, 0, 0, 0, 3, 10, 3, THREE);

  // Calles (líneas en grid)
  const lineGeo1 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-8, 0.02, -1.2),
    new THREE.Vector3( 8, 0.02, -1.2),
  ]);
  const lineGeo2 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-8, 0.02, 1.2),
    new THREE.Vector3( 8, 0.02, 1.2),
  ]);
  const lineGeo3 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1.2, 0.02, -8),
    new THREE.Vector3(-1.2, 0.02,  8),
  ]);
  const lineGeo4 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3( 1.2, 0.02, -8),
    new THREE.Vector3( 1.2, 0.02,  8),
  ]);
  const roadMat = new THREE.LineBasicMaterial({ color: 0x333333 });
  [lineGeo1, lineGeo2, lineGeo3, lineGeo4].forEach(g => {
    scene.add(new THREE.Line(g, roadMat));
  });
}

// Estructura metálica: nave industrial
function buildEstructuraMetalica(scene, matA, matD, THREE) {
  const cols = 6, rows = 3, spacing = 3;

  // Columnas
  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= rows; j++) {
      addWireBox(scene, i === 0 || i === cols || j === 0 || j === rows ? matA : matD,
        i * spacing - (cols * spacing) / 2,
        0,
        j * spacing - (rows * spacing) / 2,
        0.15, 6, 0.15, THREE);
    }
  }

  // Vigas horizontales
  for (let j = 0; j <= rows; j++) {
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-(cols * spacing) / 2, 6, j * spacing - (rows * spacing) / 2),
      new THREE.Vector3( (cols * spacing) / 2, 6, j * spacing - (rows * spacing) / 2),
    ]);
    scene.add(new THREE.Line(geo, matA));
  }

  // Vigas longitudinales
  for (let i = 0; i <= cols; i++) {
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(i * spacing - (cols * spacing) / 2, 6, -(rows * spacing) / 2),
      new THREE.Vector3(i * spacing - (cols * spacing) / 2, 6,  (rows * spacing) / 2),
    ]);
    scene.add(new THREE.Line(geo, matD));
  }

  // Techo en punta
  const roofMat = matA;
  const midX    = 0;
  for (let j = 0; j <= rows; j++) {
    const z = j * spacing - (rows * spacing) / 2;
    const geoR = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-(cols * spacing) / 2, 6, z),
      new THREE.Vector3(midX, 9, z),
      new THREE.Vector3( (cols * spacing) / 2, 6, z),
    ]);
    scene.add(new THREE.Line(geoR, roofMat));
  }
}

// Parqueo: estructura con rampas
function buildParqueo(scene, matA, matD, THREE) {
  const floors = 4, w = 12, d = 8;

  for (let f = 0; f < floors; f++) {
    const y = f * 3;
    // Losa
    const corners = [
      [-w/2, y, -d/2], [w/2, y, -d/2],
      [w/2, y, d/2],   [-w/2, y, d/2],
      [-w/2, y, -d/2],
    ];
    const pts = corners.map(c => new THREE.Vector3(...c));
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    scene.add(new THREE.Line(geo, f % 2 === 0 ? matA : matD));

    // Columnas en esquinas
    [[-w/2,-d/2],[w/2,-d/2],[w/2,d/2],[-w/2,d/2]].forEach(([cx,cz]) => {
      addWireBox(scene, matD, cx, y, cz, 0.3, 3, 0.3, THREE);
    });
  }
}

// Residencial: casa unifamiliar
function buildResidencial(scene, matA, matD, THREE) {
  // Planta baja
  addWireBox(scene, matD, 0, 0, 0, 8, 3, 6, THREE);
  // Segundo piso
  addWireBox(scene, matD, 0, 3, 0, 7, 3, 5, THREE);
  // Techo a dos aguas
  const pts = [
    new THREE.Vector3(-3.5, 6, -2.5),
    new THREE.Vector3(0,    8, -2.5),
    new THREE.Vector3( 3.5, 6, -2.5),
    new THREE.Vector3( 3.5, 6,  2.5),
    new THREE.Vector3(0,    8,  2.5),
    new THREE.Vector3(-3.5, 6,  2.5),
    new THREE.Vector3(-3.5, 6, -2.5),
  ];
  const geo = new THREE.BufferGeometry().setFromPoints(pts);
  scene.add(new THREE.Line(geo, matA));
  // Caballete
  const ridge = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 8, -2.5),
    new THREE.Vector3(0, 8,  2.5),
  ]);
  scene.add(new THREE.Line(ridge, matA));
}

// Industrial: nave grande + tanques
function buildIndustrial(scene, matA, matD, THREE) {
  addWireBox(scene, matD, 0, 0, 0, 14, 5, 8, THREE);
  addWireBox(scene, matA, 0, 0, 0, 14, 7, 8, THREE);
  // Tanques
  for (let i = 0; i < 3; i++) {
    addWireBox(scene, matD, -5 + i * 5, 0, 6, 2, 4, 2, THREE);
  }
  // Chimenea
  addWireBox(scene, matA, 5, 0, 0, 0.5, 12, 0.5, THREE);
}

// Obra civil: puente / alcantarilla
function buildCivil(scene, matA, matD, THREE) {
  // Vigas principales
  for (let i = 0; i < 2; i++) {
    const z = -2 + i * 4;
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-8, 0, z), new THREE.Vector3(8, 0, z),
    ]);
    scene.add(new THREE.Line(geo, matA));
    const geo2 = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-8, 4, z), new THREE.Vector3(8, 4, z),
    ]);
    scene.add(new THREE.Line(geo2, matA));
  }
  // Pilares
  [-6, -2, 2, 6].forEach(x => {
    addWireBox(scene, matD, x, 0, 0, 0.4, 4, 4, THREE);
  });
  // Losa
  addWireBox(scene, matA, 0, 4, 0, 16, 0.3, 4, THREE);
}
