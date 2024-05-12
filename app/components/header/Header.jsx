    import React from 'react'
  
    import Navigation from './Navigation'
    import { IoCartOutline } from "react-icons/io5";
    import Link from 'next/link';


    function Header() {

    return (
        <div className='sticky top-0 bg-white backdrop-opacity-10 '>
        <div className='flex flex-row justify-between py-10 px-10 item-center'>
            <div className='w-24' >
              <Link href='/'> <img src="https://static.vecteezy.com/system/resources/previews/006/547/168/non_2x/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg" alt="img" className='cursor-pointer w-full h-full object-contain rounded-lg'/></Link> 
            </div>
            <div className='border-[#B4B9C2] w-full g'>
            <div class="relative w-full w-100 mx-auto bg-white rounded-full">
                       






            <div class="relative w-full max-w-xl mx-auto bg-white rounded-full">
                <input placeholder="Search here" class="rounded-lg w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200" type="text" name="query" id="query"/>
                <button type="submit" class="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-balck hover:text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-gray-100 sm:px-6 sm:text-base sm:font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                <svg class="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
    Search
                 </button>
           </div>
  
</div>
            </div>
            <div className='flex gap-5 items-center '>
               <Link href='/components/cart'> <div className='cursor-pointer flex item-center justify-center gap-3'><IoCartOutline value={{size:'50px'}}/>
                                                     <h1>Cart</h1> </div></Link>
                <div className=' shadow-md text-black hover:text-white bg-gray-100 hover:bg-gray-700  text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:placeholder-gray-400 text-md  '><button><Link href='/components/login'>Login</Link></button></div>
            </div>
            
            <div class="relative inline-block text-left">
    <div class="group m-2 mt-5">
        <button type="button"
            class="inline-flex justify-center items-center  px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            Action
            {/* <!-- Dropdown arrow --> */}
            <svg class="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
        </button>

        {/* <!-- Dropdown menu --> */}
        <div
            class="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div class="py-1">
                <Link href='/'><div  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Consumer</div></Link>
                <Link href='/components/admin'><div  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Admin</div></Link>
                
            </div>
        </div>
    </div>
</div>

            
        </div>
        <div>
            <Navigation/>
        </div>
        </div>

    )
    }

    export default Header