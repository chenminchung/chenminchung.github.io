let renderer, scene, camera
let cameraControl, stats

// points
const particleCount = 15000
let points

function initStats() {
  const stats = new Stats()
  stats.setMode(0)
  document.getElementById('stats').appendChild(stats.domElement)
  return stats
}

// 建立粒子系統
function createPoints() {
  var geometry = new THREE.Geometry();
  //Waterjpg =  "https://raw.githubusercontent.com/timoxley/threejs/master/examples/textures/water.jpg" ;
  // Waterjpg =  "http://192.168.1.21:8080/tmp/snowflake.png" ;
  Waterjpg = "https://raw.githubusercontent.com/DezChuang/ironman-three.js/master/day14_snowyScene1/snowflake.png" ;
  var texture = new THREE.TextureLoader().load(Waterjpg);
  var material = new THREE.PointsMaterial({
    size: 5,
    map: texture,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true,
    opacity: 0.7
  });

  const range = 250
  for (let i = 0; i < particleCount; i++) {
    const x = THREE.Math.randInt(-range, range)
    const y = THREE.Math.randInt(-range, range)
    const z = THREE.Math.randInt(-range, range)
    const point = new THREE.Vector3(x, y, z)
    geometry.vertices.push(point)
  }

  points = new THREE.Points(geometry, material)
  scene.add(points)
}

function init() {
  // scene
  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x000000, 0.0008)

  // camera
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    1,
    1000
  )
  camera.position.set(0, 0, 100)
  camera.lookAt(scene.position)

  // OrbitControls
  cameraControl = new THREE.OrbitControls(camera)
  cameraControl.enableDamping = true
  cameraControl.dampingFactor = 0.25

  // stats
  stats = initStats()

  // let axes = new THREE.AxesHelper(20)
  // scene.add(axes)

  // renderer
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)

  createPoints()

  document.body.appendChild(renderer.domElement)
}

function render() {
  stats.update()
  requestAnimationFrame(render)
  cameraControl.update()
  renderer.render(scene, camera)
}

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

init()
render()
