let btn = <HTMLElement>document.getElementById('btn');
let brands =[
  {name:"tesla", image:"http://kevingileswebdeveloper.com/tesla-model1-s.png"},
  {name:"bmw", image:"http://kevingileswebdeveloper.com/tesla-model1-s.png"},
  {name:"benz", image:"http://assets.mbusa.com/vcm/MB/DigitalAssets/Vehicles/Models/2015/S550V/Headers/2015-S-CLASS-S550-SEDAN-BASE-MH1-D.png"}

]

 btn.addEventListener('click',() => {
  let brand = <HTMLInputElement>document.getElementById('brand')
  let inputValue = brand.value;
  let name = inputValue.toLowerCase();
  console.log(name);
});
