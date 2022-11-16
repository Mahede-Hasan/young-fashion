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
        navigate(from, {replace: true})
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
                    class="mt-6 mb-0 space-y-4 p-8 pl-20">
                    <p class="text-2xl font-medium">Login to your account</p>

                    {/* email input */}
                    <div className='mx-auto'>
                        <label for="email" class="text-sm font-medium">Email</label>
                        <div class="relative mt-1">
                            <input
                                name='email'
                                type="email"
                                id="email"
                                class="w-[90%] focus:ring-teal-400 border-gray-200 p-2 pl-8 pr-12 text-md shadow-sm"
                                placeholder="Enter email"
                            />
                        </div>
                    </div>

                    {/* password input */}
                    <div>
                        <label for="password" class="text-sm font-medium">Password</label>

                        <div class="relative mt-1">
                            <input
                                name='password'
                                type="password"
                                id="password"
                                class="w-[90%] focus:ring-teal-400 border-gray-200 p-2 pl-8 pr-12 text-md shadow-sm"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>
                    {/* error message */}
                    <p className='text-red-500'>{errorElement}</p>

                    {/* login button */}
                    <button
                        type="submit"
                        class="block w-[90%] bg-teal-400 hover:bg-teal-500 px-5 py-1 text-lg font-medium text-white"
                    >
                        Login
                    </button>

                    <div className="flex justify-between">
                        <p class="text-center text-sm text-gray-500">
                            No account?
                            <Link to='/register' class="underline font-semibold text-teal-400" href="">Register</Link>
                        </p>
                        <p class="text-center text-sm text-gray-500 pr-12">
                            Forget Password  <Link class="underline font-semibold text-teal-400" href="">Reset</Link>
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