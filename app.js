mapboxgl.accessToken =
  "pk.eyJ1IjoibmlrYW1uIiwiYSI6ImNsaTRiNWMycTBtcHczZW1sOW5tdTE1Z28ifQ.voI2xa-MfxRUQO86XN5dYg";

const setPosition = (position) => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  setupMap([longitude, latitude]);
};

const errorCallback = (error) => {
  setupMap([-0.127758, 51.507351]);
};

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, errorCallback);
} else {
  console.log("Your browser does not support Geolocation API");
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: center,
    zoom: 12,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  map.addControl(directions, "top-left");
}
