import React from 'react'


function Navigation() {
    let nav=['Mens Clothing','Women Clothing','Jewelery'];
  return (
    <div className='flex gap-11  w-full px-10 py-5 shadow-md '>
        
        {nav.map((e)=>{
          return  <li className='list-none cursor-pointer border-b-2 border-indigo-500'>{e}</li>
        })}
    </div>
  )
}

export default Navigation