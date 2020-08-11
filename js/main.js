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

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',() => {
        cartsNumber();
    })
}


function cartsNumber(){
    let ProductNumber = parseInt(localStorage.getItem('cartNumber'))
    if(ProductNumber){
        localStorage.setItem('cartNumber',ProductNumber+1);
        document.querySelector('.cart span').textContent=ProductNumber+1;
    }
    else{
        localStorage.setItem('cartNumber',1);
        document.querySelector('.cart span').textContent=1;
    }
}

function realcart(){
    let x = localStorage.getItem('cartNumber')
    if(x){
        document.querySelector('.cart span').textContent=x;
    }

}

realcart();