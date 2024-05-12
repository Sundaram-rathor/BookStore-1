// components/product/[productid]/page.jsx
'use client'
import React, { useState, useEffect } from 'react';
import ProductDisplay from '../../productDisplay/ProductDisplay.jsx';
import productDataPromise from '../../../data/collection.js';
import dynamic from 'next/dynamic';

const PageNo = (props) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productDataPromise;
        const foundProduct = data.find((p) => p.id.toString() === props.params.productid);
        setProduct(foundProduct);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [props.params.productid]);

  return (
    <div>
      {product ? (
        <ProductDisplay info={product} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(PageNo), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});