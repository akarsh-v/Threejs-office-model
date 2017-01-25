(function() {
window.API = {};

API.library = 
{
	
	hotspot: {
		pathToTexture: "images/here.png",
		size:7,
		name: 'hotspot'
	},

	libRecord:{
		type: "equirectangular",
		collection: [
			{
				pathToTexture: "panoramas/office/1.JPG",
				rotation: new THREE.Vector3(  3.1999999999999997,  1.5299999999999767, -0.060000000000000005),
				position: new THREE.Vector3(129.1,117.8,236.7)
			},
			{	
				pathToTexture: "panoramas/office/2.JPG",
				rotation: new THREE.Vector3( 3.0999999999999996,  1.4299999999999766,  0.04000000000000001),
				position:  new THREE.Vector3(239.1, 117.8,483.5 )
			}
		]
	}
}

})();		