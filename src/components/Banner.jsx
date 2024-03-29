import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config'
import { useForm } from 'react-hook-form';
import PostCard from './PostCard';

export default function Banner() {
    const { register, setValue, handleSubmit } = useForm({
        defaultValues: {
            search: ''
        }
    })
    const [searchData, setSearchData] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const handelSearch = (e) => {
        console.log(searchInput)
        appwriteService.getPosts([]).then((post) => {
            if (post) {
                const findData = post.documents.filter(({ title, blogtype }) => title.toLowerCase().includes(searchInput.toLowerCase()));
                console.log('post', findData);
                setSearchData(findData);
                setSearchInput('')
            }
        })
    }
    useEffect(() => {

    }, [handelSearch, searchInput])

    return (
        // <!-- Container for demo purpose -->
        <div class="container my-24 mx-auto md:px-6">
            {/* <!-- Section: Design Block --> */}
            <section class="mb-28 text-center md:text-left">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-teal-800">
                    <div class="flex flex-wrap items-center">
                        <div
                            class="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/097.jpg"
                                alt="Trendy Pants and Shoes"
                                class="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg" />
                        </div>
                        <div class="w-full shrink-0 grow-0 basis-auto md:w-8/12">
                            <div class="px-6 py-4 md:px-12 items-start">
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
                                    data-te-ripple-color="dark">
                                    Learn more
                                </button>
                            </div>
                            <form onSubmit={handleSubmit(handelSearch)} class="px-6 py-12 md:px-12 md:flex">
                                <div class="relative mb-3 w-full md:mr-3 md:mb-0" data-te-input-wrapper-init>
                                    <input type='search'
                                        class="peer block min-h-[auto] w-full rounded border-1 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-black "
                                        id="exampleFormControlInput2" placeholder="Search..."
                                        {...register("search", { required: true })}
                                        onInput={(e) => {
                                            const inputData = e.currentTarget.value;
                                            setSearchInput(inputData)
                                        }} />
                                    <label for="exampleFormControlInput2"
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary">Search BLOG
                                    </label>
                                </div>
                                <button type="submit"
                                    class="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-green-600"
                                    data-te-ripple-init data-te-ripple-color="light"
                                    // onClick={handelSearch}
                                    >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Design Block --> */}

                <h2 class="mb-12 pb-4 text-center text-3xl font-bold">
                    {searchData.length ? `Search Result in ${searchInput}`: null}
                </h2>
            <div class="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12">
                {searchData.length ? (searchData.map((post) => (
                    <PostCard {...post} />
                ))) : null}
            </div>
        </div>
    )
}
