import React from 'react';
import './Navbar.css';
import apple from '../assets/Apple Logo.svg';
import amazon from '../assets/Amazon Logo.svg'
import goog from '../assets/Google Logo.svg'
import big from '../assets/background large.png'

const Navbar = () => {
  return (
    <div className=' flex flex-col justify-center items-center text-center'>
      <div className="space-y-6 flex flex-col justify-center items-center">
        <h1 className='text-7xl font-bold'>Our partner companies</h1>
        <p className='text-xl max-w-[50%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
        <div className="grid grid-cols-3 px-[8%] gap-6">
          <div className='col-span-1'>
            <div className='p-10 border rounded-xl shadow-lg space-y-5'>
              <div className='flex items-center gap-10'>
                <div className='img flex justify-center'>
                  <img src={apple} alt='Apple Logo' className='p-3 h-20 rounded-xl shadow-custom' />
                </div>
                <h3 className='text-2xl font-semibold'>Apple Inc.</h3>
              </div>
              <p className='text-lg'>Lorem ipsum dolor sit elton amet, consectetur lorem it adipiscing elit.</p>
              <button className='text-white bg-black w-full rounded-xl hover:bg-gray-900 px-5 py-3 hover:-translate-y-1 transition-all duration-200 '>Read more</button>

            </div>
          </div>
          <div className="col-span-1">
            <div className='p-10 border rounded-xl shadow-lg space-y-5'>
              <div className='flex items-center gap-10'>
                <div className='img flex justify-center'>
                  <img src={amazon} alt='Apple Logo' className='p-3 h-20 rounded-xl shadow-custom' />
                </div>
                <h3 className='text-2xl font-semibold'>Amazon</h3>
              </div>
              <p className='text-lg'>Lorem ipsum dolor sit elton amet, consectetur lorem it adipiscing elit.</p>
              <button className='text-white bg-black w-full rounded-xl hover:bg-gray-900 px-5 py-3 hover:-translate-y-1 transition-all duration-200 '>Read more</button>
            </div>
          </div>
          <div className="col-span-1">
            <div className='p-10 border rounded-xl shadow-lg space-y-5'>
              <div className='flex items-center gap-10'>
                <div className='img flex justify-center'>
                  <img src={goog} alt='Apple Logo' className='p-3 h-20 rounded-xl shadow-custom' />
                </div>
                <h3 className='text-2xl font-semibold'>Apple Inc.</h3>
              </div>
              <p className='text-lg '>Lorem ipsum dolor sit elton amet, consectetur lorem it adipiscing elit.</p>
              <button className='rounded-xl text-white bg-black w-full  hover:bg-gray-900 px-5 py-3 hover:-translate-y-1 transition-all duration 200'>Read more</button>
            </div>
          </div>
        </div>
      </div>
      <div className = 'media' style={{
        backgroundImage: `url(${big})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        
      }}>
        <div className='p-20 space-y-5'>
          <h1 className='text-start text-6xl font-bold'>
            Be the first to know about<br /> our new job offers
          </h1><br />
          <p className='text-start text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
            Suspendisse varius enim in eros elementum tristique.
          </p>
          <div className=" relative bg-green-100 max-w-[50%]  rounded-md  shadow-md "> 
            <input
              type="text"
              placeholder="Enter your email"
              className="px-5 py-7 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full"
            />
            <div className='absolute top-5 right-2'>

              <button
                className="bg-green-400 px-5 py-2 rounded-xl"
              >
                Subscribe
              </button>
              
            </div>
          </div>
          <p className='text-start'>Join 9,500+ users already on the newsletter.</p>

        </div>
        
      </div>



    </div >
  );
}

export default Navbar;
