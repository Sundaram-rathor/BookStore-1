'use client'

import React, { useState, useEffect } from 'react';
import ProductDisplay from '../../productDisplay/ProductDisplay';
import productDataPromise from '../../../data/collection.js';

function PageNo({ params }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await productDataPromise;
        const foundProduct = productData.find((p) => p.id.toString() === params.productid);
        setProduct(foundProduct);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [params.productid]);

  return (
    <div>
      {product ? (
        <ProductDisplay info={product} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default PageNo;