import React from 'react';
import main from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero mt-16 mb-16">
            <div className="hero-content grid gap-16 grid-cols-2">
                <div className='relative'>
                    <img src={main} className="w-3/4 rounded-lg shadow-2xl" alt=''/>
                    <img src={parts} className="absolute right-0 -bottom-1/4 w-2/4 rounded-lg shadow-2xl border-8 border-white" alt="" />
                </div>
                <div>
                <p className='text-main font-bold mb-5 text-xl'>About Us</p>
                <h1 className="text-4xl font-bold">
                We are qualified <br/> & of experience <br/> in this field
                </h1>
                <p className="py-6">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <p className="py-6">
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <button className="px-7 ml-2 rounded-lg py-3 border text-white bg-main hover:bg-orange-500 border-main font-semibold">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;