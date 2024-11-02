import React from 'react'

const CreateTask = () => {
  return (
        <div className='p-5 mt-7 bg-[#1c1c1c] rounded'>
          <form className='flex items-start justify-between w-full flex-wrap'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a UI design'/>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='employee name'/>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='design, dev, etc..'/>
                </div>
            </div>

            <div className='flex items-start flex-col'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea className='w-full h-44 text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name='' id='' cols='30' rows='10'></textarea>
                <button className='bg-emerald-500 py-3 px-2 w-full hover:bg-emerald-700 rounded text-sm mt-4 mb-2'>Create task</button>
            </div>
          </form>
        </div>
  )
}

export default CreateTask