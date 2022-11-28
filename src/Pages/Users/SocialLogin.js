import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import google from '../../assets/images/social-icon/google.png'
import github from '../../assets/images/social-icon/github.png'
import twitter from '../../assets/images/social-icon/twitter.png'
import { accessToken } from '../../api/JwtToken';

const SocialLogin = ({navigation}) => {
   
    const {
        signInWithGoogle,
        singInWithGithub
    } = useContext(AuthContext)

    // sign in with social provider
const signInWithGoogleHandle=()=>{
    signInWithGoogle()
    .then((result)=>{
        const user = result.user
        accessToken(user.email,navigation)
    })
    .catch(error=>console.log(error.message))
}


const signInWithGithubHandle=()=>{
    singInWithGithub()
    .then((result)=>{
        const user = result.user
        accessToken(user.email,navigation)
    })
    .catch(error=>console.log(error.message))
}
    return (
        <div>
            <div className="text-center">
                    <p className="px-3 text-sm text-gray-500 font-semibold">Or Sign in with</p>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={signInWithGoogleHandle} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <img src={google} alt="" className='w-[20px]'/>
                    </button>
                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                        <img src={twitter} alt="" className='w-[20px]'/>
                    </button>
                    <button onClick={signInWithGithubHandle} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <img src={github} alt="" className='w-[20px]'/>
                    </button>
                </div>
        </div>
    );
};

export default SocialLogin;