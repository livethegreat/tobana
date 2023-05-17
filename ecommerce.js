
let span = document.getElementById('cart-el')
let cartEL = JSON.parse(localStorage.getItem('cartNumber')) 
console.log(cartEL);
let inCart = 0


if (span) {
    span.textContent = inCart + cartEL
}


inCart = cartEL
console.log(span);



let cost = JSON.parse(localStorage.getItem('price')) 

console.log(cost);


let items = {

    image: 'item-1',
    price: 1500 
}

let items2 = {

    image: 'item-2',
    price: 2000
}

let items3 = {

    image: 'item-3',
    price: 1000
}


console.log(items.image);

// images  // // images  // // images  // // images  // // images  // 

let productEL1 = document.getElementById('cartItems')
let productEL2 = document.getElementById('cartItems2')
let productEL3 = document.getElementById('cartItems3')
let addEL = document.getElementById('all')


let itemsEL = JSON.parse(localStorage.getItem('product-1')) 
let itemsEL2 = JSON.parse(localStorage.getItem('product-2')) 
let itemsEL3 = JSON.parse(localStorage.getItem('product-3'))


let cost2 = JSON.parse(localStorage.getItem('price-2')) 
let cost3 = JSON.parse(localStorage.getItem('price-3')) 
let quantityEL = JSON.parse(localStorage.getItem('quantity')) 
let quantityEL2 = JSON.parse(localStorage.getItem('quantity2')) 
let quantityEL3 = JSON.parse(localStorage.getItem('quantity3'))


let itemsInCart = 0
     let itemsInCart2 = 0
     let itemsInCart3 = 0
     

     itemsInCart = quantityEL
     itemsInCart2 = quantityEL2
     itemsInCart3 = quantityEL3

    
     let totalEL = 0

    let totEL = JSON.parse(localStorage.getItem('Total')) 

    console.log(totEL);

    totalEL = totEL
           
   

     
     
     


     
     





    
   
   
    






let goods = `<div id="price1">
            <img src="images/${itemsEL}.jpg" alt="item1">
            <h3>R${cost}</h3>
            <div class="buttons">
            <span id="minus" onclick="decreasing()">-</span>
            <span id="quantity">${itemsInCart}</span>
            <span id="plus" onclick="increasing()">+</span></div>
            <ion-icon id="remove-el" name="close-outline" onclick="cross()"></ion-icon>
            
            </div>`

let goods2 = `<div id="price1">
            <img src="images/${itemsEL2}.jpg" alt="item2">
            <h3>R${cost2}</h3>
            <div class="buttons">
            <span id="minus" onclick="decreasing2()">-</span>
            <span id="quantity2">${itemsInCart2}</span>
            <span id="plus" onclick="increasing2()">+</span></div>
            <ion-icon id="remove-el" name="close-outline" onclick="cross2()"></ion-icon>
          
            </div>`

