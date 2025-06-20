let camera; 
    let scene; 
    let rendering; 
    let geometry; 
    let material; 
    let mesh; 

function init(){

    //camera 
    camera=new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,1,1500);
    camera.position.set(0,0,300);
 
    //Scene 
    scene=new THREE.Scene();
    scene.add(camera);

    //Cylinder 
    geometry=new THREE.CylinderGeometry(
       ratiusTop=50, 
       radiusBottom=50,
       height=200, 
       radiusSegments=9, 
       heightSegments=9,
       openEnded=true
    );

     //Torus
    // geometry=new THREE.TorusGeometry( 
    //     radius=50, 
    //     tubeWidth=30,
    //     radialSegments=20, 
    //     tubularSegments=20
    // )
  
    // //Octahedron 
    // geometry=new THREE.OctahedronGeometry( 
    //     radius=150, 
    //     detail=0
    // )
    
    // //Tetrahedron
    // geometry=new THREE.TetrahedronGeometry( 
    //     radius=50, 
    //     detail=1
    // )

    //Icosahedron  
    // geometry=new THREE.IcosahedronGeometry(
    //     radius=50, 
    //     detail=0
    // )

    //Box 
    // geometry=new THREE.BoxGeometry( 
    //     width=100, 
    //     height=100, 
    //     depth=20, 
    //     widthSegments=2,
    //     heightSegments=2, 
    //     depthSegments=2
    // )
    
    //Sphere  
    // geometry=new THREE.SphereGeometry( 
    //     radius=90, 
    //     widthSegments=19, 
    //     heightSegments=19
    // );

    //Cone 
    // geometry=new THREE.ConeGeometry(
    //     radius=100, 
    //     height=100, 
    //     radialSegments=20, 
    //     heightSegments=20, 
    //     openEnded=true
    // );



    //Geometry 
    geometry=new THREE.IcosahedronGeometry(50,1) ;



    //material 
    material=new THREE.MeshNormalMaterial({
        color:'yellow',
        wireframe:true, 
        wireframeLineWidth:6
    });
    // material=new THREE.MeshBasicMaterial({
    //     color:'yellow',
    //     wireframe:false, 
    //     wireframeLineWidth:6
    // });



    //Mesh 
    mesh=new THREE.Mesh(geometry,material);
    scene.add(mesh);



    //Render 
    rendering=new THREE.WebGLRenderer();
    rendering.setClearColor('black',1);
    rendering.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(rendering.domElement);
}

init();

function animation(){
    requestAnimationFrame(animation) ;
    mesh.rotation.x+=0.012;
    mesh.rotation.y+=0.012;

    rendering.render(scene,camera);
}
animation();