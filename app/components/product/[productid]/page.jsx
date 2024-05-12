'use client'

import React, { useState, useEffect } from 'react';
import productDataPromise from '../../../data/collection.js'; // Import productDataPromise

import ProductDisplay from '../../productDisplay/ProductDisplay.jsx'



function PageNo({ params }) {
  const [productData, setProductData] = useState([]);
  

  useEffect(() => {
    // Use Promise.then to handle resolved data
    productDataPromise.then((data) => {
      // Once the Promise is resolved, update the state with the fetched data
      setProductData(data);
      
    })
    .catch((error) => {
      console.error('Error fetching product data:', error);
    });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Find the item based on the params.id


  return (
    <div className='flex'>
      {productData.map((item)=>{
        return  ((item.id==params.productid)&&(
            <div>
            
            <ProductDisplay info={item}/>
            </div>
          ))
      })}
    </div>
  );
}

export default PageNo;








<div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
        <div class="md:w-4/12 2xl:w-1/4 w-full">
          <img src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png" alt="Black Leather Purse" class="h-full object-center object-cover md:block hidden" />
          <img src="https://i.ibb.co/TTnzMTf/Rectangle-21.png" alt="Black Leather Purse" class="md:hidden w-full h-full object-center object-cover" />
        </div>
        <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
          <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
          <div class="flex items-center justify-between w-full">
            <p class="text-base font-black leading-none text-gray-800">Luxe card holder</p>
            <select aria-label="Select quantity" class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
          </div>
          <p class="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
          <p class="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
          <p class="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
          <div class="flex items-center justify-between pt-5">
            <div class="flex itemms-center">
              <p class="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
              <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
            </div>
            <p class="text-base font-black leading-none text-gray-800">,000</p>
          </div>
        </div>
      </div>