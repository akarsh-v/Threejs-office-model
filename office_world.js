function makeWorldObjects() {
    /*var testcube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color:0xffffff}));
    world.scene.add(testcube);
    testcube.name ='testcube';*/
   
    this.axisHelper = new THREE.AxisHelper( 8500 );
    world.scene.add( this.axisHelper );
    
    //office
    /*world.s1 = new THREE.Mesh(new THREE.BoxGeometry(340.8,735.6,235.2), new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}));
    world.scene.add(world.s1);*/
    //world.s1.visible=false;
    //world.s1.position.set(201.55, 43.6, 43.1 );
    //world.s1.name = 'object';
    //world.s1.rotation.set(0.021975825449691403, -0.014816078383195446, -0.0026511761492486745);
    
    //table
    world.s2 = new THREE.Mesh(new THREE.BoxGeometry(59.3, 120, 76.4 ), new THREE.MeshBasicMaterial({color:0x00ffff, wireframe:true}));
    world.scene.add(world.s2);
    world.s2.position.set(265.4, 116.4, 0  );
    //world.s2.rotation.set(0.03423173047789128, 0.11684184547185476, 0.05509180721665479);
    //world.s2.name = 'object';
    //world.s2.visible=false;
};
