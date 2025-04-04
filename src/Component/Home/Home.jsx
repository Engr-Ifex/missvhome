import React from 'react'
import Nav from '../Nav/Nav'
import { FaPhone } from "react-icons/fa6";

const Home = () => {
  return (
    <>
        <div className='flex flex-col h-screen font-body'>
            <Nav />
            <div className="bg-[url('/Images/Heroimage.png')] bg-cover bg-center h-screen max-[900px]:hidden">
                <div className='max-w-[600px] ml-20 flex flex-col justify-center items-start gap-3 h-full -mt-5 '>
                    <h1 className='font-extrabold text-5xl '>
                        Reliable, Professional, and Premium Housekeeping Services
                    </h1>
                    <p >
                    From home management and pet sitting to event clean-ups and decluttering, we provide reliable and professional services to keep your space organized and stress-free.
                    </p>
                    <div className='bg-[#36B864] p-2 px-3 rounded'>
                        <p className='font-second text-white flex justify-between items-center gap-2'>
                            <FaPhone />
                            347-824-1047
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative h-screen min-[900px]:hidden ">
  
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/Images/reshero.jpg')" }}></div>

            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className="relative z-20 max-w-[600px] flex flex-col justify-center items-center gap-3 h-full mx-5 text-white">
                <h1 className="font-extrabold text-5xl text-center text-[40px]">
                Reliable, Professional, and Premium Housekeeping Services
                </h1>
                <p className="max-[900px]:text-center">
                From home management and pet sitting to event clean-ups and decluttering, we provide reliable and professional services to keep your space organized and stress-free.
                </p>
                <div className='bg-[#36B864] p-2 px-3 rounded'>
                        <p className='font-second text-white flex justify-between items-center gap-2'>
                            <FaPhone />
                            347-824-1047
                        </p>
                    </div>
            </div>
        </div>

        </div>
    </>
  )
}

export default Home