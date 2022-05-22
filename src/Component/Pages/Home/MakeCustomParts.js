import React from 'react';
import img from '../../../assets/makecustomparts/massivenetworkcapacity1-01-1.svg'
import img2 from '../../../assets/makecustomparts/instantquotingengine1-01-1.svg'
import img3 from '../../../assets/makecustomparts/guaranteedquality1-01-1.svg'
import img4 from '../../../assets/manufacturingapplications/icon-industries-logistics-rocket.svg'
import img5 from '../../../assets/manufacturingapplications/icon-industries-transportation-car.svg'
import img6 from '../../../assets/manufacturingapplications/icon-industries-phone-1.svg'
import img7 from '../../../assets/manufacturingapplications/icon-industries-education-graduation-cap.svg'
import img8 from '../../../assets/manufacturingapplications/icon-industries-technology-computerchip.svg'
import img9 from '../../../assets/manufacturingapplications/icon-industries-waste-lightbulb.svg'
import img10 from '../../../assets/manufacturingapplications/icon-industries-waste-factory.svg'
import img11 from '../../../assets/manufacturingapplications/icon-industries-medical-needle.svg'
import img12 from '../../../assets/manufacturingapplications/icon-industries-robotics-factory.svg'

const makeCustoms= [
    {
        id: 1,
        name: 'Massive Network Capacity',
        img: img,
        description: 'Instantly access the production capacity of over 2,000 manufacturers with wide-ranging capabilities and certifications across 25 European countries. From your desktop. Strict NDA with our network to protect privacy.'
    },
    {
        id: 2,
        name: 'Instant Quoting Engine',
        img: img2,
        description: 'Get DFM feedback, lead times, and pricing in a matter of clicks, not days. Xometry IQ℠ puts Data Science to work for you so you can easily choose the optimal price/lead time option for your project. Compatible with STEP, Mesh, Parasolid, and ACIS files.'
    },
    {
        id: 3,
        name: 'Status Updates and Guaranteed Quality',
        img: img3,
        description: 'With strong quality assurance and regular status updates, you can trust that your part will arrive right, and right on time.'
    },
]

const manufacturingapplications = [
    {
        name: 'Aerospace & Defense',
        img: img4
    },
    {
        name: 'Automotive',
        img: img5
    },
    {
        name: 'Consumer Products',
        img: img6
    },
    {
        name: 'Education',
        img: img7
    },
    {
        name: 'Electronics',
        img: img8
    },
    {
        name: 'Energy',
        img: img9
    },
    {
        name: 'Industrial',
        img: img10
    },
    {
        name: 'Medical & Dental',
        img: img11
    },
    {
        name: 'Robotics & Machine-Building',
        img: img12
    },
]


const MakeCustomParts = () => {
    return (
        <div>
            <h2 className='text-3xl mb-12 mt-20 font-medium text-center'>Turbocharge the way you make custom parts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 text-center'>
                {
                    makeCustoms.map((m,i)=> <div className='grayscale hover:grayscale-0 duration-500' key={i}>
                        <div className='flex justify-center'><img className="w-40" src={m.img} alt="" /></div>
                        <h2 className='text-xl font-medium my-4'>{m.name}</h2>
                        <p className=''>{m.description}</p>
                    </div>)
                }
            </div>
            <div className='my-36'>
                <h2 className='text-3xl mb-12 font-medium text-center'>Precision manufacturing applications for every industry</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {
                        manufacturingapplications.map((m,i) => <div className='flex items-center mb-5' key={i}>
                            <img className='w-14 mr-7' src={m.img} alt="" />
                            <h4 className='font-medium'>{m.name}</h4>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MakeCustomParts;