import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='border-2 border-red-600'>
            <form>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <button type='submit'>submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login