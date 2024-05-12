import React from 'react'
import Hero from '../hero/Hero'
import AllProducts from '../allproduct/AllProducts'

function Body() {
  return (
    <div className='h-auto bg-color-red-500'>
      <div className='h-[50vh]'>
      <Hero/>
      </div>
      <div >
      <AllProducts/>
      </div>
    </div>
  )
}

export default Body