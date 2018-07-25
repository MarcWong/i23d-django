function init() {

    //stat Dom init
    stat = new Stats();
    stat.domElement.style.position = 'fixed';
    stat.domElement.style.left = '0px';
    stat.domElement.style.top = 'calc(100vh - 48px)';
    document.body.appendChild(stat.domElement);


    container = document.createElement('div');
    document.getElementById("webgl-renderer").appendChild(container);

    /* Camera */

    //orthographic camera
    // camera = new THREE.OrthographicCamera(-2,2,1.5,-1.5,1,100);
    // camera.position.set(1,0,0);
    // camera.lookAt(new THREE.Vector3(0, 0, 0));

    //perspective camera
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
    camera.position.set(0,0,500);

    /* Scene */

    scene = new THREE.Scene();

    /* Axes */
    var axes = new THREE.AxesHelper(500);
    scene.add(axes);

    /* Light */
    ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    xLight = new THREE.DirectionalLight(0xffffff, 0.2);
    yLight = new THREE.DirectionalLight(0xffffff, 0.2);
    zLight = new THREE.DirectionalLight(0xffffff, 0.2);

    xLight.position.set(1, 0, 0);
    yLight.position.set(0, 1, 0);
    zLight.position.set(0, 0, 1);

    scene.add(xLight);
    scene.add(yLight);
    scene.add(zLight);

    // hemisphereLight
    // var hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, .7);
    // scene.add(hemisphereLight);

    /* raycaster */
    raycaster = new THREE.Raycaster();
    raycaster.linePrecision = 3;
    console.log(raycaster);

    /* Renderer */

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color("hsl(0, 0%, 50%)"));

    //shadow
    // renderer.shadowMapEnabled = true;

    container.appendChild(renderer.domElement);


    /* Controls */

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    /* Events */

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('keydown', onKeyboardEvent, false);
    window.addEventListener('dblclick', dblclickEvent, false);
    window.addEventListener('mousedown', onMouseDownEvent, false);
    window.addEventListener('mouseup', onMouseUpEvent, false);

}


function initGrid(){
    var gridXZ = new THREE.GridHelper(500, 50, 0xEED5B7, 0xEED5B7);
    gridXZ.position.set( 1,0,1 );
    scene.add(gridXZ);

    var gridXY = new THREE.GridHelper(500, 50, 0xEED5B7, 0xEED5B7);
    gridXY.position.set( 1,1,0 );
    gridXY.rotation.x = Math.PI/2;
    scene.add(gridXY);

    var gridYZ = new THREE.GridHelper(500, 50, 0xEED5B7, 0xEED5B7);
    gridYZ.position.set( 0,1,1 );
    gridYZ.rotation.z = Math.PI/2;
    scene.add(gridYZ);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    stat.begin();
    renderer.render(scene, camera);
    stat.end();
}
