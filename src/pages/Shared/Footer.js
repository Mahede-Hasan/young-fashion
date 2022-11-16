import React from 'react';


const Footer = () => {
    const cards = {
        amx: 'https://res.cloudinary.com/dxyvqsdqv/image/upload/v1667670828/payment-icon/american-express_ljxho3.png',
        master: 'https://res.cloudinary.com/dxyvqsdqv/image/upload/v1667671265/payment-icon/png-clipart-mastercard-logo-credit-card-visa-brand-mastercard-text-label-thumbnail-removebg-preview_awktyq.png',
        paypal: 'https://res.cloudinary.com/dxyvqsdqv/image/upload/v1667670828/payment-icon/money_cbeo1f.png',
        visa: 'https://res.cloudinary.com/dxyvqsdqv/image/upload/v1667670828/payment-icon/visa_uoytzj.png'
    }
    const newYear = new Date()
    const year = newYear.getFullYear()
    return (
        <div>
            <footer className="text-gray-600 bg-gray-200  body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <div className="container lg:px-12 px-6 py-8 block lg:flex justify-between mx-auto items-center">
                        <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative sm:w-64 w-40">
                                <input placeholder='Enter your email address' type="text" id="footer-field" name="footer-field" className="w-full bg-white bg-opacity-50 border-none focus:ring-0  text-base outline-none text-gray-700 py-[4px] px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600  uppercase">subscribe</button>
                        </div>
                        <div className="footer-payment-card flex items-center justify-center pt-4">
                            <h5 className='font-semibold'>We accept</h5>
                            <img className='ml-6' style={{ width: '35px' }} src={cards.amx} alt="" />
                            <img className='ml-6' style={{ width: '35px' }} src={cards.master} alt="" />
                            <img className='ml-6' style={{ width: '35px' }} src={cards.paypal} alt="" />
                            <img className='ml-6' style={{ width: '35px' }} src={cards.visa} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-400">
                    <div className="container py-2">
                        <p className="text-white text-center">
                            <small className='text-center'>Young Fashion ©All right reserved {year}</small>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;