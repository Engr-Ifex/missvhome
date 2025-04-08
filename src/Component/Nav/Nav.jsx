import React, {useState} from 'react'
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
const Nav = () => {
    const [openMenu, setopenMenu] = useState(false)
    const tooglemenu = () =>{
        setopenMenu(!openMenu)
    }
  return (
    <>
    <nav className='flex justify-between items-center px-20 bg-[#fff] py-3 font-body max-[900px]:hidden'>
        <div>
            <a href="#">
                <h1 className='font-black text-[#111D15]'><span className='text-[#36B864]'>Miss V's</span> Home</h1>
                <p className='font-extrabold text-[#111D15] -mt-2 '>Management</p>
            </a>
        </div>
        <ul className='flex justify-between items-center gap-14'>
            <li className='hover:text-[#36B864]'><a href="#Home">Home</a></li>
            <li className='hover:text-[#36B864]'><a href="#About">About</a></li>
            <li className='hover:text-[#36B864]'><a href="#Services">Services</a></li>
            <li className='hover:text-[#36B864]'><a href="#Pricing">Pricing</a></li>
            <li className='hover:text-[#36B864]'><a href="#Contact">Contact</a></li>
        </ul>
        <div >
            <p className=' flex justify-between items-center gap-1'>
                <GoDotFill className='text-red-500' />
                Satisfaction Guaranteed
            </p>
        </div>
    </nav>
    <nav className='flex justify-between items-center px-7 bg-[#fff] py-3 font-body min-[900px]:hidden z-100'>
        <div>
            <a href="#">
                <h1 className='font-black text-[#111D15]'><span className='text-[#36B864]'>Miss V's</span> Home</h1>
                <p className='font-extrabold text-[#111D15] -mt-2 '>Management</p>
            </a>
        </div>
        <div>
            <FaBars className='text-xl' onClick={tooglemenu} />
        </div>
        <div className={`absolute bg-white h-screen top-0 w-full py-10 -ml-7 px-7 transform ${
            openMenu ? "translate-x-0" : " hidden translate-x-full"
        } transition-transform duration-300 ease-in-out `} >
        <div className='flex justify-between items-center'>
            <a href="#">
                    <h1 className='font-black text-[#111D15]'><span className='text-[#36B864]'>Miss V's</span> Home</h1>
                    <p className='font-extrabold text-[#111D15] -mt-2 '>Management</p>
                </a>
            <div>
                <FaTimes className='text-xl' onClick={tooglemenu} />
            </div>
        </div>
        <ul className='flex flex-col gap-5 mt-10'>
            <li className='hover:text-[#36B864]'><a href="#Home">Home</a></li>
            <li className='hover:text-[#36B864]'><a href="#About">About</a></li>
            <li className='hover:text-[#36B864]'><a href="#Services">Services</a></li>
            <li className='hover:text-[#36B864]'><a href="#Pricing">Pricing</a></li>
            <li className='hover:text-[#36B864]'><a href="#Contact">Contact</a></li>
        </ul>
        <div className='mt-6' >
            <p className=' flex items-center gap-1'>
                <GoDotFill className='text-red-500' />
                Satisfaction Guaranteed
            </p>
        </div>
        </div>
    </nav>
    </>
  )
}

export default Nav