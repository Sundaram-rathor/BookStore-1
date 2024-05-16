'use client'

import React, { useState } from 'react';
import Head from "next/head";

import { CldUploadButton } from 'next-cloudinary';

function Dashboard() {

  const [imagePublicId, setImagePublicId] = useState("");

  const [alt, setAlt] = useState("");
  const [crop, setCrop] = useState("scale");
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);


  return (
    <div>
      
      <section className="container w-full mx-auto items-center py-32">
        <div className="max-w-2lg mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center flex justify-start gap-10">
          <div className="px-4 py-6">
            <div
              id="image-preview"
              className="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
            >
              <input
                id="upload"
                type="file"
                className="hidden"
                accept="image/*"
                // onChange={handleFileChange} // Add onChange event handler
              />
              <label htmlFor="upload" className="cursor-pointer">
                {/* Display file name dynamically */}
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                  {/* {fileNameLabel ? fileNameLabel : 'Upload picture'} */}
                </h5>
                <p className="font-normal text-sm text-gray-400 md:px-6">
                  Choose photo size should be less than{' '}
                  <b className="text-gray-600">2mb</b>
                </p>
                <p className="font-normal text-sm text-gray-400 md:px-6">
                  and should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.
                </p>
                <span id="filename" className="text-gray-500 bg-gray-200 z-50"></span>
              </label>
            </div>
            {/* Render uploaded image */}
          
            <div className="flex items-center justify-center">
              <div className="w-full">
                <label className="w-full text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer">
                  <span className="text-center ml-2"  ><CldUploadButton uploadPreset="ml_default" /></span>
                </label>
              </div>
            </div>
          </div>
         
               <div>
          {imagePublicId ? (
              <TransformImage
                crop={crop}
                image={imagePublicId}
                width={width}
                height={height}
              />
            ) : (
              <h1> Image will appear here</h1>
            )}
          </div>     
               </div>
               
          
        
      </section>
    </div>
  );
}

export default Dashboard;
