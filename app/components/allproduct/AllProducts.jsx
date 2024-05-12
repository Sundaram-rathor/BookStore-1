'use client'

import React, { useEffect, useState } from 'react';
import OneProduct from '../oneProduct/OneProduct';
import productDataPromise from '../../data/collection.js'; // Import productDataPromise

function AllProducts() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Use Promise.then to handle resolved data
    productDataPromise.then(data => {
      // Once the Promise is resolved, update the state with the fetched data
      setProductData(data);
    }).catch(error => {
      console.error('Error fetching product data:', error);
    });
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      <div className='mx-10 font-bold border-b-2 border-indigo-500 my-10'>Recommended </div>
      <div className='grid grid-cols-4 gap-5'>
        {
          productData.map((product) => {
            return <OneProduct key={product.id} product={product} />;
          })
        }
      </div>
    </div>
  );
}

export default AllProducts;
