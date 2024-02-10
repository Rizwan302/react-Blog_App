import React, { useId, useRef } from 'react'

export default  React.forwardRef(function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useRef()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='text-black text-xl ml-2 my-2 font-serif'>{label}</label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full  ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
})
