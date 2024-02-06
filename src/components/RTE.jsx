import { Editor } from '@tinymce/tinymce-react'
import React, { useEffect, useRef, useState } from 'react'
import Container from './Container';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
    // console.log(name, control, label, defaultValue)
    return (
        <div className='w-full'>
        {label && <div className='inline-block pl-1 text-black text-xl ml-1 mb-2'>{label}</div>}
        <Controller
            name={name || "content"}
            control={control}
            render={({ field: { onChange } }) => (
                <Editor
                    initialValue={defaultValue}
                    apiKey='ow92x1xzh2ppaccmt1gc4el20la2x9dv2jntwhzwn2m20w5n'
                    init={{
                        menubar: true,
                        plugins: [
                            "image",
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                            "anchor",
                        ],
                        toolbar:
                            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                    }}
                    onEditorChange={onChange}
                />
            )}
        />
    </div>
    )
}
