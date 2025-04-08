import React from 'react'
import pricingbck from '/Images/pricingbck.png'
import { GoDotFill } from "react-icons/go";

const Pricing = () => {
  return (
    <>
        <div id='Pricing' className='font-body h-full mt-20'>
            <img src={pricingbck} alt="" className='absolute max-[900px]:hidden' />
            <div className='max-[900px]:bg-[url("/Images/pricingbck.png")] bg-cover bg-center'>
                <div className='relative flex flex-col text-white justify-center items-center pt-30'>
                    <p>our pricing</p>
                    <p className='font-bold text-4xl max-w-[500px] text-center'>Choose From Our Lowest Plans and Prices</p>
                </div>
                <div className='relative flex justify-center items-center mt-30 gap-10 max-[900px]:flex-col'>
                    <div className='bg-white w-[350px] p-8 py-10 rounded-2xl shadow-xl mb-20 flex flex-col justify-center items-center gap-5'>
                        <p className='font-semibold' >BASIC PACKAGE</p>
                        <div className='bg-[#36B864] text-white p-4 px-10 rounded'><p className='font-second font-bold text-xl'>$59.00 / <span className='text-[10px] font-medium'>Monthly</span></p></div>
                        <div className='flex flex-col gap-5 text-[12px]'>
                            <div  className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div  className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-[350px] p-8 py-10 rounded-2xl shadow-xl mb-20 flex flex-col justify-center items-center gap-5'>
                        <p className='font-semibold' >ENTERPRISE PACKAGE</p>
                        <div className='bg-[#36B864] text-white p-4 px-10 rounded'><p className='font-second font-bold text-xl'>$69.00 / <span className='text-[10px] font-medium'>Monthly</span></p></div>
                        <div className='flex flex-col gap-5 text-[12px]'>
                            <div  className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div  className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-[350px] p-8 py-10 rounded-2xl shadow-xl mb-20 flex flex-col justify-center items-center gap-5'>
                        <p className='font-semibold' >PREMIUM PACKAGE</p>
                        <div className='bg-[#36B864] text-white p-4 px-10 rounded'><p className='font-second font-bold text-xl'>$99.00 / <span className='text-[10px] font-medium'>Monthly</span></p></div>
                        <div className='flex flex-col gap-5 text-[12px]'>
                            <div  className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div  className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GoDotFill className='text-[12px]' />
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Pricing