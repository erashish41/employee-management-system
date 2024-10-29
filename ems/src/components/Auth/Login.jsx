import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log("email is:", email);
        console.log("password is:", password);
        
        setEmail("");
        setPassword("");
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form
                onSubmit={(e)=>{handleSubmitForm(e)}}
                className='flex flex-col items-center justify-center'>
                <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required
                    className=' outline-none bg-transparent placeholder:text-gray-300 border-2 border-emerald-600 px-3 py-3 mx-2 my-2 text-xl rounded-full' 
                    type='email' 
                    placeholder='email'
                />
                <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required
                    className=' outline-none bg-transparent placeholder:text-gray-300 border-2 border-emerald-600 px-3 py-3 mx-2 my-2 text-xl rounded-full'
                    type='password' placeholder='password'
                />
                <button
                    className='text-white outline-none border-none bg-emerald-600 px-3 py-3 mx-2 my-2 text-xl rounded-full'
                    type='submit'>Log in    
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login