import React from 'react'

const Footer = () => {
  return (
    <div className='h-full bg-[#111D15] text-white font-body justify-center items-center p-10'>
        <div className='flex max-w-[900px] m-auto pt-[40px] pb-10 justify-between max-[900px]:flex-col max-[900px]:gap-5'>
            <div>
                <div>
                    <a href="#">
                        <h1 className='font-black text-[#fff]'><span className='text-[#36B864]'>Miss V's</span> Home</h1>
                        <p className='font-extrabold text-[#fff] -mt-2 '>Management</p>
                    </a>
                </div>
                <p className='text-[12px] max-w-[400px] pt-5'>Miss V's Home Management is your trusted destination for premium housekeeping, pet care, event clean-up, and personalized home support services.</p>
            </div>
            <div className='flex gap-20 text-[13px]'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold mb-4'>Company</h1>
                        <a href="#About" className='hover:underline'>
                            <p>About</p>
                        </a>
                        <a href="#Services" className='hover:underline'>
                            <p>Services</p>
                        </a>
                        <a href="#Contact" className='hover:underline'>
                            <p>Contact</p>
                        </a>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold mb-4'>Legal</h1>
                    <a href="" className='hover:underline'>
                        <p>Privacy Policy</p>
                    </a>
                    <a href="" className='hover:underline'>
                        <p>Terms & conditions</p>
                    </a>
                    <a href="#Pricing" >
                        <p>Pricing</p>
                    </a>
                </div>
            </div>
        </div>
        <div className='max-w-[900px] m-auto'>
            <hr  />
            <p className='text-center text-[13px] pt-5'>2025 "MissV's Home Management" All Rights Reserved </p>
        </div>

    </div>
  )
}

export default Footer