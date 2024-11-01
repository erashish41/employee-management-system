import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'> Hello <br/> <span className='text-3xl font-semibold'> Ashish 👋🏻 </span></h1>
        <button className='text-lg font-medium bg-red-600 px-5 py-3 rounded text-white '>Log Out</button>
    </div>
  )
}

export default Header