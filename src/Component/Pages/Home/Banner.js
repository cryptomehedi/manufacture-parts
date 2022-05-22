import React from 'react';
import bannerImg from '../../../assets/Manufactur-On-Demand.webp'
import img from '../../../assets/feature/cnc-machining-icon.svg'
import img1 from '../../../assets/feature/3d-printing-sls-icon.svg'
import img2 from '../../../assets/feature/sheet-metal-bending-icon.svg'
import img3 from '../../../assets/feature/injection-moulding-icon.svg'
import img4 from '../../../assets/feature/61d70e3c11d456d4c6c1d952_die-casting-icon.svg'

const features = [
    {
        name: 'CNC Machining',
        img: img
    },
    {
        name: '3D Printing',
        img: img1
    },
    {
        name: 'Sheet Metal',
        img: img2
    },
    {
        name: 'Injection Moulding',
        img: img3
    },
    {
        name: 'Die casting',
        img: img4
    }
]


const Banner = () => {
    return (
        <div>
            <div>
                <div className="hero lg:min-h-screen bg-cover rounded-lg bg-bannerImg">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={bannerImg} alt="" className="md:max-w-md lg:max-w-screen-sm rounded-lg shadow-2xl" />
                        <div>
                        <span className="animate-ping absolute inline-flex w-72 lg:w-96 h-72 lg:h-96 rounded-full bg-secondary opacity-50"></span>
                            <h1 className="animate-bounce lg:text-5xl text-2xl font-semibold">Manufacturing on Demand</h1>
                            <p className="animate-fade rounded-full p-4">With over 2,000 manufacturers in Europe, our network has the capacity you need for prototyping and production.</p>
                            <div className="flex">
                                <h2 className="flex items-center font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-20 lg:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <p>Parts in as Fast as 3 Days</p>
                                </h2>
                                <div className='flex items-center ml-5 lg:ml-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 lg:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                    <div className="ml-2">
                                        <h2 className=" font-medium">Strong QA</h2>
                                        <h2 className=" font-medium">ISO 9001 Certified</h2>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold">Get Your Instant Quote</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-5 lg:mx-4 gap-6'>
                    {
                        features.map((feature, i)=> <div className='hover:scale-110 duration-500  flex justify-evenly items-center md:block  rounded font-medium p-4 lg:text-center bg-indigo-200' key={i} >
                            <p className=''>{feature.name}</p>
                            <div className='flex justify-center lg:mt-2'><img className= 'w-10 h-10 lg:h-20 lg:w-20' src={feature.img} alt="" /></div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;