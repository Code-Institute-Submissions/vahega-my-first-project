function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom :5,
        center: {lat: 34.0522, lng: -118.2437}
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
         {lat: 34.0522, lng: -118.2437},
        { lat: 32.7157, lng: -117.1611},
        { lat: 36.1699, lng: -115.1398 },
        { lat: 37.7749, lng: -122.4194 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
var markerCluster = new MarkerClusterer(map, markers,{imagePath:'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}