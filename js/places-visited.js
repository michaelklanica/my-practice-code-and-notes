mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}
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
