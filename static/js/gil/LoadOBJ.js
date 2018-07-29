function loadObj(mode){
    //mode == 0 : Texture
    //mode == 1 : Surface
    //mode == 2 : Wareframe

   // model

    var onProgress = function ( xhr ) {
        var pg=document.getElementById('pg');
        if ( xhr.lengthComputable ) {

            var percentComplete = xhr.loaded / xhr.total * 100;
            
            pg.value = percentComplete;
            console.log( Math.round( percentComplete, 2 ) + '% downloaded' );

        }

    };

    var onError = function ( xhr ) { };

    THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

    new THREE.MTLLoader()
        .setPath( path + 'obj/male02/' )
        .load( 'male02_dds.mtl', function ( materials ) {
        // .setPath( path + 'obj/i23d/' )
        // .load( 'test.mtl', function ( materials ) {
            materials.preload();

            switch(mode){
                case 0:
                    break;
                case 1:
                    for(var m1 in materials.materials){
                        console.log(materials.materials[m1]);
                        materials.materials[m1].map = null;
                    }
                    break;
                case 2:
                    for(var m2 in materials.materials){
                        console.log(materials.materials[m2]);
                        materials.materials[m2].map = null;
                        materials.materials[m2].wireframe = true;
                    }
                    break;
                default:
                    break;
            }

            
            
            new THREE.OBJLoader()
                .setMaterials( materials )
                .setPath( path + 'obj/male02/' )
                .load( 'male02.obj', function ( object ) {
                // .setPath( path + 'obj/i23d/' )
                // .load( 'test.obj', function ( object ) {
                    $("#progress").css('visibility','hidden');
                    
                    object.position.y = - 95;
                    mesh = object;
                    scene.add( object );
                    autoRotate(true);
                }, onProgress, onError );

        } );
}
