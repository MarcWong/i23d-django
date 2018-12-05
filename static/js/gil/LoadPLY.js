function loadPly(){
  // model

  // var onProgress = function ( xhr ) {
  //     var pg=document.getElementById('pg');
  //     if ( xhr.lengthComputable ) {

  //         var percentComplete = xhr.loaded / xhr.total * 100;
          
  //         pg.value = percentComplete;
  //         console.log( Math.round( percentComplete, 2 ) + '% downloaded' );

  //     }

  // };

  // var onError = function ( xhr ) { };

  // THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

  

  new THREE.PLYLoader()
    .load( path + 'ply/robust_colorized.ply', function ( geometry ) {
    // .load( path + 'ply/e44.ply', function ( geometry ) {

      $("#progress").css('visibility','hidden');
      geometry.computeVertexNormals();

      var material = new THREE.PointsMaterial({size:1, vertexColors: THREE.VertexColors,sizeAttenuation: false});
      mesh = new THREE.Points(geometry,material);

      mesh.position.y =  0.5;
      mesh.position.z =  0;
      mesh.rotation.x = Math.PI /2;
      mesh.scale.multiplyScalar( 0.5 );

      mesh.castShadow = false;
      mesh.receiveShadow = false;

      scene.add( mesh );

    });
}
