export let cart = [];

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
}
