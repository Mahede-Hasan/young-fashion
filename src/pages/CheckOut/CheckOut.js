import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckOutContext } from '../Shared/CheckOutUserInfo';
import { ProductDetailContext } from '../Shared/Context';
import './CheckOut.css'

const CheckOut = () => {
    const { cartProduct, address, setAddress, email, setEmail, userPhone, setUserPhone, name, setName } = useContext(ProductDetailContext)
    const navigate = useNavigate()
    const emailRef = useRef('')
    const nameRef = useRef('')
    const phoneRef = useRef('')
    const countryRef = useRef('')

    const handleCheckOutForm = e => {
        e.preventDefault()

    }

    const handlePlaceOrder = () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = countryRef.current.value;
        setEmail(email)
        setUserPhone(phone)
        setName(name)
        setAddress(address)
        navigate('/orderplace')
    }

    let total = 0;
    for (const cart of cartProduct) {
        total = cart.price + total;
    }

    let shipping = Math.floor(total / 8);
    if (total >= 130) {
        shipping = 0;
    }

    const tax = parseInt(Math.floor(total / 10).toFixed(2))
    const grandTotal = total + tax + shipping;

    return (
        <div className=' pt-8 mb-12 px-10'>

            {/* checkout form */}
            <div className=''>
                <h1 className='text-3xl font-semibold pb-6'>CheckOut</h1>
                <form onSubmit={handleCheckOutForm} className='checkout-container'>
                    <div className='mr-6'>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="email" ref={emailRef} name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-teal-400 peer" autoComplete='off' placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className=" ">
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" ref={nameRef} name="firstName" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" name="lastName" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer" placeholder=" " required />
                                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            </div>
                        </div>
                        <div className="">
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" ref={phoneRef} name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-teal-400 peer" placeholder=" " required />
                                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" name="company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer" placeholder=" " required />
                                <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">

                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-400 dark:text-gray-400">Country</label>
                                <select id="countries" ref={countryRef} name='country' className=" border-0 border-b-2 border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected="">Choose a country</option>
                                    <option value="US" selected>United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>

                            </div>
                            <div className="relative z-0 mb-6 w-full group">

                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-400 dark:text-gray-400">Sate</label>
                                <select id="countries" name='state' className=" border-0 border-b-2 border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected="">Choose a State</option>
                                    <option value="NYC" selected>New York</option>
                                    <option value="CA">California</option>
                                    <option value="FR">Texas</option>
                                    <option value="DE">Las Vegas</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <div>
                        {/* order review checkout page  */}
                        <div className='sticky top-40 border-2 border-gray-200  px-5 pb-6 ml-2'>
                            <h1 className=' text-xl font-semibold pt-6 pb-2'>Your Order</h1>
                            <hr />
                            {
                                cartProduct.map(cart => <div className='flex justify-between items-center lg:text-base md:text-sm text-gray-500 border-1 border-gray-200 pt-2'>
                                    <div className='flex items-center'>
                                        <img src={cart.img} className='w-8' alt="" />
                                        <p className=' pl-8'>{cart.name}</p>
                                    </div>
                                    <p>${cart.price}</p>
                                </div>)
                            }
                            <div className="cart-cal py-4">

                                <p className='pb-4 font-semibold'>Item : <span className='float-right'>{cartProduct.length}</span></p>
                                <h2 className='pb-4 font-semibold'>Sub Total : <span className='float-right'>${total}</span></h2>
                                <h3 className='pb-4 font-semibold'>Shipping : <span className='float-right'>${shipping}</span></h3>
                                <h2 className='pb-4 font-semibold'>Tax : <span className='float-right'>${tax}</span></h2>
                                <hr />
                                <h1 className='pb-4 font-semibold text-2xl'>Total : <span className='float-right'>${grandTotal}</span></h1>
                            </div>
                            <button onClick={handlePlaceOrder} className='w-[80%] mx-auto block py-1 lg:text-lg md:text-md text-white font-semibold  hover:bg-teal-500 transition-all duration-300 bg-teal-400'>Place Order</button>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default CheckOut;