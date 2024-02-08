export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = [{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:2
    },{
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:1
    }];
    
}



//creating localstorage to save cart on cartbox ok
function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}




export function addTocart(productId){
    //check iteam in the cart

   let matchingIteam;

   cart.forEach((cartIteam)=>{
   if(productId === cartIteam.productId){
      matchingIteam = cartIteam;
   }
   });
   //increase quantity
   if(matchingIteam){
       matchingIteam.quantity++;
   }else{
       cart.push({
           productId: productId,
           quantity: 1
       });
   }

   saveToStorage();
}


export function removeFromCart(productId){
    let newCart = [];
    
     cart.forEach((cartIteam)=>{
        if(cartIteam.productId !== productId){
            newCart.push(cartIteam);
        }

     });

    cart = newCart; 
   
   
    saveToStorage();
}




