import React, { useId, useRef } from 'react';

export default React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const idRef = useRef();

    return (
        <div className='w-full'>
            {label && (
                <label className='inline-block mb-1 pl-1' htmlFor={idRef}>
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={idRef.current}
                {...props}
                id={idRef.current}
            />
        </div>
    );
}
)