/*Mesh Autorotation*/
function autoRotate(sw){
    let mesh_id = 0;
    mesh.rotation.y += 0.002;
    if (mesh.rotation.y > Math.PI * 2)
        mesh.rotation.y -= Math.PI * 2;

    if(sw)
        mesh_id = requestAnimationFrame(autoRotate);
    else
        cancelAnimationFrame(mesh_id);
}


/*mesh Display Mode Controller*/
function cleanObject(){
    var allChildren = scene.children;
    console.log(scene.children)
    for (var i = 0; i < allChildren.length; i++){
        var meshObject = allChildren[i];
        if (meshObject instanceof THREE.Mesh || meshObject instanceof THREE.Group) {
            console.log(meshObject)
            scene.remove(meshObject);
            
        }
    }
}

function showTexture(){
    cleanObject();
    loadObj(0);
}

function showSurface(){
    cleanObject();
    loadObj(1);
}

function showWireframe(){
    cleanObject();
    loadObj(2);
}
/*mesh Display Mode Controller END*/

/*mesh Manipulate Controller*/
function meshZoomIn(){
    //console.log(mesh.scale);
    mesh.scale.addScalar(0.1);
}

function meshZoomOut(){
    //console.log(mesh.scale);
    mesh.scale.subScalar(0.1);
}

function meshRotate(angle){
    mesh.rotation.y += angle;
    // console.log(mesh.rotation);
}

function meshTilt(angle){
    mesh.rotation.z += angle;
}


function meshOrthoView(){
    if(isOrtho){
        camera.position.set(0,0,500);
    }
    else{
        camera.position.set(0,500,0);
    }
    
    isOrtho = !isOrtho;
}


/*mesh Manipulate Controller END*/