let goods3 = `<div id="price1">
            <img src="images/${itemsEL3}.jpg" alt="item3">
            <h3>R${cost3}</h3>
            <div class="buttons">
            <span id="minus" onclick="decreasing3()">-</span>
            <span id="quantity3">${itemsInCart3}</span>
            <span id="plus" onclick="increasing3()">+</span></div>
            <ion-icon id="remove-el" name="close-outline" onclick="cross3()"></ion-icon>
            
            </div>`



 let shoped = document.getElementById('shop')           




           


            if (productEL1) {
                productEL1.innerHTML = goods
            } if (localStorage.getItem('price') === null) {
 
                if (productEL1) {
                    productEL1.innerHTML = ''
                    productEL1 = ''
                }
                
            }



            if (productEL2) {
                productEL2.innerHTML = goods2
            }

            if (localStorage.getItem('product-2') === null) {

                if (productEL2) {
                    productEL2.innerHTML = ''
                }
            }



            if (productEL3) {
                productEL3.innerHTML = goods3
            }

            if (localStorage.getItem('product-3') === null) {

                if (productEL3) {
                    productEL3.innerHTML = ''
                }
            }

            if (addEL) {

                addEL.innerHTML = `<h3>Total:R${totEL}</h3>`
                
            }if (localStorage.getItem('Total') === null) {
 
                if (addEL) {
                    addEL.innerHTML = `<h1>Your cart is empty</h1>`

                    shoped.style.width = "60%"
                    shoped.style.marginLeft = "20%"
                    
                }
                
            }

            console.log(totEL);

            if (totEL === 0) {
                if (addEL) {
                    addEL.innerHTML = `<h1>Your cart is empty</h1>`

                    shoped.style.width = "60%"
                    shoped.style.marginLeft = "20%"
                    
                }
            }

            

            
           


            



           

            let whole = document.getElementById('quantity')
            let whole2 = document.getElementById('quantity2')
            let whole3 = document.getElementById('quantity3')

          
       
           console.log(whole);
            
           cost = JSON.parse(localStorage.getItem('price'))

          

           function increasing() {

                
            itemsInCart = itemsInCart  + 1
    
            if (whole) {
                whole.innerHTML = itemsInCart
            }
    
    
           
            quantityEL = JSON.parse(localStorage.getItem('quantity'))
            totEL = JSON.parse(localStorage.getItem('Total')) 
            cost2 = JSON.parse(localStorage.getItem('price-2')) 
            cost3 = JSON.parse(localStorage.getItem('price-3'))
    
         
    
           items.price = 1500 * itemsInCart
           cost = items.price
             
             
           totalEL = cost + cost2 + cost3

           console.log(cost2);

           
    
           if (productEL1) {
            productEL1.innerHTML = `<div id="price1">
           <img src="images/${itemsEL}.jpg" alt="item1">
           <h3>R${items.price}</h3>
           <div class="buttons">
           <span id="minus" onclick="decreasing()">-</span>
           <span id="quantity">${itemsInCart}</span>
           <span id="plus" onclick="increasing()">+</span></div>
           <ion-icon id="remove-el" name="close-outline" onclick="cross()"></ion-icon>
           
           </div>`
           }

           if (addEL) {

            addEL.innerHTML = `<h3>Total:R${totalEL}</h3>`

    
            
        }
    
       

           

  localStorage.setItem('quantity',JSON.stringify(itemsInCart))
  localStorage.setItem('price', JSON.stringify(items.price))

  localStorage.setItem('Total', JSON.stringify(totalEL))
 


           
      
             
         }
           

            function increasing2() {
       
       
                itemsInCart2 = itemsInCart2  + 1
        
                if (whole2) {
                    whole2.innerHTML = itemsInCart2
                }

                cost = JSON.parse(localStorage.getItem('price')) 
            cost3 = JSON.parse(localStorage.getItem('price-3'))
        
               
                 localStorage.setItem('quantity2',JSON.stringify(itemsInCart2))

                 
    
           items2.price = 2000 * itemsInCart2
           cost2 = items2.price
             
             
         totalEL = cost + cost2 + cost3
    
           if (productEL2) {
            productEL2.innerHTML = `<div id="price1">
            <img src="images/${itemsEL2}.jpg" alt="item2">
            <h3>R${items2.price}</h3>
            <div class="buttons">
            <span id="minus" onclick="decreasing2()">-</span>
            <span id="quantity2">${itemsInCart2}</span>
            <span id="plus" onclick="increasing2()">+</span></div>
            <ion-icon id="remove-el" name="close-outline" onclick="cross2()"></ion-icon>
           
            </div>`
   
             }

             if (addEL) {

                addEL.innerHTML = `<h3>Total:R${totalEL}</h3>`
                
            }

            

             localStorage.setItem('price-2', JSON.stringify(items2.price)) 
            localStorage.setItem('Total', JSON.stringify(totalEL))
                 

            }




             function increasing3() {
       
       
                itemsInCart3 = itemsInCart3  + 1
        
                if (whole3) {
                    whole3.innerHTML = itemsInCart3
                }
        
                cost = JSON.parse(localStorage.getItem('price')) 
                cost2 = JSON.parse(localStorage.getItem('price-2'))
               
                 localStorage.setItem('quantity3',JSON.stringify(itemsInCart3))

                 items3.price = 1000 * itemsInCart3

                 cost3 = items3.price
             
             
             totalEL = cost + cost2 + cost3
    
                 if (productEL3) {
                  productEL3.innerHTML = `<div id="price1">
                  <img src="images/${itemsEL3}.jpg" alt="item3">
                  <h3>R${items3.price}</h3>
                  <div class="buttons">
                  <span id="minus" onclick="decreasing3()">-</span>
                  <span id="quantity3">${itemsInCart3}</span>
                  <span id="plus" onclick="increasing3()">+</span></div>
                  <ion-icon id="remove-el" name="close-outline" onclick="cross3()"></ion-icon>
                 
                  </div>`
                 }

                 if (addEL) {

                    addEL.innerHTML = `<h3>Total:R${totalEL}</h3>`
                    
                }
        
                 console.log(whole);

                 
             localStorage.setItem('price-3', JSON.stringify(items3.price))
             localStorage.setItem('Total', JSON.stringify(totalEL))

            

    
                 
             }




              
            function decreasing() {
       
               
                itemsInCart = itemsInCart  - 1

              

               
                if (whole) {
                    whole.innerHTML = itemsInCart
                }
        
                

                items.price = 1500 * itemsInCart
    
                if (productEL1) {
                 productEL1.innerHTML = `<div id="price1">
                <img src="images/${itemsEL}.jpg" alt="item1">
                <h3>R${items.price}</h3>
                <div class="buttons">
                <span id="minus" onclick="decreasing()">-</span>
                <span id="quantity">${itemsInCart}</span>
                <span id="plus" onclick="increasing()">+</span></div>
                <ion-icon id="remove-el" name="close-outline" onclick="cross()"></ion-icon>
                
                </div>`
                }

                totEL = JSON.parse(localStorage.getItem('Total'))
                cost = JSON.parse(localStorage.getItem('price')) 
               

                cost = items.price
   
              
                
                
                totalEL = totEL - 1500

                if (addEL) {

                    addEL.innerHTML = `<h3>Total:R${totalEL}</h3>`
                    
                }

                if (totalEL === 0) {
                    if (addEL) {
                        addEL.innerHTML = `<h1>Your cart is empty</h1>`

                        shoped.style.width = "60%"
                        shoped.style.marginLeft = "20%"
                       
                    }
                }

               
                localStorage.setItem('quantity',JSON.stringify(itemsInCart))
                localStorage.setItem('productNumber',JSON.stringify(inCartEL))
                localStorage.setItem('price', JSON.stringify(items.price))
                
                

               if (itemsInCart < 1) {
                
                productEL1.remove()
                localStorage.removeItem('price')
                localStorage.removeItem('product-1')
                localStorage.removeItem('quantity')
                localStorage.removeItem('productNumber')
                inCart = inCart - 1

               }

               if (cost === null) {

                cost = 0
                
               }
                
            
               localStorage.setItem('cartNumber',inCart) 
               localStorage.setItem('Total', JSON.stringify(totalEL))

                 
        
                 console.log(whole);

               
                 
             }




               
            function decreasing2() {
       
               
                itemsInCart2 = itemsInCart2  - 1

             

               
                if (whole2) {
                    whole2.innerHTML = itemsInCart2
                }
        
              


                items2.price = 2000 * itemsInCart2
    
           if (productEL2) {
            productEL2.innerHTML = `<div id="price1">
            <img src="images/${itemsEL2}.jpg" alt="item2">
            <h3>R${items2.price}</h3>
            <div class="buttons">
            <span id="minus" onclick="decreasing2()">-</span>
            <span id="quantity2">${itemsInCart2}</span>
            <span id="plus" onclick="increasing2()">+</span></div>
            <ion-icon id="remove-el" name="close-outline" onclick="cross2()"></ion-icon>
            
            </div>`
   
             }

            
             totEL = JSON.parse(localStorage.getItem('Total'))
             
               
               
                 cost2 = items2.price

                

                 

                 totalEL = totEL - 2000

             
                 if (addEL) {

                    addEL.innerHTML = `<h3>Total:R${totalEL}</h3>`
                    
                }
                if (totalEL === 0) {
                    if (addEL) {
                        addEL.innerHTML = `<h1>Your cart is empty</h1>`

                        shoped.style.width = "60%"
                        shoped.style.marginLeft = "20%"
                       
                    }
                }
                
                localStorage.setItem('quantity2',JSON.stringify(itemsInCart2))
                localStorage.setItem('productNumber2',JSON.stringify(inCartEL2))
                localStorage.setItem('price-2', JSON.stringify(items2.price))
                

               if (itemsInCart2 < 1) {
                
                productEL2.remove()
                localStorage.removeItem('price-2')
                localStorage.removeItem('product-2')
                localStorage.removeItem('quantity2')
                localStorage.removeItem('productNumber2')
                inCart = inCart - 1

               }

               

               localStorage.setItem('cartNumber',inCart)
               localStorage.setItem('Total', JSON.stringify(totalEL))
          
             }



               
            function decreasing3() {
       
               
                itemsInCart3 = itemsInCart3  - 1


               
                if (whole3) {
                    whole3.innerHTML = itemsInCart3
                }
        
                 

                items3.price = 1000 * itemsInCart3
    
                if (productEL3) {
                 productEL3.innerHTML = `<div id="price1">
                 <img src="images/${itemsEL3}.jpg" alt="item3">
                 <h3>R${items3.price}</h3>
                 <div class="buttons">
                 <span id="minus" onclick="decreasing3()">-</span>
                 <span id="quantity3">${itemsInCart3}</span>
                 <span id="plus" onclick="increasing3()">+</span></div>
                 <ion-icon id="remove-el" name="close-outline" onclick="cross3()"></ion-icon>
               
                 </div>`
                }

                
             totEL = JSON.parse(localStorage.getItem('Total'))
               
               
             cost3 = items3.price

             

             

             totalEL = totEL - 1000

             if (addEL) {

                addEL.innerHTML = `<h3>Total:R${totalEL}</h3>`
                
            } if (totalEL === 0) {
                if (addEL) {
                    addEL.innerHTML = `<h1>Your cart is empty</h1>`

                    shoped.style.width = "60%"
                    shoped.style.marginLeft = "20%"
                   
                }
            }


            
            localStorage.setItem('quantity3',JSON.stringify(itemsInCart3))
            localStorage.setItem('productNumber3',JSON.stringify(inCartEL3))
            localStorage.setItem('price-3', JSON.stringify(items3.price))
            
            

           if (itemsInCart3 < 1) {
            
            productEL3.remove()
            localStorage.removeItem('price-3')
            localStorage.removeItem('product-3')
            localStorage.removeItem('quantity3')
            localStorage.removeItem('productNumber3')
            inCart = inCart - 1

           }

           localStorage.setItem('Total', JSON.stringify(totalEL))
        localStorage.setItem('cartNumber',inCart)
           
                 
             }



             function cross() {
       
                cost = JSON.parse(localStorage.getItem('price'))

                localStorage.setItem('quantity',JSON.stringify(itemsInCart))
                localStorage.setItem('productNumber',JSON.stringify(inCartEL))
                localStorage.setItem('price', JSON.stringify(items.price))
                
               
               
               
                
                productEL1.remove()
                localStorage.removeItem('price')
                localStorage.removeItem('product-1')
                localStorage.removeItem('quantity')
                localStorage.removeItem('productNumber')
             
            
               
                inCart = inCart - 1

                totEL = JSON.parse(localStorage.getItem('Total'))
                
                totalEL = totEL - cost
                totEL = totalEL
               
               

                if (addEL) {

                    addEL.innerHTML = `<h3>Total:R${totEL}</h3>`
                    
                }

                
                if (totalEL === 0) {
                    if (addEL) {
                        addEL.innerHTML = `<h1>Your cart is empty</h1>`

                        shoped.style.width = "60%"
                        shoped.style.marginLeft = "20%"
                        
                    }
                }

               
               
        
                localStorage.setItem('cartNumber',inCart)
                localStorage.setItem('Total', JSON.stringify(totalEL))
                
                 

                
        
                 console.log(whole);
                 
             }


             function cross2() {
       
                cost2 = JSON.parse(localStorage.getItem('price-2'))

                localStorage.setItem('quantity2',JSON.stringify(itemsInCart2))
                localStorage.setItem('productNumber2',JSON.stringify(inCartEL2))
                localStorage.setItem('price-2', JSON.stringify(items2.price))
                

            
                
                productEL2.remove()
                localStorage.removeItem('price-2')
                localStorage.removeItem('product-2')
                localStorage.removeItem('quantity2')
                localStorage.removeItem('productNumber2')
                
                inCart = inCart - 1

               

                totEL = JSON.parse(localStorage.getItem('Total'))
                
               

                totalEL = totEL - cost2
                totEL = totalEL

                
                
                
                
             

                if (addEL) {

                    addEL.innerHTML = `<h3>Total:R${totEL}</h3>`
                    
                }

               if (totalEL === 0) {
                   if (addEL) {
                       addEL.innerHTML = `<h1>Your cart is empty</h1>`

                       shoped.style.width = "60%"
                       shoped.style.marginLeft = "20%"
                       
                   }
               }
               

        localStorage.setItem('Total', JSON.stringify(totalEL))
                localStorage.setItem('cartNumber',inCart) 
                
          
             }



                 
            function cross3() {
       
                cost3 = JSON.parse(localStorage.getItem('price-3'))

                localStorage.setItem('quantity3',JSON.stringify(itemsInCart3))
                localStorage.setItem('productNumber3',JSON.stringify(inCartEL3))
                localStorage.setItem('price-3', JSON.stringify(items3.price))
               

               
                
                productEL3.remove()
                localStorage.removeItem('price-3')
                localStorage.removeItem('product-3')
                localStorage.removeItem('quantity3')
                localStorage.removeItem('productNumber3')
                inCart = inCart - 1

                totEL = JSON.parse(localStorage.getItem('Total'))
                

                totalEL = totEL - cost3
                totEL = totalEL

                if (addEL) {

                    addEL.innerHTML = `<h3>Total:R${totEL}</h3>`
                    
                }
                    
                 if (totalEL === 0) {
                   if (addEL) {
                       addEL.innerHTML = `<h1>Your cart is empty</h1>`

                       shoped.style.width = "60%"
                       shoped.style.marginLeft = "20%"
                       
                   }
               }

        
                localStorage.setItem('cartNumber',inCart) 
                localStorage.setItem('Total', JSON.stringify(totalEL))
        
                 
             }





 



             let inCartEL = 0
             let inCartEL2 = 0
             let inCartEL3 = 0



             let inProduct = JSON.parse(localStorage.getItem('productNumber'))
             let inProduct2 = JSON.parse(localStorage.getItem('productNumber2'))
             let inProduct3 = JSON.parse(localStorage.getItem('productNumber3'))


             
             
   
             inCart = inProduct + inProduct2 + inProduct3
             console.log(inCart);

           inCart = cartEL
           inCartEL = inProduct
           inCartEL2 = inProduct2
           inCartEL3 = inProduct3
           

