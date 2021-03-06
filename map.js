/**
 * Moves the map to display over Boston using viewBounds
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
// function setMapViewBounds(map){
//   // var bbox = new H.geo.Rect(42.3736,-71.0751,42.3472,-71.0408); // diff of .012455 .018017 .013945 .016283
//   var bbox = new H.geo.Rect(32.2135, -110.9909,32.30226, -110.9566,); //32.2226, 110.9909
//   map.getViewModel().setLookAtData({
//     bounds: bbox
//   });
// }

// jfarrish code not working yet....
function setMapViewBounds(map, lat, long) {
  let ulX = lat + 0.1;
  let ulY = long + 0.1;
  let lrX = lat - 0.1;
  let lrY = long - 0.1;

  console.log(ulX, ulY, lrX, lrY);
  let searchArea = new H.geo.Rect(ulX, ulY, lrX, lrY);
  map.getViewModel().setLookAtData({ bounds: searchArea });
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: "lZJH8sp0pz0p3b0n6IcmBXC6swBQWkeam3I5GT90PGU",
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(
  document.getElementById("mapArea"),
  defaultLayers.vector.normal.map,
  {
    center: { lat: 0, lng: 0 },
    zoom: 4,
    pixelRatio: window.devicePixelRatio || 1,
  }
);
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener("resize", () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

//setMapViewBounds(map, 51.509865, -0.118092);
// setMapViewBounds(map);

function getMap(lat, lon) {
  console.log("rcvd coords" + lat + lon);
  setMapViewBounds(map, lat, lon);
}
