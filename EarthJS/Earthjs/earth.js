let scene, renderer, camera;
let cameraControl, stats
let cube;
let cube1;
let sphere;
let mesh1;

// 初始化場景、渲染器、相機、物體
// 建立監測器
function initStats() {
  const stats = new Stats()
  stats.setMode(1) // 0-FPS mode ; 1- ??ms
  document.getElementById('stats').appendChild(stats.domElement)
  return stats
}

function init() {
  // 建立場景
  scene = new THREE.Scene();

  // 建立渲染器
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight); // 場景大小
  // renderer.setClearColor(0xeeeeee, 1.0); // 預設背景顏色
  renderer.setClearColor(0xeeeeee, 1.0); // 預設背景顏色
  renderer.shadowMap.enable = true ;// 陰影效果

  // 將渲染器的 DOM 綁到網頁上
  document.body.appendChild(renderer.domElement)

  // 建立相機
  camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,100);
  camera.position.set(70, 10, 10);
  camera.lookAt(scene.position);

  stats = initStats() // 初始化

  // 建立光源
  let pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(10, 10, -10);
  scene.add(pointLight);

  // 建立物體
  const geometry = new THREE.BoxGeometry(1, 1, 1); // 幾何體
  const material = new THREE.MeshPhongMaterial({color: 0x0000ff}); // 材質
  cube = new THREE.Mesh(geometry, material); // 建立網格物件
  cube.position.set(0, 0, 0);
  scene.add(cube);

  cube1 = new THREE.Mesh(geometry, material); // 建立網格物件
  cube1.position.set(-5, 1, 1);
  scene.add(cube1);

  // Moon's Polar radius is  0.2731 of Earth's   ; 3.666
  var geometryB = new THREE.SphereBufferGeometry( 2, 20, 20 );
  Waterjpg =  "https://raw.githubusercontent.com/timoxley/threejs/master/examples/textures/water.jpg" ;
  var headMap = new THREE.TextureLoader().load(Waterjpg);
  var materialB = new THREE.MeshBasicMaterial( {map: headMap} );
  // var materialB = new THREE.MeshBasicMaterial( {color: 0x000088} );
  sphere = new THREE.Mesh( geometryB, materialB );
  sphere.position.set(0,-5,0);
  scene.add( sphere );


    // Load a texture,map to sphere 


  // Earthjpg =  "https://raw.githubusercontent.com/timoxley/threejs/master/examples/textures/land_ocean_ice_cloud_2048.jpg" ;
  Earthjpg =  "https://raw.githubusercontent.com/chenminchung/chenminchung.github.io/master/earth.jpg" ;
  // Earthjpg =  "https://raw.githubusercontent.com/chenminchung/chenminchung.github.io/master/snowflake.png" ;
  var headMap = new THREE.TextureLoader().load(Earthjpg);
  var materialD = new THREE.MeshBasicMaterial( {map: headMap} );
  var geometryD = new THREE.SphereBufferGeometry( 7.3, 20, 20 );
  // Combine the geometry and material into a mesh
  earth = new THREE.Mesh( geometryD, materialD );
  earth.position.set(0,15,0);
  scene.add(earth);
}



// 建立動畫
function animate() {
  sphere.rotation.y += 0.01;
  
  //group.rotation.y +=0.002;
  // mesh3.rotation.y +=0.001;
  earth.rotation.y += 0.01
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cube1.rotation.x += 0.005;
  cube1.rotation.y += 0.005;
  cube1.position.x +=0.0001;
  if (cube1.position.x > 5 ) {cube1.position.x = -5 ;}
  cube1.position.y +=0.0001;

}

// 渲染場景
function render() {
  animate();
  requestAnimationFrame(render);
  stats.update(); // 需設定 update 才會持續更新
  renderer.render(scene, camera);
}

// 監聽螢幕寬高來做簡單 RWD 設定
window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight ;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})

init();
// animate();
render();
