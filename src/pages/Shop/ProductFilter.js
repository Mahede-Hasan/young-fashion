import React from 'react';

const ProductFilter = () => {
    return (
        <div>
            <div className="shop-filter-container hidden mx-2">
                <div className="lg:sticky lg:top-4">
                    <details open className="overflow-hidden rounded ">
                        <summary
                            className="flex items-center justify-between px-5 py-3 lg:hidden"
                        >
                            <span className="text-sm font-medium"> Toggle Filters </span>

                            <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </summary>

                        <form className="border-t border-gray-200 lg:border-t-0">
                            {/* filter by categories */}
                            <fieldset>
                                <legend
                                    className="block w-full bg-gray-50 px-5 py-3 text-md font-medium"
                                >
                                    All Catagories
                                </legend>

                                <div className="space-y-2 px-5 py-6">
                                    <div className="flex items-center">
                                        <input
                                            id="toy"
                                            type="checkbox"
                                            name="type[toy]"
                                            className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label htmlFor="toy" className="ml-3 text-sm font-medium cursor-pointer">
                                            Men
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="women"
                                            type="checkbox"
                                            name="type[women]"
                                            className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label htmlFor="women" className="ml-3 text-sm font-medium cursor-pointer">
                                            Women
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="jacket"
                                            type="checkbox"
                                            name="type[jacket]"
                                            className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label htmlFor="jacket" className="ml-3 text-sm font-medium cursor-pointer">
                                            Jacket
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="hoodie"
                                            type="checkbox"
                                            name="type[hoodie]"
                                            className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label htmlFor="hoodie" className="ml-3 text-sm font-medium cursor-pointer">
                                            Hoodie
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="sweater"
                                            type="checkbox"
                                            name="type[sweater]"
                                            className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label htmlFor="sweater" className="ml-3 text-sm font-medium cursor-pointer">
                                            Sweater
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="pants"
                                            type="checkbox"
                                            name="type[pants]"
                                            className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label htmlFor="pants" className="ml-3 text-sm font-medium cursor-pointer">
                                            Pants
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="t-shirt"
                                            type="checkbox"
                                            name="type[t-shirt]"
                                            className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label htmlFor="t-shirt" className="ml-3 text-sm font-medium cursor-pointer">
                                            T-shirt
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="shoes"
                                            type="checkbox"
                                            name="type[shoes]"
                                            className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label htmlFor="shoes" className="ml-3 text-sm font-medium cursor-pointer">
                                            Shoes
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="bag"
                                            type="checkbox"
                                            name="type[bag]"
                                            className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label htmlFor="bag" className="ml-3 text-sm font-medium cursor-pointer">
                                            Bag
                                        </label>
                                    </div>

                                    <div className="pt-2">
                                        <button type="button" className="text-xs text-gray-500 underline">
                                            Reset Type
                                        </button>
                                    </div>
                                </div>
                            </fieldset>

                            {/* filter by price */}
                            <div>
                                <fieldset>
                                    <legend
                                        className="block w-full bg-gray-50 px-5 py-3 text-md font-medium"
                                    >
                                        Price
                                    </legend>

                                    <div className="space-y-2 px-5 py-6">
                                        <div className="flex items-center">
                                            <input
                                                id="3+"
                                                type="checkbox"
                                                name="age[3+]"
                                                className="h-4 w-4 rounded border-gray-300"
                                            />

                                            <label htmlFor="3+" className="ml-3 text-sm font-medium">
                                                $ 0 - $ 50
                                            </label>
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                id="8+"
                                                type="checkbox"
                                                name="age[8+]"
                                                className="h-4 w-4 rounded border-gray-300"
                                            />

                                            <label htmlFor="8+" className="ml-3 text-sm font-medium">
                                                $ 50 - $ 100
                                            </label>
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                id="12+"
                                                type="checkbox"
                                                name="age[12+]"
                                                className="h-4 w-4 rounded border-gray-300"
                                            />

                                            <label htmlFor="12+" className="ml-3 text-sm font-medium">
                                                $ 100 - $ 200
                                            </label>
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                id="16+"
                                                type="checkbox"
                                                name="age[16+]"
                                                className="h-4 w-4 rounded border-gray-300"
                                            />

                                            <label htmlFor="16+" className="ml-3 text-sm font-medium">
                                                $ 200 - $ 400
                                            </label>
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                type="button"
                                                className="text-xs text-gray-500 underline"
                                            >
                                                Reset Price
                                            </button>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div
                                className="flex justify-between border-t border-gray-200 px-5 py-3"
                            >

                                <button
                                    name="commit"
                                    type="button"
                                    className=" bg-teal-400 hover:bg-teal-500 w-[220px] py-2 text-md font-medium text-white"
                                >
                                    Apply Filters
                                </button>
                            </div>
                        </form>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;