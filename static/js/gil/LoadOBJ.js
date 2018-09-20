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
    // .setPath( path + 'obj/male02/' )
    // .load( 'male02_dds.mtl', function ( materials ) {
    .setPath( path + 'obj/i23d/' )
    .load( 'scene_dense_mesh_refine_texture.mtl', function ( materials ) {
      materials.preload();

      switch(mode){
        case 0:
          break;
        case 1:
          for (let m1 in materials){
            for (let mm1 in m1) {
              m1[mm1].map = null;
            }
          }
          break;
        case 2:
          for (let m2 in materials){
            for (let mm2 in m2) {
              m2[mm2].map = null;
              m2[mm2].wireframe = true;
            }
          }
          break;
        default:
          break;
      }
      new THREE.OBJLoader()
        .setMaterials( materials )
        // .setPath( path + 'obj/male02/' )
        // .load( 'male02.obj', function ( object ) {
        .setPath( path + 'obj/i23d/' )
        .load( 'scene_dense_mesh_refine_texture.obj', function ( object ) {
          $("#progress").css('visibility','hidden');
          console.log(object);

          object.scale.x = 100;
          object.scale.y = 100;
          object.scale.z = 100;

          if (object.children.length === 1) {
            object.children[0].geometry.computeBoundingBox();
            object.children[0].geometry.center();
          }
          // object.rotation.x = THREE.Math.degToRad( 90 );

          let helper = new THREE.BoundingBoxHelper(object, 0xff0000);
          helper.update();
          scene.add(helper);
          mesh = object;
          scene.add( object );
          autoRotate(true);
        }, onProgress, onError );

    });
}
