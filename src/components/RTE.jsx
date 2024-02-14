import { Editor } from '@tinymce/tinymce-react'
import React, { useEffect, useRef, useState } from 'react'
import Container from './Container';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';

export default function RTE({ name, control, label, defaultValue = "" }) {
    const userTheme = useSelector(state => state.theme);

    return (
        <div className='w-full'>
        {label && <div className={`inline-block pl-1 text-xl ml-1 mb-2 ${userTheme.themeColor? `bg-[#e2e8f0] text-black`: `bg-[#0f172a] text-[#e2e8f0]`}`}>{label}</div>}
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
