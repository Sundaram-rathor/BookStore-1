'use client'

import React, { useEffect, useState } from 'react'
import productDataPromise from '../../data/collection'
import Link from 'next/link';


function Cart() {
  const [productData,setProductData]= useState([])
  const [selectedProductIds, setSelectedProductIds] = useState([]);


  useEffect(() => {
    productDataPromise.then((data) => {
      setProductData(data);
    }).catch((err) => {
      console.log('Error fetching product data in cart:', err);
    });
  
    // Retrieve selected product IDs from local storage
    const localStorageData = window.localStorage.getItem('selectedProducts');
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      setSelectedProductIds(parsedData);
    }
  }, []);
  
const uniqueProductIds = selectedProductIds.filter(id => !isNaN(id));

const finalCart = [...new Set(uniqueProductIds)]
console.log(finalCart)

let cartPrice = 0 ;

for(let i=0 ; i<finalCart.length; i++){
  cartPrice = cartPrice+ productData[finalCart[i]-1].price;
}


function removeItem(id){
  const updatedCart = finalCart.filter(itemId => itemId !== id);

  // Update selectedProducts state
  setSelectedProductIds(updatedCart);

  // Update local storage
  window.localStorage.setItem('selectedProducts', JSON.stringify(updatedCart));
}

  return (

    <div>
     
        <div className='text-5xl py-5 px-32'>Cart</div>
        <div class="container mx-auto mt-10">
  <div class="sm:flex shadow-md my-10">
    <div class="  w-full  sm:w-3/4 bg-white px-10 py-10">
      <div class="flex justify-between border-b pb-8">
        <h1 class="font-semibold text-2xl">Shopping Cart</h1>
        <h2 class="font-semibold text-2xl">{finalCart.length} Items</h2>
      </div>

      //cart product
      {finalCart.map((item)=>{
       return <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
        <div class="md:w-4/12 2xl:w-1/4 w-full">
          <img src={productData[item-1].image} alt="Black Leather Purse" class="h-full w-full object-center object-contain md:block hidden" />
          <img src="https://i.ibb.co/TTnzMTf/Rectangle-21.png" alt="Black Leather Purse" class="md:hidden w-full h-full object-center object-contain" />
        </div>
        <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
          <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{productData[item-1].category}</p>
          <div class="flex items-center justify-between w-full">
            <p class="text-base font-black leading-none text-gray-800 mt-5 mb-2">{productData[item-1].title}</p>
            <select aria-label="Select quantity" class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
          </div>
          <p class="text-xs leading-3 text-gray-600 pt-2">Rating: {productData[item-1].rating.rate}</p>
          <p class="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
          <p class="w-96 text-xs leading-3 text-gray-600">{productData[item-1].rating.count }</p>
          <div class="flex items-center justify-between pt-5">
            <div class="flex itemms-center">
              <p class="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
              <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={()=>{removeItem(item)}}>Remove</p>
            </div>
            <p class="text-base font-black leading-none text-gray-800">${productData[item-1].price}</p>
          </div>
        </div>
      </div>
      })}
      //end cart product

      
      <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
        <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
          <path
            d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
        </svg>
       <Link href='/'> Continue Shopping</Link>
      </a>
    </div>
    <div id="summary" class=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
      <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div class="flex justify-between mt-10 mb-5">
        <span class="font-semibold text-sm uppercase">Items {finalCart.length}</span>
        <span class="font-semibold text-sm">${cartPrice}</span>
      </div>
      <div>
        <label class="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
        <select class="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
      </div>
      <div class="py-10">
        <label
              for="promo"
              class="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
        <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              class="p-2 text-sm w-full"
            />
      </div>
      <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
      <div class="border-t mt-8">
        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>${cartPrice+10}</span>
        </div>
        <a href="https://buy.stripe.com/test_bIYcNB7pd6ZIeoEaEF">  <button  class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
             Checkout
            </button></a>
      </div>
    </div>
  </div>
</div>s
    </div>
  )
}

export default Cart