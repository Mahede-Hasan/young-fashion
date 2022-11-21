import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Social from './Social';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useRef } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../Shared/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false)

    let errorElement;
    if (error || updateError) {
        errorElement = <p>{error?.message || updateError?.message}</p>
    }

    if (loading || updating) {
        return <Loading></Loading>;
    }

    if (user) {
        navigate('/home')
    }

    const handleSubmitRegister = e => {
        e.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            setPasswordError("your password doesn't match")
            return;
        }
        if (password.length < 6) {
            setPasswordError("password must be 6 character or longer")
            return;
        }
        else {
            createUserWithEmailAndPassword(email, password)
            updateProfile({ displayName: name })
            toast('Successfully Register')
        }

    }
    return (
        <section className='register-form-container'>
            <div className="register-container lg:w-[600px] sm:w-[80%] mx-auto my-12 pb-10">

                <form onSubmit={handleSubmitRegister} className="mt-6 mb-0 space-y-4 p-8 pl-20">
                    <p className="text-2xl font-medium">Register</p>

                    <div className='mx-auto'>
                        <label for="name" className="text-sm font-medium">Name</label>

                        <div className="relative mt-1">
                            <input
                                ref={nameRef}
                                name='name'
                                type="text"
                                id="name"
                                className="w-[90%] focus:ring-teal-400 border-gray-200 p-2 pl-8 pr-12 text-md shadow-sm"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                    </div>

                    <div className='mx-auto'>
                        <label for="email" className="text-sm font-medium">Email</label>

                        <div className="relative mt-1">
                            <input
                                ref={emailRef}
                                name='email'
                                type="email"
                                id="email"
                                className="w-[90%] focus:ring-teal-400 border-gray-200 p-2 pl-8 pr-12 text-md shadow-sm"
                                placeholder="Enter email"
                                autoComplete='off'
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label for="password" className="text-sm font-medium">Password</label>

                        <div className="relative mt-1">
                            <input
                                ref={passwordRef}
                                name='password'
                                type="password"
                                id="password"
                                className="w-[90%] focus:ring-teal-400 border-gray-200 p-2 pl-8 pr-12 text-md shadow-sm"
                                placeholder="Password"
                                autoComplete='off'
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label for="password" className="text-sm font-medium">Confirm Password</label>

                        <div className="relative mt-1">
                            <input
                                ref={confirmPasswordRef}
                                name='confirmPassword'
                                type="password"
                                id="password"
                                className="w-[90%] focus:ring-teal-400 border-gray-200 p-2 pl-8 pr-12 text-md shadow-sm"
                                placeholder="Confirm password"
                                required
                            />
                        </div>
                    </div>

                    {/* checkbox */}
                    <div className="flex items-center">
                        <input
                            onClick={() => setAgree(!agree)}
                            id="link-checkbox"
                            type="checkbox"
                            className="w-4 h-4 text-teal-400 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-400 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="link-checkbox" className={`ml-2 text-sm font-medium ${agree ? 'text-gray-600' : 'text-red-600'}`}>I agree with the terms and conditions.</label>
                    </div>

                    {/* password error */}
                    <p className='text-red-500'>{passwordError}</p>

                    {/* register button */}
                    <button
                        disabled={!agree}
                        type="submit"
                        className="block w-[90%] bg-teal-400 hover:bg-teal-500 transition-all duration-400 px-5 py-1 text-lg font-medium text-white"
                    >
                        Register
                    </button>

                    {/* error message */}
                    <p className='text-red-500'>{errorElement}</p>

                    <p className="text-start text-sm text-gray-500">
                        Already have an account?
                        <Link to='/login' className="underline" href="">Login</Link>
                    </p>

                </form>

                {/* divider */}
                <div className="divider-container w-64 mb-4 flex items-center mx-auto">
                    <div className="divider h-[1px] bg-gray-400 w-40"></div>
                    <p className='px-2 text-gray-500'>Or</p>
                    <div className="divider h-[1px] bg-gray-400 w-40"></div>

                </div>

                {/* social login */}
                <Social></Social>

            </div>
        </section>
    );
};

export default Register;