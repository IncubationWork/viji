let list=document.getElementById('list');
let filter = document.querySelector('.filter');
let count=document.getElementById('count');
let listProducts=[
    {
        id: 1,
        name:'Name Produnt white-black',
        price:34,
        quantity:0,
        image:'ds.jpg',
        nature:{
            color:['white','black'],
            size:['s','m','L'],
            type:'saree'
        }
    },
    {
        id: 1,
        name:'Name Produnt white-black',
        price:34,
        quantity:0,
        image:'ds.jpg',
        nature:{
            color:['white','black'],
            size:['s','m','L'],
            type:'gown'
        }
    }
];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
    count.innerText= productFilter.lenght;
    list.innerHTML='';
    productFilter.forEach(iem=>{
        let newItem =document.createElement('div');
        newItem.classList.add('item');

        //create image
        let newImage=new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
         //create new product
         let newTitle=document.createElement('div');
         newTitle.classList.add('title');
         newTitle.innerText= item.name;
         newItem.appendChild(newTitle);
         //create price
         let newPrice=document.createElement('div');
         newPrice.classList.add('price');
         newPrice.innerText=item.price.toLocaleString();
         newItem.appendChild(newPrice);

         list.appendChild(newItem);


    });
}
filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter=event.target.elements;
    productFilter=listProducts.filter(item=>{
        //check category
        if(valueFilter.category.value !=''){
            if(item.nature.type != valueFilter.category.value){
                return false;
            }
        }
        //check color
        if(valueFilter.color.value !=''){
            if(item.nature.color.includes(valueFilter.color.value)){
                return false;
            }
        }
        //check name
        if(valueFilter.name.value !=''){
            if(!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
        return true;
    })
    showProduct(productFilter)
})