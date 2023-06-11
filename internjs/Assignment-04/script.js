
let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let filterIcon = document.getElementById('search')
let listProducts = [
{
id: 1,
name: 'Name Product skyblue',
price: 1200,
quantity: 0,
image: 'images/img1.png',

},
{
id:2,
name: 'Name Product blue',
price: 750,
quantity:20,
image:'images/img2.png',

},
{
id:3,
name: 'Name Product peach',
price: 1176,
quantity:30,
image:'images/img3.png',

},
{
id:4,
name: 'Name Product red-white',
price: 845,
quantity:30,
image:'images/img4.png',

},
{
id:5,
name: 'Name Product multi-color',
price: 567,
quantity:30,
image:'images/img5.png',

},
{
id:6,
name: 'Name Product white',
price: 768,
quantity:30,
image:'images/img6.png',

},
{
    id:7,
    name: 'Name Product orange',
    price: 1350,
    quantity:30,
    image:'images/img7.png',
   
    },
    {
        id:8,
        name: 'Name Product orange',
        price: 1350,
        quantity:30,
        image:'images/img8.png',
    }   
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

//check maxprice
if(valueFilter.Price.value !=''){
    if(item.price > valueFilter.Price.value){
        return false;
    }
}
return true;
})
showProduct(productFilter);

})
