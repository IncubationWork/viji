
let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
{
id: 1,
name: 'Name Product white-black',
price: 1200,
quantity: 0,
image: 'images/img1.png',
nature:  { 
    color: ['white','black'],
    size: ['S','M','L'],
    type: 'frock'
}
},
{
id:2,
name: 'Name Product white-black-grey',
price: 750,
quantity:20,
image:'images/img2.png',
nature:{
    color:['white','black','grey'],
    size: ['S','M','L'],
    type:'frock'
}
},
{
id:3,
name: 'Name Product blue-black',
price: 1176,
quantity:30,
image:'images/img3.png',
nature:{
    color:['blue','black'],
    size: ['S','M','L'],
    type:'frock'
}
},
{
id:4,
name: 'Name Product red-black',
price: 845,
quantity:30,
image:'images/img4.png',
nature:{
    color:['red','black'],
    size: ['S','M','L'],
    type:'tracks'
}
},
{
id:5,
name: 'Name Product brown-black',
price: 567,
quantity:30,
image:'images/img5.png',
nature:{
    color:['black'],
    size: ['S','M','L'],
    type:'shirt'
}
},
{
id:6,
name: 'Name Product white-black',
price: 768,
quantity:30,
image:'images/img6.png',
nature:{
    color:['white','black'],
    size: ['S','M','L'],
    type:'pants'
}
},

];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct (productFilter){
count.innerText = productFilter.length;
list.innerHTML = '';
productFilter.forEach(item =>{
let newItem = document.createElement('div');
newItem.classList.add('item');

//create image
let newImage = new Image();
newImage.src = item.image;
newItem.appendChild(newImage);
 //create name product
let newTitle = document.createElement('div');
newTitle.classList.add('title');
newTitle.innerText = item.name;
newItem.appendChild(newTitle);
//create price
let newPrice = document.createElement('div');
newPrice.classList.add('price');
newPrice.innerText = item.price.toLocaleString();
newItem.appendChild(newPrice);

list.appendChild(newItem);

});
}
filter.addEventListener('submit',function(event){
event.preventDefault();
let valueFilter = event.target.elements;
productFilter = listProducts.filter(item =>{

//check minprice
if(valueFilter.minPrice.value !=''){
    if(item.price < valueFilter.minPrice.value){
        return false;
         
    }
}
//check maxprice
if(valueFilter.maxPrice.value !=''){
    if(item.price > valueFilter.maxPrice.value){
        return false;
    }
}
return true;
})
showProduct(productFilter);

})

