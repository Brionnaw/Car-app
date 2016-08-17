var btn = document.getElementById('btn');
var brands = [
    { name: "tesla", image: "http://kevingileswebdeveloper.com/tesla-model1-s.png" },
    { name: "bmw", image: "http://kevingileswebdeveloper.com/tesla-model1-s.png" },
    { name: "benz", image: "http://assets.mbusa.com/vcm/MB/DigitalAssets/Vehicles/Models/2015/S550V/Headers/2015-S-CLASS-S550-SEDAN-BASE-MH1-D.png" }
];
btn.addEventListener('click', function () {
    var brand = document.getElementById('brand');
    var inputValue = brand.value;
    var name = inputValue.toLowerCase();
    console.log(name);
});
