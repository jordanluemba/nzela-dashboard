export function setupMap() {
    // Définition correcte des bounds RDC (Sud-Ouest, Nord-Est)
    var rdcBounds = [
        [-13.459035, 12.039869], // Sud-Ouest (lat, lng)
        [5.380035, 31.305002]    // Nord-Est (lat, lng)
    ];
    var map = L.map('map', {
        maxBounds: rdcBounds,
        maxBoundsViscosity: 1.0,
        zoomSnap: 0.5,
        zoomDelta: 0.5,
    }).fitBounds(rdcBounds);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 19,
        minZoom: 6,
    }).addTo(map);
    // Polygon RDC (GeoJSON: [lng, lat])
    var rdcGeoJson = {
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
                [12.039869, -13.459035],
                [31.305002, -13.459035],
                [31.305002, 5.380035],
                [12.039869, 5.380035],
                [12.039869, -13.459035]
            ]]
        }
    };
    var worldBounds = [[-90, -180], [90, 180]];
    var outsideRDC = [
        [
            [ [-180, -90], [180, -90], [180, 90], [-180, 90], [-180, -90] ]
        ]
    ];
    outsideRDC[0].push([
        [12.039869, -13.459035],
        [31.305002, -13.459035],
        [31.305002, 5.380035],
        [12.039869, 5.380035],
        [12.039869, -13.459035]
    ]);
    var mask = {
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": outsideRDC[0]
        }
    };
    L.geoJSON(mask, {
        style: {
            fillColor: "#334155",
            fillOpacity: 0.7,
            color: "#334155",
            weight: 1,
            opacity: 0.2
        },
        interactive: false
    }).addTo(map);
    L.geoJSON(rdcGeoJson, {
        style: {
            color: "#14b8a6",
            weight: 4,
            fillOpacity: 0
        },
        interactive: false
    }).addTo(map);
    // Marqueur par défaut sur Kinshasa
    var defaultMarker = L.marker([-4.325, 15.322], {
        icon: L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        })
    }).addTo(map);
    defaultMarker.bindPopup('<span class="font-bold text-teal-700">Kinshasa</span>').openPopup();
    // Liste des marqueurs
    var markerList = document.getElementById('marker-list');
    function addMarker(lat, lng) {
        var marker = L.marker([lat, lng], {
            icon: L.icon({
                iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                iconSize: [28, 28],
                iconAnchor: [14, 28],
                popupAnchor: [0, -28]
            })
        }).addTo(map);
        marker.bindPopup('<span class="font-semibold text-teal-700">Marqueur</span><br>Lat: ' + lat.toFixed(4) + ', Lng: ' + lng.toFixed(4));
        var li = document.createElement('li');
        li.innerHTML = `<span class='font-bold text-teal-600'>Lat:</span> ${lat.toFixed(4)}, <span class='font-bold text-teal-600'>Lng:</span> ${lng.toFixed(4)}`;
        markerList.appendChild(li);
    }
    map.on('click', function(e) {
        if (
            e.latlng.lat >= rdcBounds[0][0] && e.latlng.lat <= rdcBounds[1][0] &&
            e.latlng.lng >= rdcBounds[0][1] && e.latlng.lng <= rdcBounds[1][1]
        ) {
            addMarker(e.latlng.lat, e.latlng.lng);
        } else {
            alert('Ajoutez des marqueurs uniquement dans la RDC !');
        }
    });
}
