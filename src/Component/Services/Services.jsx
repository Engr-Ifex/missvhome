import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { MdPets } from "react-icons/md";
import { MdEventSeat } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { MdBookmarkRemove } from "react-icons/md";
import { HiDocumentRemove } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";

const Services = () => {
  return (
    <>
        <div className='flex flex-col h-screen py-14 font-body max-w-[900px] m-auto p-5  '>
            <div className='text-center mb-14 max-[900px]:text-left'>
                <h1 className='font-bold text-4xl text-center mb-3'>Our Services</h1>
                <p className='max-w-[900px] m-auto'>Discover a wide range of personalized housekeeping and lifestyle services designed to make your life easier. From pet sitting to event clean-ups and everything in between, Miss V’s Home Management is here to help you stay organized, stress-free, and in control.</p>
            </div>
            <div className='flex flex-col gap-10 justify-center items-center max-[900px]:items-start'>
            <div className='flex max-[900px]:flex-col max-[900px]:gap-3'>
            <div className='flex flex-col gap-1 max-w-[200px]  '>
                    <div className=' text-white bg-[#36B864] w-fit p-1 rounded'>
                      <MdHomeFilled/>
                    </div>
                    <p className='font-bold'>Home Sitting</p>
                    <p className='text-[12px] '>Secure your home, water plants, bring in mail, keep everything in check.</p>
                  </div>
                  <div className='flex flex-col gap-1 max-w-[200px]  '>
                    <div className=' text-white bg-[#36B864] w-fit p-1 rounded'>
                      <MdPets />
                    </div>
                    <p className='font-bold'>Pet Sitting</p>
                    <p className='text-[12px] '>Feed your pets, walk them, keep them company, give them love while you're away.</p>
                  </div>

                  <div className='flex flex-col gap-1 max-w-[200px]  '>
                    <div className=' text-white bg-[#36B864] w-fit p-1 rounded'>
                      <MdEventSeat />
                    </div>
                    <p className='font-bold'>Event Tidy up</p>
                    <p className='text-[12px] '>Clean up after guests, pack leftovers, restore order, leave your space spotless.</p>
                  </div>

                  <div className='flex flex-col gap-1 max-w-[200px]  '>
                    <div className=' text-white bg-[#36B864] w-fit p-1 rounded'>
                      <MdCleaningServices />
                    </div>
                    <p className='font-bold'>General Home Cleaning</p>
                    <p className='text-[12px] '>Dust surfaces, mop floors, clean bathrooms, refresh every room.</p>
                  </div>
                </div>


                <div className='flex max-[900px]:flex-col max-[900px]:gap-3 -mt-5'>
                  <div className='flex flex-col gap-1 max-w-[200px]  '>
                    <div className=' text-white bg-[#36B864] w-fit p-1 rounded'>
                      <PiBowlFoodFill />
                    </div>
                    <p className='font-bold'>Meal Preparation</p>
                    <p className='text-[12px] '>Plan meals, prep ingredients, cook with care, serve freshness daily.</p>
                  </div>

                  <div className='flex flex-col gap-1 max-w-[200px]  '>
                    <div className=' text-white bg-[#36B864] w-fit p-1 rounded'>
                      <MdBookmarkRemove />
                    </div>
                    <p className='font-bold'>De-hoarding</p>
                    <p className='text-[12px] '>Clean up and restore order, eliminate hoarded items, refresh your environment</p>
                  </div>

                  <div className='flex flex-col gap-1 max-w-[200px]  '>
                    <div className=' text-white bg-[#36B864] w-fit p-1 rounded'>
                    <HiDocumentRemove />
                    </div>
                    <p className='font-bold'>De-cluttering</p>
                    <p className='text-[12px] '>Organize and declutter, eliminate excess, optimize storage</p>
                  </div>

                  <div className='flex flex-col justify-center items-center text-center p-2 rounded gap-1 max-w-[200px] mb-5  bg-[#36B864] text-white '>
                    <p className='font-bold'>More service?</p>
                    <p className='text-[12px]'>You can tell us what you need and we can help!</p>
                    <div className='bg-white p-2 px-3 rounded'>
                        <p className='font-second text-[#36B864] flex justify-between items-center gap-2'>
                            <FaPhone />
                            347-824-1047
                        </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services