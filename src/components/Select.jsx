import React, { useId, useRef } from 'react'
import { useSelector } from 'react-redux';

export default  React.forwardRef(function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useRef();
    const userTheme = useSelector(state => state.theme);
  return (
    <div className={`w-full ${userTheme.themeColor? `bg-[#e2e8f0] text-black`: `bg-[#0f172a] text-[#e2e8f0]`}`}>
        {label && <label htmlFor={id} className=' text-xl ml-2 my-2 font-serif'>{label}</label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full  ${className}`}
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
