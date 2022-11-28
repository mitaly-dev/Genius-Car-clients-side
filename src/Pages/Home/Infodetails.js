import React from 'react';
import timetable from '../../assets/info-img/001-timetable.png'
import phone from '../../assets/info-img/phone.png'
import location from '../../assets/info-img/location.png'

const Infodetails = () => {
    return (
        <div className='bg-[#151515] text-white my-16 text-center py-24 rounded-lg  px-14 grid grid-cols-3 gap-10'>
            <div className='flex items-center'>
                <img src={timetable} alt="images-icon" />
                <div className='ml-5'>
                    <p className='mb-3 text-[18px]'>We are open monday-friday</p>
                    <h3 className='font-semibold text-2xl'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex items-center'>
                <img src={phone} alt="images-icon" />
                <div className='ml-5'>
                    <p className='mb-3 text-[18px]'>Have a question?</p>
                    <h3 className='font-semibold text-2xl'>+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex items-center'>
                <img src={timetable} alt="images-icon" />
                <div className='ml-5'>
                    <p className='mb-3 text-[18px]'>Need a repair? our address</p>
                    <h3 className='font-semibold text-2xl'>Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Infodetails;