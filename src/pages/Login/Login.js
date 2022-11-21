import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import './Login.css';
import Social from './Social';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathName || '/'

    // error message
    let errorElement;
    if (error) {
        errorElement = <p>{error?.message}</p>
    }

    //  loading 
    if (loading) {
        return <Loading></Loading>;
    }

    // get user
    if (user) {
        navigate(from, { replace: true })
    }

    // handle login
    const handleSubmitLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
    }

    return (
        <section className='login-form-container'>
            <div className="login-container lg:w-[600px] sm:w-[80%] mx-auto my-12 pb-10">

                {/* login-form */}
                <form
                    onSubmit={handleSubmitLogin}
                    className="mt-6 mb-0 space-y-4 p-8 pl-20">
                    <p className="text-2xl font-medium">Login to your account</p>

                    {/* email input */}
                    <div className='mx-auto'>
                        <label for="email" className="text-sm font-medium">Email</label>
                        <div className="relative mt-1">
                            <input
                                name='email'
                                type="email"
                                id="email"
                                className="w-[90%] focus:ring-teal-400 border-gray-200 p-2 pl-8 pr-12 text-md shadow-sm"
                                placeholder="Enter email"
                            />
                        </div>
                    </div>

                    {/* password input */}
                    <div>
                        <label for="password" className="text-sm font-medium">Password</label>

                        <div className="relative mt-1">
                            <input
                                name='password'
                                type="password"
                                id="password"
                                className="w-[90%] focus:ring-teal-400 border-gray-200 p-2 pl-8 pr-12 text-md shadow-sm"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>
                    {/* error message */}
                    <p className='text-red-500'>{errorElement}</p>

                    {/* login button */}
                    <button
                        type="submit"
                        className="block w-[90%] bg-teal-400 hover:bg-teal-500 transition-all duration-400 px-5 py-1 text-lg font-medium text-white"
                    >
                        Login
                    </button>

                    <div className="flex justify-between">
                        <p className="text-center text-sm text-gray-500">
                            No account?
                            <Link to='/register' className="underline font-semibold pl-1 text-teal-400" href="">Create Account</Link>
                        </p>
                        <p className="text-center text-sm text-gray-500 pr-12">
                            Forget Password  <Link className="underline font-semibold text-teal-400" href="">Reset</Link>
                        </p>
                    </div>

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

export default Login;