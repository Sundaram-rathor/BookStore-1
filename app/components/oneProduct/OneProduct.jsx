import React, { useState } from 'react';
import Link from 'next/link';


function OneProduct({product}) {

  

  
    
  return (
    <div className='h-96 px-10 cursor-pointer' >
        
       <Link href={`components/product/${product.id}`}> <div className='h-2/3 '>
          <img src={product.image} alt="" className='object-contain w-full h-full ' />
        </div>
         <div>
            <div>{product.title}</div>
            <div className='font-bold'>{product.category}</div>
        </div>
        </Link>

    </div>
   
  );
}

export default OneProduct;