console.log(cost);

let indexEL1 = document.getElementById('product-1')

      
function product1() {


    localStorage.setItem('cartNumber',inCart)

     inCartEL = inCartEL + 1

     if (inCartEL > 1) {

        inCartEL = 1

        alert('This item is already in the cart')
        
    }
  
    inCart = inCartEL + inCartEL2 + inCartEL3
    console.log(inCart);

  

    span.textContent = inCart
    
     localStorage.setItem('cartNumber',inCart)
     localStorage.setItem('product-1',JSON.stringify(items.image))
     

     quantityEL = JSON.parse(localStorage.getItem('quantity'))
      cost = JSON.parse(localStorage.getItem('price')) 
     

 
     
    itemsInCart = itemsInCart + 1

    if (itemsInCart > 1) {
        itemsInCart = quantityEL
       items.price = cost
       
    }

    
  
    localStorage.setItem('price', JSON.stringify(items.price))
     localStorage.setItem('quantity',JSON.stringify(itemsInCart))
     localStorage.setItem('productNumber',JSON.stringify(inCartEL))
   
     

     console.log(inCart);
    
     cost = JSON.parse(localStorage.getItem('price'))
     cost2 = JSON.parse(localStorage.getItem('price-2'))
     cost3 = JSON.parse(localStorage.getItem('price-3'))


     totalEL = cost + cost2 + cost3

     

     localStorage.setItem('Total', JSON.stringify(totalEL))


   

     console.log('clicked');
      
}


