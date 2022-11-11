import React from 'react';
import { useContext } from 'react';
import useProducts from '../../hooks/useProducts';
import { ProductDetailContext } from '../Shared/Context';


const CartDetail = ({ cartDetail }) => {
    const { img, name, price, prePrice, _id } = cartDetail;
    const [products] = useProducts()
    const [cartProduct, setCartProduct] = useContext(ProductDetailContext)

    const handleAddToCart = id =>{
        const rest = products.find(product=> product._id === id)
        setCartProduct(rest)
        console.log(rest)
    }

    const handleSubmit = e =>{
        e.preventDefault()
    }
    return (
        <div>
            <section>
                <div class="relative mx-auto max-w-screen-xl px-12 py-8">
                    <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                        <div class="grid grid-cols-2  md:grid-cols-1 mx-auto">
                            <img
                                alt="Les Paul"
                                src={img}
                                class="w-[100%] h-[600px]"
                            />

                        </div>

                        <div class="sticky top-0">
                            <strong
                                class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
                            >
                                Pre Order
                            </strong>

                            <div class="mt-8 flex justify-between">
                                <div class="max-w-[35ch]">
                                    <h1 class="text-2xl font-bold">
                                        {name}
                                    </h1>

                                    <p class="mt-0.5 text-sm">Highest Rated Product</p>

                                    <div class="mt-2 -ml-0.5 flex">
                                        <svg
                                            class="h-5 w-5 text-yellow-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>

                                        <svg
                                            class="h-5 w-5 text-yellow-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>

                                        <svg
                                            class="h-5 w-5 text-yellow-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>

                                        <svg
                                            class="h-5 w-5 text-yellow-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>

                                        <svg
                                            class="h-5 w-5 text-gray-200"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                    </div>
                                </div>


                            </div>

                            <details class="group relative mt-4">
                                <summary class="block">
                                    <div>
                                        <div class="prose max-w-none group-open:hidden">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                                veniam dicta beatae eos ex error culpa delectus rem tenetur,
                                                architecto quam nesciunt, dolor veritatis nisi minus
                                                inventore, rerum at recusandae?
                                            </p>
                                        </div>

                                        <span
                                            class="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0"
                                        >
                                            Read More
                                        </span>
                                    </div>
                                </summary>

                                <div class="prose max-w-none pb-6">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                        veniam dicta beatae eos ex error culpa delectus rem tenetur,
                                        architecto quam nesciunt, dolor veritatis nisi minus inventore,
                                        rerum at recusandae?
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                                        nam sapiente nobis ea veritatis error consequatur nisi
                                        exercitationem iure laudantium culpa, animi temporibus non! Maxime
                                        et quisquam amet. A, deserunt!
                                    </p>
                                </div>
                            </details>
                            <div className='flex mt-4'>
                                <p class="text-lg font-semibold line-through text-gray-400">${prePrice}</p>
                                <p class="text-lg font-bold pr-8 pl-4">${price}</p>
                            </div>
                            <form onSubmit={handleSubmit} class="mt-4">
                                <fieldset>
                                    <legend class="text-lg font-bold">Color</legend>

                                    <div class="mt-2 flex gap-1">
                                        <label for="color_green" class="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_green"
                                                name="color"
                                                class="peer sr-only"
                                                checked
                                            />

                                            <span
                                                class="block h-6 w-6 rounded-full border border-gray-200 bg-green-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label for="color_blue" class="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_blue"
                                                name="color"
                                                class="peer sr-only"
                                            />

                                            <span
                                                class="block h-6 w-6 rounded-full border border-gray-200 bg-blue-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label for="color_pink" class="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_pink"
                                                name="color"
                                                class="peer sr-only"
                                            />

                                            <span
                                                class="block h-6 w-6 rounded-full border border-gray-200 bg-pink-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label for="color_red" class="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_red"
                                                name="color"
                                                class="peer sr-only"
                                            />

                                            <span
                                                class="block h-6 w-6 rounded-full border border-gray-200 bg-red-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label for="color_indigo" class="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_indigo"
                                                name="color"
                                                class="peer sr-only"
                                            />

                                            <span
                                                class="block h-6 w-6 rounded-full border border-gray-200 bg-indigo-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>
                                    </div>
                                </fieldset>

                                <fieldset class="mt-4">
                                    <legend class="mb-1 text-sm font-medium">Size</legend>

                                    <div class="flow-root">
                                        <div class="-m-0.5 flex flex-wrap">
                                            <label for="size_xs" class="cursor-pointer p-0.5">
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_xs"
                                                    class="peer sr-only"
                                                />

                                                <span
                                                    class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                                >
                                                    XS
                                                </span>
                                            </label>

                                            <label for="size_s" class="cursor-pointer p-0.5">
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_s"
                                                    class="peer sr-only"
                                                />

                                                <span
                                                    class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                                >
                                                    S
                                                </span>
                                            </label>

                                            <label for="size_m" class="cursor-pointer p-0.5">
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_m"
                                                    class="peer sr-only"
                                                />

                                                <span
                                                    class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                                >
                                                    M
                                                </span>
                                            </label>

                                            <label for="size_l" class="cursor-pointer p-0.5">
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_l"
                                                    class="peer sr-only"
                                                />

                                                <span
                                                    class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                                >
                                                    L
                                                </span>
                                            </label>

                                            <label for="size_xl" class="cursor-pointer p-0.5">
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_xl"
                                                    class="peer sr-only"
                                                />

                                                <span
                                                    class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                                >
                                                    XL
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>

                                <div class="mt-8">
                                    <button onClick={()=>handleAddToCart(_id)} className='w-[70%] py-1 text-xl hover:bg-teal-500 bg-teal-400 text-white font-semibold'>Add to Cart</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CartDetail;