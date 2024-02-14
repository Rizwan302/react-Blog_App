import React, { useCallback, useEffect, useState } from 'react'
import { Container } from '../index.js'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import RTE from '../RTE.jsx';
import { useForm } from 'react-hook-form';
import appwriteService from '../../appwrite/config.js';
import { Select } from '../index.js';


export default function  PostForm({ post }) {
    const userTheme = useSelector(state => state.theme);


    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: async () =>({
            title: await post?.title || "",
            slug: await post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
            blogtype: post?.blogtype || "Science"
        }),
    });


    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
            if (file) {
                appwriteService.deleteFile(post.blogimg);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                blogimg: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        }
        else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.blogimg = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userid: userData.$id });
                console.log(dbPost)
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);


    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue, useForm])

    return (
        <div className='py-8'>
            <Container>
                <form onSubmit={handleSubmit(submit)} className={`flex flex-wrap ${userTheme.themeColor? `bg-[#e2e8f0] text-black`: `bg-[#0f172a] text-[#e2e8f0]`}`}>
                    <div className="w-2/3 px-2">
                        <div className="">
                            <label htmlFor="" className=' inline-block pl-1 text-xl ml-1 mb-2'>Title</label>
                            
                            <input type="text" placeholder="title" name='title' className='mb-4 px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
                                {...register("title",{ required: true })}
                                
                                onInput={(e) => {
                                    const inputValue = e.currentTarget.value;
                                    setValue('title', inputValue, { shouldValidate: true })
                                }}
                            />

                        </div>
                        <div className="">
                            <label htmlFor="" className='inline-block pl-1  text-xl ml-1 mb-2'>Slug</label>
                            <input type="text" placeholder='Slug' name='slug' className='mb-4 px-3 py-2 rounded-lg outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
                                {...register("slug", { required: true })}
                                onInput={(e) => {
                                    setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true })
                                }} />
                        </div>

                        <RTE label="Content " name="content" control={control} defaultValue={getValues("content")} />
                    </div>

                    <div className="w-1/3 px-2">
                        <label htmlFor="" className=' text-xl ml-2 my-2'>Upload Image</label>
                        <input type="file" placeholder='File' name='file' className="mb-4 px-3 py-2 rounded-lg outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full" {...register("image", { required: !post })}
                            accept='image/png, image/jpg, image/jpeg, image/gif'
                        />
                        {post && (
                            <div className="w-full mb-4">
                                <img
                                    src={appwriteService.getFilePreview(post.blogimg)}
                                    alt={post.title}
                                    className="rounded-lg"
                                />
                            </div>
                        )}
                        <Select
                            options={["active", "inactive"]}
                            label="Status"
                            className="mb-4"
                            {...register("status", { required: true })}
                        />

                        <div className="my-2">
                        
                        <Select
                            options={["science","Health", "News", "Business", "Food", "Travel", "Infographic", "DIY", "Personal", "Music", "Movies", "Niche", "Finance", "Fashion", "Media", "CaseStudy", "Listicles", "Affiliate", "Infographic", "Parenting", "PersonalStories", "Brand", "HomeDecor"]}
                            label="Blog Type"
                            className="mb-4 "
                            {...register("blogtype", { required: true })}
                        />
                        </div>

                        <button type='submit' className={`w-full bg-cyan-600 text-white px-4 py-2 rounded-lg mt-6 bg-${post ? "green-500" : ""}`}>
                            {/* {post ? "Update" : "Submit"} */}
                            Upload
                        </button>
                    </div>
                </form>
            </Container>
        </div>
    )
}