function product2() {

    localStorage.setItem('cartNumber',inCart) 
    
  
    inCartEL2 = inCartEL2 + 1

    if (inCartEL2 > 1) {

       inCartEL2 = 1

       alert('This item is already in the cart')
       
   }
  
    inCart = inCartEL + inCartEL2 + inCartEL3

   
  
  
    
    span.textContent = inCart

     localStorage.setItem('cartNumber',inCart)
     localStorage.setItem('product-2', JSON.stringify(items2.image))
     

   
     

     console.log(inCart);

     quantityEL2 = JSON.parse(localStorage.getItem('quantity2'))
     cost2 = JSON.parse(localStorage.getItem('price-2'))
     totEL = JSON.parse(localStorage.getItem('Total'))
     
     itemsInCart2 = itemsInCart2 + 1
 
     if (itemsInCart2 > 1) {
         itemsInCart2 = quantityEL2
         items2.price = cost2
     }

     localStorage.setItem('price-2', JSON.stringify(items2.price))
     localStorage.setItem('quantity2',JSON.stringify(itemsInCart2))
     localStorage.setItem('productNumber2',JSON.stringify(inCartEL2))

     cost = JSON.parse(localStorage.getItem('price'))
     cost2 = JSON.parse(localStorage.getItem('price-2'))
     cost3 = JSON.parse(localStorage.getItem('price-3'))

      
     totalEL = cost + cost2 + cost3

     

     localStorage.setItem('Total', JSON.stringify(totalEL))


}

