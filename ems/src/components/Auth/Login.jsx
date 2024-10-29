import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-600'>
            <form className='flex flex-col items-center justify-center'>
                <input 
                className='text-black outline-none border-2 border-emerald-600 px-3 py-3 mx-2 my-2 text-xl rounded-full' 
                type='email' 
                placeholder='email'/>
                <input type='password' placeholder='password'/>
                <button type='submit'>Log in the page</button>
            </form>
        </div>
    </div>
  )
}

export default Login