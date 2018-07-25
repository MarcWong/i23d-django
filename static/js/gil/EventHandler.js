/* Keyboard Event Handler*/
function onKeyboardEvent(e) {
    console.log(e.code)
    switch (e.code)
    {
    case 'KeyL':
        toggleLight()
        break;
    case 'KeyW':
        meshTilt()
        break;
    case 'KeyS':
        meshTilt()
        break;
    case 'KeyA':
        meshRotate(1.57)
        break;
    case 'KeyD':
        meshRotate(-1.57)
        break;
    case 'KeyM':
        toggleMenu()
        break;
    case 'Minus':
        meshZoomOut()
        break;
    case 'Equal':
        meshZoomIn()
        break;
    default:
        break;
    }
}

function dblclickEvent(e){
    console.log('mouse dblclick')
    meshZoomIn();
}

/* Mouse Event Handler*/
function onMouseDownEvent(e) {
    e.preventDefault();
    console.log('mouse down');
    autoRotate(false);

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    // console.log(raycaster);

    // TODO: find intersections, now the precision is not good

    // raycaster.setFromCamera( mouse, camera );

    // var intersects = raycaster.intersectObjects( scene.children, true);
    // if ( intersects.length > 0 ) {

    //     if ( currentIntersected !== undefined ) {

    //         currentIntersected.material.linewidth = 1;

    //     }

    //     currentIntersected = intersects[ 0 ].object;
    //     currentIntersected.material.linewidth = 5;

    //     console.log(currentIntersected);
    // } else {

    //     if ( currentIntersected !== undefined ) {
    //         currentIntersected.material.linewidth = 1;
    //     }
    //     currentIntersected = undefined;
    // }




    if(e.button===0){//left
        if(e.ctrlKey){
            
        }
    }
    else if(e.button===2){//right

    }
}
function onMouseUpEvent() {
    console.log('mouse up');
    autoRotate(true);
}