function product3() {

    inCartEL3 = inCartEL3 + 1

    if (inCartEL3 > 1) {

       inCartEL3 = 1

       alert('This item is already in the cart')
       
   }
  
    inCart = inCartEL + inCartEL2 + inCartEL3

   
    
    span.textContent = inCart

     localStorage.setItem('cartNumber',inCart)
     localStorage.setItem('product-3',JSON.stringify(items3.image))
    

    
    
     quantityEL3 = JSON.parse(localStorage.getItem('quantity3'))
     
     itemsInCart3 = itemsInCart3 + 1
 
     if (itemsInCart3 > 1) {
         itemsInCart3 = quantityEL3
         items3.price = cost3
     }
    
     localStorage.setItem('price-3', JSON.stringify(items3.price))
     localStorage.setItem('quantity3',JSON.stringify(itemsInCart3))
     localStorage.setItem('productNumber3',JSON.stringify(inCartEL3))

     cost = JSON.parse(localStorage.getItem('price'))
     cost2 = JSON.parse(localStorage.getItem('price-2'))
     cost3 = JSON.parse(localStorage.getItem('price-3'))

     totalEL = cost + cost2 + cost3

     
     localStorage.setItem('Total', JSON.stringify(totalEL))
  
}





// Home page

let opened = document.getElementById('align')
let index = document.getElementsByClassName('me')

let scrollEL = document.getElementById('products')
let testing = document.getElementById('head-el')
let trying = document.getElementById('try')


function openEL() {


opened.innerHTML = `<div id="sliding"><ion-icon name="close-outline" onclick="closeEL()">
</ion-icon>


<ul align="center">
<a href="index.html"><li>Home</li></a>
        <a href="index.html#about-el"><li onclick="closeEL()">About Us</li></a>
        <a href="index.html#products"><li onclick="closeEL()">Shop</li></a>
        <a href="index.html#foot"><li onclick="closeEL()">Contact Us</li></a>
      
</ul> 

</div>
`
opened.style.zIndex = "1";
scrollEL.style.zIndex = "0";


    
}











function closeEL() {

opened.innerHTML = `<ion-icon name="menu-outline" id="open" onclick="openEL()"></ion-icon>`

opened.style.zIndex = "1";
headEL.style.zIndex = "1";


}

let headEL = document.getElementById('headings')





window.onscroll = function scroll() {

 
let scrolled = window.scrollY

console.log(testing);

if (scrolled) {
    headEL.style.zIndex = "1";
    opened.style.zIndex = "1";
    scrollEL.style.zIndex = "0";
   

    
    
   
   

    
}


    
}


