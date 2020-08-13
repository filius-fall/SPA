// // window.addEventListener("hashchange",function(){
// //     console.log(location.hash);
// // });
// function getContent(x){
//     var items={
//         home:"this is home page",
//         about:"Thid is about page",
//         contact:"this is contact page",
//     };
//     return items[x];
// }
// function loadContent(){
//     var contentDiv = document.getElementById("app");
//     name=location.hash.substr(1);
//     contentDiv.innerHTML = getContent(name);
// }

// if(!location.hash){
//     location.hash="#home";
// }
// loadContent();
// window.addEventListener("hashchange", loadContent)



let carts = document.querySelectorAll(".add-cart")


let products = [
    

    {
        name:'Arduino Uno',
        tag:'arduino',
        price:500,
        inCart:0,
    },

    {
        name:'Relay',
        tag:'relay',
        price:150,
        inCart:0,
    },

    {
        name:'Raspberry pi',
        tag:'raspberrypi',
        price:3500,
        inCart:0,
    },

    {
        name:'Node MCU',
        tag:'nodemcu',
        price:200,
        inCart:0,
    },

    
];
    

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',() => {
        cartsNumber(products[i]);
        totalCost(products[i])
    })
}




function cartsNumber(product){
    console.log("your items are",product);
    let ProductNumber = parseInt(localStorage.getItem('cartNumber'));
    if(ProductNumber){
        localStorage.setItem('cartNumber',ProductNumber+1);
        document.querySelector('.cart span').textContent=ProductNumber+1;
    }else{
        localStorage.setItem('cartNumber',1);
        document.querySelector('.cart span').textContent=1;
    }
    setItems(product);
}

function setItems(product){
    console.log("you are now inside setItmes");
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null){
        console.log("you are inside not null");
        if (cartItems[product.tag] == undefined){
            console.log("you are inside undefined");
            cartItems={
                ...cartItems,
                [product.tag]:product  
            }
            console.log("cartItems",cartItems);
        }
        console.log("you are outside undefined")
        cartItems[product.tag].inCart += 1;
    } else {
        console.log("1")
        product.inCart = 1;

        cartItems = {
            [product.tag]:product
        }
        
    }
    
    localStorage.setItem('productInCart',JSON.stringify(cartItems));
}

function realcart(){
    let x = localStorage.getItem('cartNumber')
    if(x){
        document.querySelector('.cart span').textContent=x;
    }

}

function totalCost(product){
    console.log("The Product Proce is:",product.price)
    let cartCost = localStorage.getItem("totalcost",product.price);

    if (cartCost != null){
        cartCost = parseInt(localStorage.getItem("totalcost",product.price));
        localStorage.setItem("totalcost", cartCost + product.price);
        console.log(typeof(product.price));
    } else{
        localStorage.setItem("totalcost", product.price);
    }
}

function displayCartItems(){
    console.log("display cart items");
    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    if (cartItems && productContainer){
        console.log("inside if");
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            console.log("inside obj");
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close"></ion-icon>
                <img src="./css/images/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>

            <div class="price">${item.price}</div>
            <div class="quantity">${item.inCart}</div>
            <div class="total">${item.inCart * item.price}</div>
            `
        });

    } 
}

realcart();
displayCartItems();