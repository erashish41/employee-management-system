import React from 'react'

const CreateTask = () => {
  return (
        <div className='p-5 mt-7 bg-[#1c1c1c] rounded'>
          <form className='flex items-start justify-between w-full bg-red-200'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input type='text' placeholder='Make a UI design'/>
                </div>
                <div>
                    <h3>Date</h3>
                    <input type='date' />
                </div>
                <div>
                    <h3>Assign to</h3>
                    <input type='text' placeholder='employee name'/>
                </div>
                <div>
                    <h3>Category</h3>
                    <input type='text' placeholder='design, dev, etc..'/>
                </div>
            </div>

            <div>
                <h3>Description</h3>
                <textarea name='' id='' cols='30' rows='10'></textarea>
                <button>Create task</button>
            </div>
          </form>
        </div>
  )
}

export default CreateTask