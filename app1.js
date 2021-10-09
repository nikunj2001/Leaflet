const map = L.map('map').setView([22, 79], 13);
const titleUrl ="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";


const attribution='&copy; <a>OpenStreetMap</a>Contributors';
const tiles =L.tileLayer(titleUrl,{attribution});
tiles.addTo(map);


const CLayer = L.circle([22,79],{radius:200000,stroke:false});
CLayer.addTo(map);
const bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
const rectangle = L.rectangle(bounds);
rectangle.addTo(map);

const bTriangle = [
    [
        [25.774,-80.19],
        [18.466,-66.118],
        [32.321,-64.757]
    ]
]
const polygon = L.polygon(bTriangle);
polygon.addTo(map);
const latlngs = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];
const polyline = L.polyline(latlngs);
polyline.addTo(map);
// const icon = {
//     iconUrl:'cart-black.png',
    
// }
const icon = L.icon({
    iconUrl:'cart-black.png',
    iconSize:[80,60]
})
 


const marker = L.marker([18.920,72],{
    icon
});
const marker2 = L.marker([18.620,51.993333],{
    icon
});
const marker3 = L.marker([16.620,51.993333],{
    icon
});
marker.bindTooltip('<h2>Pizza Outlet1</h2>');
marker2.bindTooltip('<h2>Pizza Outlet2</h2>');
// marker.addTo(map);
// marker2.addTo(map);
L.layerGroup([marker,marker2,marker3]).addTo(map);

