	// earth
var geometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );



var loader = new THREE.TextureLoader();
loader.load( 'textures/land_ocean_ice_cloud_2048.jpg', function ( texture ) {
    var geometryC = new THREE.SphereBufferGeometry( 2, 2, 2 );
    var materialC = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var mesh = new THREE.Mesh( geometryC, materialC );
    scene.add( mesh );

} );

var loader = new THREE.TextureLoader();
	loader.load( 'textures/land_ocean_ice_cloud_2048.jpg', function ( texture ) {
var geometry = new THREE.SphereBufferGeometry( 200, 20, 20 );
var material = new THREE.MeshLambertMaterial( { map: texture } );
var mesh = new THREE.Mesh( geometry, material );
group.add( mesh );



// Load a texture
texture = new THREE.TextureLoader().load( "./land_ocean_ice_cloud_2048.jpg" );

// Create a geometry
// 	Create a box (cube) of 10 width, length, and height
geometryE = new THREE.SphereBufferGeometry( 2, 20, 20 );
// Create a MeshBasicMaterial with a loaded texture
materialE = new THREE.MeshBasicMaterial( { map: texture} );

// Combine the geometry and material into a mesh
mesh = new THREE.Mesh( geometryE, materialE );
// Add the mesh to the scene
scene.add( mesh );



var loader = new THREE.TextureLoader();
loader.load( './land_ocean_ice_cloud_2048.jpg', function ( texture ) {
var geometryC = new THREE.SphereBufferGeometry( 1, 20, 20 );
var materialC = new THREE.MeshLambertMaterial( { map: texture } );
const geometryD = new THREE.BoxGeometry(1, 1, 1); // 幾何體
const materialD = new THREE.MeshPhongMaterial({ color: 0x0000ff }); // 材質
var mesh = new THREE.Mesh( geometryD, materialD );
mesh.position.set(5, 1, 3);
scene.add( mesh );



// instantiate a loader
var loader = new THREE.TextureLoader();

// load a resource
loader.load(
    // resource URL
    'earth.jpg',
    // Function when resource is loaded
    function ( texture ) {
        // do something with the texture
        var materialD = new THREE.MeshBasicMaterial( {
            map: texture
         } );
    },
    // Function called when download progresses
    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    // Function called when download errors
    function ( xhr ) {
        console.log( 'An error happened' );
    }
);

