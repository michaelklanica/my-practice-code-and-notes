mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

var placesVisited = ["San Antonio, TX", "Austin, TX", "Houston , TX"]

for (var i = 0; i < placesVisited.length; i++) {
    geocode(placesVisited[i], mapboxToken).then(function(results) {
        console.log(results);
        map.setCenter(results);
        var marker = new mapboxgl.Marker()
            .setLngLat(results)

            .addTo(map);
    });
}
