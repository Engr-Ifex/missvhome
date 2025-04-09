import React from 'react'
import secimg from '/Images/aboutnew.jpg'
import { AiFillCheckCircle } from "react-icons/ai";

const About = () => {
  return (
    <>
        <div id='About' className='box-border flex justify-center items-center h-screen gap-20 font-body max-[900px]:flex-col-reverse max-[900px]:my-50 max-[900px]:mx-5 mx-10'>
            <div className='max-w-[600px] flex flex-col gap-3 '>
                <h1 className='font-bold text-4xl max-[900px]:text-center'>Dedicated to Care, Cleanliness & Comfort</h1>
                <p>At Miss V's Home Management, we take pride in delivering top-quality housekeeping, pet sitting, and event clean-up services. Our mission is to create organized, comfortable, and stress-free environments for our clients. With a passion for excellence and attention to detail, we ensure every space we manage feels welcoming and well-maintained.</p>
                <div className='flex gap-20 max-[900px]:flex-col max-[900px]:gap-5'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-2 bg-[#F5F4F4] p-2 w-[230px] rounded'>
                            <AiFillCheckCircle className='text-[#36B864]' />
                            <p>Vetted Professionals</p>
                        </div>
                        <div className='flex items-center gap-2 bg-[#F5F4F4] p-2 w-[230px] rounded'>
                            <AiFillCheckCircle className='text-[#36B864]' />
                            <p>Satisfactory Guaranteed</p>
                        </div>
                        <div className='flex items-center gap-2 bg-[#F5F4F4] p-2 w-[230px] rounded'>
                            <AiFillCheckCircle className='text-[#36B864]' />
                            <p>24H Availability</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-2 bg-[#F5F4F4] p-2 w-[230px] rounded'>
                            <AiFillCheckCircle className='text-[#36B864]' />
                            <p>Affordable Price</p>
                        </div>
                        <div className='flex items-center gap-2 bg-[#F5F4F4] p-2 w-[230px] rounded'>
                            <AiFillCheckCircle className='text-[#36B864]' />
                            <p>Best Quality</p>
                        </div>
                        <div className='flex items-center gap-2 bg-[#F5F4F4] p-2 w-[230px] rounded'>
                            <AiFillCheckCircle className='text-[#36B864]' />
                            <p>Reliable Service</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={secimg} alt="" className='w-[400px] max-[900px]:w-[350px]' />
            </div>
            
        </div>
    </>
  )
}

export default About