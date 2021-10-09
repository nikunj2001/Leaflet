const myMap = L.map('map',{}).setView([22.9074872,73.07306671],5)
const titleUrl ="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution='&copy; <a>OpenStreetMap</a>Contributors';
const tileLayer =L.tileLayer(titleUrl,{attribution});
tileLayer.addTo(myMap);
const generateList=()=>{
    const ul=document.querySelector(".list");
    storeList.forEach((shop)=>{
        const li = document.createElement('li');
        const div=document.createElement('div');
        const a=document.createElement('a');
        const p=document.createElement('p');
        a.addEventListener('click',()=>{
            flyToStore(shop);
        })
        div.classList.add('shop-item')
        a.innerText = shop.properties.name;
        a.href = "#";
        p.innerText=shop.properties.address;
        div.appendChild(a);
        div.appendChild(p);
        li.appendChild(div);
        ul.appendChild(li);
    })
}
const makePopupContent=(shop)=>{
    return `
        <div>
        <h4>${shop.properties.name}</h4>
        <p>${shop.properties.address}</p>
        <div class="phone-number">
            <a href="tel:${shop.properties.phone}">${shop.properties.phone}</a>
        </div>
        </div>
    `;
}
generateList();
const onEachFeature=(feature,layer)=>{
    layer.bindPopup(makePopupContent(feature),{closeButton:false,offset:L.point(0,-8)});
}
var myIcon= L.icon({
    iconUrl:"marker.png",
    iconSize:[30,40]})
const shopsLayer = L.geoJSON(storeList,{
    onEachFeature,
    pointToLayer:(feature,latlng)=>{
            return L.marker(latlng,{icon:myIcon});
    }
});
shopsLayer.addTo(myMap);

const flyToStore=(store)=>{
    const lat=store.geometry.coordinates[1];
    const lng=store.geometry.coordinates[0];
    myMap.flyTo([lat,lng],14,{
          duration:3
    })
    setTimeout(()=>{
L.popup({closeButton:false,offset:L.point(0,-8)}).setLatlng([lat,lng]).setContent(makePopupContent(store)).openOn(myMap);
    },3000)

}
