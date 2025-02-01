import React from 'react'
import { Button } from '../ui/button'
Button

const DocumentsShow = () => {
  return (
    <div>
        <div className="text-4xl font-semibold text-center my-10">
        One platform to connect users to vendors for <br/> fast, secure, and reliable government document processing
            <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
            Connecting Gov. services for fast, secure, and easy document processing.
              and more.
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-20">
              <img
                src="https://imgv2-2-f.scribdassets.com/img/document/499890323/original/5d44b2cab4/1?v=1"
                alt=""
                className="object-contain  lg:-mr-32 w-96 "
              />
              <img
                src="https://img.thecdn.in/106814/1641361840591_SKU-0008_1.jpeg?width=600&format=webp"
                alt=""
                className="object-contain lg:-mb-10 lg:-mt-0 -mt-12 w-96"
              />
              <img
                src="https://www.immigration-lawyers.co.nz/wp-content/uploads/police-certificate-australia.webp"
                alt=""
                className="object-contain  lg:-ml-36 lg:-mt-5 -mt-16 w-96 border border-black "
              />
            </div>
          </div>

          <div className="w-fit mx-auto lg:mb-20 mb-8 mt-20">
          <Button size="lg" className="rounded-full bg-amber-600 text-white hover:text-black hover:border hover:border-black transition-all hover:animate-in duration-300">
                    Get Your Document
                  </Button>
          </div>
    </div>
  )
}

export default DocumentsShow