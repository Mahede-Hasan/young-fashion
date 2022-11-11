import React from 'react';

const ProductFilter = () => {
    return (
        <div>
            <div className="shop-filter-container hidden mx-2">
                <div class="lg:sticky lg:top-4">
                    <details open class="overflow-hidden rounded ">
                        <summary
                            class="flex items-center justify-between px-5 py-3 lg:hidden"
                        >
                            <span class="text-sm font-medium"> Toggle Filters </span>

                            <svg
                                class="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </summary>

                        <form class="border-t border-gray-200 lg:border-t-0">
                            {/* filter by categories */}
                            <fieldset>
                                <legend
                                    class="block w-full bg-gray-50 px-5 py-3 text-md font-medium"
                                >
                                    All Catagories
                                </legend>

                                <div class="space-y-2 px-5 py-6">
                                    <div class="flex items-center">
                                        <input
                                            id="toy"
                                            type="checkbox"
                                            name="type[toy]"
                                            class="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label for="toy" class="ml-3 text-sm font-medium cursor-pointer">
                                            Men
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            id="women"
                                            type="checkbox"
                                            name="type[women]"
                                            class="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label for="women" class="ml-3 text-sm font-medium cursor-pointer">
                                            Women
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            id="jacket"
                                            type="checkbox"
                                            name="type[jacket]"
                                            class="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label for="jacket" class="ml-3 text-sm font-medium cursor-pointer">
                                            Jacket
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            id="hoodie"
                                            type="checkbox"
                                            name="type[hoodie]"
                                            class="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label for="hoodie" class="ml-3 text-sm font-medium cursor-pointer">
                                            Hoodie
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            id="sweater"
                                            type="checkbox"
                                            name="type[sweater]"
                                            class="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label for="sweater" class="ml-3 text-sm font-medium cursor-pointer">
                                            Sweater
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            id="pants"
                                            type="checkbox"
                                            name="type[pants]"
                                            class="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label for="pants" class="ml-3 text-sm font-medium cursor-pointer">
                                            Pants
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            id="t-shirt"
                                            type="checkbox"
                                            name="type[t-shirt]"
                                            class="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label for="t-shirt" class="ml-3 text-sm font-medium cursor-pointer">
                                            T-shirt
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            id="shoes"
                                            type="checkbox"
                                            name="type[shoes]"
                                            class="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label for="shoes" class="ml-3 text-sm font-medium cursor-pointer">
                                            Shoes
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            id="bag"
                                            type="checkbox"
                                            name="type[bag]"
                                            class="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />

                                        <label for="bag" class="ml-3 text-sm font-medium cursor-pointer">
                                            Bag
                                        </label>
                                    </div>

                                    <div class="pt-2">
                                        <button type="button" class="text-xs text-gray-500 underline">
                                            Reset Type
                                        </button>
                                    </div>
                                </div>
                            </fieldset>

                            {/* filter by price */}
                            <div>
                                <fieldset>
                                    <legend
                                        class="block w-full bg-gray-50 px-5 py-3 text-md font-medium"
                                    >
                                        Price
                                    </legend>

                                    <div class="space-y-2 px-5 py-6">
                                        <div class="flex items-center">
                                            <input
                                                id="3+"
                                                type="checkbox"
                                                name="age[3+]"
                                                class="h-4 w-4 rounded border-gray-300"
                                            />

                                            <label for="3+" class="ml-3 text-sm font-medium">
                                                $ 0 - $ 50
                                            </label>
                                        </div>

                                        <div class="flex items-center">
                                            <input
                                                id="8+"
                                                type="checkbox"
                                                name="age[8+]"
                                                class="h-4 w-4 rounded border-gray-300"
                                            />

                                            <label for="8+" class="ml-3 text-sm font-medium">
                                                $ 50 - $ 100
                                            </label>
                                        </div>

                                        <div class="flex items-center">
                                            <input
                                                id="12+"
                                                type="checkbox"
                                                name="age[12+]"
                                                class="h-4 w-4 rounded border-gray-300"
                                            />

                                            <label for="12+" class="ml-3 text-sm font-medium">
                                            $ 100 - $ 200
                                            </label>
                                        </div>

                                        <div class="flex items-center">
                                            <input
                                                id="16+"
                                                type="checkbox"
                                                name="age[16+]"
                                                class="h-4 w-4 rounded border-gray-300"
                                            />

                                            <label for="16+" class="ml-3 text-sm font-medium">
                                            $ 200 - $ 400
                                            </label>
                                        </div>

                                        <div class="pt-2">
                                            <button
                                                type="button"
                                                class="text-xs text-gray-500 underline"
                                            >
                                                Reset Price
                                            </button>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div
                                class="flex justify-between border-t border-gray-200 px-5 py-3"
                            >

                                <button
                                    name="commit"
                                    type="button"
                                    class=" bg-teal-400 hover:bg-teal-500 w-[220px] py-2 text-md font-medium text-white"
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