mapboxgl.accessToken = 'pk.eyJ1IjoiY2hpcmFudGFuYmFuaWsiLCJhIjoiY2xhODV2bmtpMDBtcDNvbXlhcDdlNXRnMiJ9.62QcOJVeqCMN8H6Tz4IJJQ'; // this is brought from line 9-10 from html file

// for getting Current Location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})
function successLocation(position){   // successLocation will take the position
    console.log(position)  
    setupMap([position.coords.longitude, position.coords.latitude])   // longitude, latitude

}

function errorLocation(){
    setupMap([88.5, 27.1])   // for error location setupMap with default location i.e. Sikkim Manipal Institute of Technology

}

function setupMap(center){  // latitude, longitude = center
const map = new mapboxgl.Map({  // new creation
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL which is a street view map
    center: center,
    zoom: 15
})

// line 27-28 is the zoom in & zoom out of the map
const nav = new  mapboxgl.NavigationControl()
map.addControl(nav)

// line 31-36 is for the direction diagram
var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
})

map.addControl(directions, "top-left")
}
