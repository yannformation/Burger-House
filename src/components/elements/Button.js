import React from 'react'

export default function Button({children, className}) {



  return (
    <div>
        <button className={`${className} px-5 py-2 uppercase shadow-xl text-white tracking-widest text-sm font-medium animate`}>
            {children}
        </button>
    </div>
  )
}
