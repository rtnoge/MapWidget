//data for locationUser
var json = {lat:"-7.828680899999999", lon:"110.3788933"};

var jsonPolyline = {
    id: "route",          
//     startLocation:{
//       lat:"-7.828680899999999",
//       lon:"110.3788933",
//       image:"slider.png"
//     },

//     endLocation:{
//       lat:"-7.8241726",
//       lon:"110.3782115",
//       image:"atm.png"
//     },
  
  startLocation:{
      lat:"-7.78327",
      lon:"110.38297",
      image:"slider.png"
    },

    endLocation:{
      lat:"-7.79282",
      lon:"110.3779",
      image:"atm.png"
    },
  
  locations: [
  {
    lat: "-7.78327",
    lon: "110.38297"
  },
  {
   lat: "-7.78332",
   lon: "110.38113"
  },
  {
    lat: "-7.78357",
   lon: "110.37924"
  },
  {
    lat: "-7.78466",
    lon: "110.37898"
  },
  {
    lat: "-7.78609",
    lon: "110.37985"
  },
  {
    lat: "-7.78819",
    lon: "110.38194"
  },
  {
    lat: "-7.78907",
   lon: "110.38085"
  },
  {
    lat : "-7.78939",
   lon : "110.37932"
  },
  {
   lat: "-7.78968",
   lon: "110.37827"
  },
  {
   lat: "-7.79095",
   lon: "110.37801"
  },
  {
   lat: "-7.79282",
   lon: "110.3779"
  },
  {
   lat: "-7.79282",
   lon: "110.3779"
  }
]
};
  
//     locations:[
//       {
//         lon: "110.37889000000001",
//         lat: "-7.82868"
//       },
//       {
//         lon: "110.37885000000001",
//         lat: "-7.829330000000001"
//       },
//       {
//         lon: "110.37895",
//         lat: "-7.829370000000001"
//       },
//       {
//         lon: "110.37905",
//         lat: "-7.829860000000001"
//       },
//       {
//         lon: "110.37906000000001",
//         lat: "-7.829950000000001"
//       },
//       {
//         lon: "110.37952000000001",
//         lat: "-7.829820000000001"
//       },
//       {
//         lon: "110.38008",
//         lat: "-7.829650000000001"
//       },
//       {
//         lon: "110.37951000000001",
//         lat: "-7.8277600000000005"
//       },
//       {
//         lon: "110.37939000000001",
//         lat: "-7.8273600000000005"
//       },
//       {
//         lon: "110.37924000000001",
//         lat: "-7.826830000000001"
//       },
//       {
//         lon: "110.37905",
//         lat: "-7.826350000000001"
//       },
//       {
//         lon: "110.37880000000001",
//         lat: "-7.82565"
//       },
//       {
//         lon: "110.37821000000001",
//         lat: "-7.8241700000000005"
//       }
//     ]
//   };

function frmCustomPin(){
  Form2.maps.btnType = "locationData";
  Form2.maps.autoshowCallout = false;
//   Form2.preshow = tesPreshow;
  Form2.maps.locationUser = JSON.stringify(json);

  Form2.maps.locationData = [{lat:"-7.831659", lon:"110.37468", name:"ATM CIMB Niaga", image:"atm.png"},
                             {lat:"-7.824099", lon:"110.37835", name:"Branch CIMB Niaga", image:"branch.png"},
                             {lat:"-7.779838", lon:"110.34295", name:"Digital Longue", image:"digital_lounge.png"}];
  
}

function frmShowCallout(){
  Form4.maps.btnType = "locationData";
  Form4.maps.autoshowCallout = true;

  var json = {lat:"-7.828680899999999",lon:"110.3788933"};
  Form4.maps.locationUser = JSON.stringify(json);

  Form4.maps.locationData = [{lat:"-7.831659", lon:"110.37468", name:"ATM CIMB Niaga", image:"atm.png"},
                             {lat:"-7.824099", lon:"110.37835", name:"Branch CIMB Niaga", image:"branch.png"},
                             {lat:"-7.779838", lon:"110.34295", name:"Digital Longue", image:"digital_lounge.png"}];

  Form4.maps.onPinClick = function(){
    Form4.lblLat.text = arguments[0].lat;
    Form4.lblLon.text = arguments[0].lon;
  };
}

function polyLine(){
  Form3.mapsDir.btnType = "addPolyline";
  
  Form3.mapsDir.addPolyline = JSON.stringify(jsonPolyline);

}