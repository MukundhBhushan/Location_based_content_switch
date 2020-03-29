lat = 0
long = 0
n=0
latP = 0
longP = 0
function changein(){
    console.log("clicked")
    document.getElementById("out").innerHTML = "in"
    document.getElementById("out").title = "in"
    document.getElementById("where").innerHTML = "you are inside"
}

function changeout(){
    console.log("clicked")
    document.getElementById("out").innerHTML = "out"
    document.getElementById("out").title = "out"
    document.getElementById("where").innerHTML = "you are outside"

}



function changestuff(){
    _lat = document.getElementById("latitude").value
    _long = document.getElementById("longitude").value
    latP = lat
    longP = long
    console.log(_lat,_long)
    if(_lat == lat & _long == long){
      console.log(lat,long)
        console.log("in f")
        changein()
        show()
    }
    else{
      console.log(lat,long)
        console.log("out f")
        changeout()
        show()
    }
    

}

// function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       x.innerHTML = "Geolocation is not supported by this browser.";
//     }
//   }
  
//   function showPosition(position) {
//     lat  = position.coords.latitude
//     long  = position.coords.longitude
//     document.getElementById("latitude").value = position.coords.latitude ;
//     document.getElementById("longitude").value = position.coords.longitude ;
//     changestuff()
//   }

  function show(){
    tt = document.getElementById("out").title
    if(tt == "in"){
      console.log(lat,long)
        document.getElementById("showc").innerHTML = `
        <table>
        <tr>
        <td>Sl No</td>
        <td>content</td>
      </tr>
      <tr>
        <td>1</td>
        <td>in1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>in2</td>
      </tr>
      <tr>
        <td>3</td>
        <td>in3</td>
      </tr>
      <tr>
        <td>4</td>
        <td>in4</td>
      </tr>
    </table>`
    }
    else{
      console.log(lat,long)
        document.getElementById("showc").innerHTML = 

    `<table>
  <tr>
    <td>Sl No</td>
    <td>content</td>
  </tr>
  <tr>
    <td>1</td>
    <td>out1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>out2</td>
  </tr>
  <tr>
    <td>3</td>
    <td>out3</td>
  </tr>
  <tr>
    <td>4</td>
    <td>out4</td>
  </tr>
</table>`
        
    }
    
  }


  function getCurrentLoc() {

    const status = document.getElementById('status');
    const mapLink = document.getElementById('map-link');
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      // lat = latitude
      // long = longitude
      document.getElementById("latitude").value = latitude
      document.getElementById("longitude").value = longitude
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
    console.log("lap",latP,longP)
    if(latP != lat & longP != long){
      console.log("Changin here")
      changestuff()
    }
    else{
      console.log("Nope")
    }
    
    // try{
    //event.preventDefault()
    // }
    // catch(err) {
    //   console.log(err)
    // }
    setTimeout(getCurrentLoc, 1000);
  }
  
  function setloc() {  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      lat = latitude
      long = longitude

      document.getElementById("latitude").value = latitude
      document.getElementById("longitude").value = longitude
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
    
    changestuff()
    getCurrentLoc()
    
  }