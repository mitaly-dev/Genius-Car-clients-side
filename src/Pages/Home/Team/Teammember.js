import React from 'react';
import facebook from '../../../assets/images/social-icon/facebook.png'
import twitter from '../../../assets/images/social-icon/twitter.png'
import linkdin from '../../../assets/images/social-icon/linkdin.png'
import instagram from '../../../assets/images/social-icon/instagram.png'

const Teammember = ({team}) => {
const {title,picture,id,expart} = team
    return (
        <div className="card w-full bg-base-100 shadow-lg border">
        <figure className=' rounded-xl p-5'><img src={picture} alt="service" className='rounded-lg'/></figure>
        <div className="card-body py-0 pb-7 text-center">
            <h2 className="text-2xl font-bold text-[#444444]">{title}</h2>
            <p className='text-xl text-[#737373] font-semibold'>${expart}.00</p>
            <div className='flex items-center space-x-2 justify-center mt-3'>
               <button> <img src={facebook} alt="facebook" className='w-[30px]' /></button>
               <button> <img src={twitter} alt="twitter" className='w-[30px]' /></button>
               <button> <img src={linkdin} alt="linkdin" className='w-[30px]' /></button>
               <button><img src={instagram} alt="instagram" className='w-[30px]' /></button>
            </div>
        </div>
    </div>
    );
};

export default Teammember;