import React from 'react'

export default function Bannar() {
    return (
        <div>
            {/* <!-- Container for demo purpose --> */}
            <div class="container my-10 mx-auto md:px-6">
                {/* <!-- Section: Design Block --> */}
                <section class="mb-32 text-center md:text-left">
                    <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="flex flex-wrap items-center">
                            <div
                                class="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/097.jpg"
                                    alt="Trendy Pants and Shoes"
                                    class="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg" />
                            </div>
                            <div class="w-full shrink-0 grow-0 basis-auto md:w-8/12">
                                <div class="px-6 py-12 md:px-12">
                                    <h2 class="mb-6 text-3xl font-bold">
                                        <span class="text-danger dark:text-danger-500">"Spicy life"</span> project
                                    </h2>
                                    <p class="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                                        Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                                        neque iaculis malesuada. Aenean gravida magna orci, non
                                        efficitur est porta id. Donec magna diam.
                                    </p>
                                    <button
                                        type="button"
                                        class="inline-block rounded-full bg-danger px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Section: Design Block --> */}
            </div>
            {/* <!-- Container for demo purpose --> */}
        </div>
    )
}
