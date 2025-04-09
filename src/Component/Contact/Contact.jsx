import React from 'react'
import contactimg from '/Images/contatnew.jpg'
import { GiCheckMark } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
        <div id='Contact' className=' scroll-smooth flex justify-end items-center h-full bg-[#fff] pt-20 pl-20 gap-5 max-[900px]:flex-col max-[900px]:pl-0 '>
            <div className='flex flex-col gap-5 max-[900px]:justify-center max-[900px]:items-center '>
                <h1 className='text-[#111D15] text-4xl font-bold max-w-[500px] max-[900px]:text-center'>Ready to refresh, organize, or care for your space? <br />Let's Talk!</h1>
                <div className='flex gap-5 max-[900px]:justify-center'>
                    <div className='text-[#36B864] flex items-center gap-1'>
                        <GiCheckMark />
                        <p>Satisfaction Guaranteed</p>
                    </div>
                    <div className='text-[#36B864] flex items-center gap-1'>
                        <GiCheckMark />
                        <p>Reliable Service</p>
                    </div>
                </div>
                <div className='bg-[#36B864] p-2 px-3 rounded w-fit'>
                    <a href="tel:3478241047" className= 'font-second text-[#fff] flex justify-between items-center gap-2'>
                        <FaPhone />
                        347-824-1047
                    </a>
                </div>
            </div>
            <div className='max-[900px]:justify-end' >
                <img src={contactimg} alt='contact' className='w-[650px]' />
                {/* <img src={cntbck} alt='contact' className='w-[450px] min-[900px]:hidden' /> */}
            </div>
        </div>
    </>
  )
}

export default Contact