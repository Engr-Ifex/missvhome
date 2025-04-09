import React from 'react'
import workimg from '/Images/newworks.jpg'

const Works = () => {
  return (
    <>
        <div className='box-border flex justify-center items-center h-screen gap-20 font-body max-[900px]:flex-col max-[900px]:my-5 max-[900px]:h-full '>
            <div>
                <img src={workimg} alt="a woman with cleaning tools" className='w-[400px] max-[900px]:w-[350px]' />
            </div>
            <div>
                <div className='font-extrabold text-2xl max-w-[300px] pb-6'>How MissV's Home Management works </div>
                <div className='flex font-second justify-center items-center gap-5 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-1'>
                    <div className='flex justify-center items-center gap-5'>
                        <p className='text-[50px] text-[#9EA3B5] font-semibold'>1.</p>
                        <p className='font-bold max-w-[120px]'>Call us anytime 24/7</p>
                    </div>
                    <p className='text-[12px] max-w-[300px]'>You can contact us directly, we will quickly put you in touch with our professionals who are ready anytime</p>
                </div>
                <div className='flex font-second justify-center items-center gap-5 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-1'>
                    <div className='flex justify-center items-center gap-5'>
                        <p className='text-[50px] text-[#9EA3B5] font-semibold'>2.</p>
                        <p className='font-bold max-w-[120px]'>Schedule Service</p>
                    </div>
                    <p className='text-[12px] max-w-[300px]'>Once we've spoken, we'll answer any questions and help you schedule a service that fits your time and lifestyle.</p>
                </div>
                <div className='flex font-second justify-center items-center gap-5 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-1'>
                    <div className='flex justify-center items-center gap-5'>
                        <p className='text-[50px] text-[#9EA3B5] font-semibold'>3.</p>
                        <p className='font-bold max-w-[120px]'>Your request is completed</p>
                    </div>
                    <p className='text-[12px] max-w-[300px]'>Our expert arrives and gets to work—whether it's cleaning, pet care, or organizing—leaving your space refreshed and stress-free.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Works