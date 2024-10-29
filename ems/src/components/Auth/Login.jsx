import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form className='flex flex-col items-center justify-center'>
                <input 
                className=' outline-none bg-transparent placeholder:text-gray-300 border-2 border-emerald-600 px-3 py-3 mx-2 my-2 text-xl rounded-full' 
                type='email' 
                placeholder='email'/>
                <input
                className=' outline-none bg-transparent placeholder:text-gray-300 border-2 border-emerald-600 px-3 py-3 mx-2 my-2 text-xl rounded-full'
                type='password' placeholder='password'/>
                <button 
                className='text-white outline-none border-none bg-emerald-600 px-3 py-3 mx-2 my-2 text-xl rounded-full'
                type='submit'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login