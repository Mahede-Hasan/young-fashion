import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import './Social.css'

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    if (loading) {
        return <Loading></Loading>
    }

    let errorSocial;
    if(error){
        return errorSocial = <p className='text-red-500 pl-12'>{error.message}</p>
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div className='social-container flex w-[85%] mx-auto'>
            <p className='text-red-500'>{errorSocial}</p>
            <button onClick={()=>signInWithGoogle()} className='bg-green-500 w-32 mb-4 mx-auto pl-6 pt-1.5 flex text-white font-semibold text-lg'><svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill='white' d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg><span className='pl-1'>Google</span></button>

            <button className='bg-blue-600 w-32 mb-4 mx-auto pl-3 pt-1.5  flex text-white font-semibold text-lg'><svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='white' d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg><span className='pl-1'>Facebook</span></button>

            <button className='bg-red-500 w-32 mb-4 mx-auto pl-4 pt-1.5  flex text-white font-semibold text-lg'><svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill='white' d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" /></svg><span className='pl-1'>Pinterest</span></button>
        </div>
    );
};

export default Social;