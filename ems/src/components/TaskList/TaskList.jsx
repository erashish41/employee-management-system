import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='mt-10 py-50 overflow-x-auto flex items-center flex-nowrap justify-start gap-5 h-[55%] w-full'>
        <div className='h-full w-[300px] bg-red-300  flex-shrink-0 flex flex-col justify-between mt-4 p-5 rounded-md'>
            <div className='flex justify-between items-center px-3 py-1'>
                <h3 className=' bg-red-600 rounded font-semibold text-sm px-2 py-1'>High</h3>
                <h4 className='font-medium text-l'>20 June 2024</h4>
            </div>
            <h2 className='text-xl font-semibold mb-2'>Make Employee Database</h2>
            <p className='text-sm leading-5'>A performance management system tracks the performance of employees in a manner that is consistent and measurable. The system relies on a combination of technologies and methodologies to ensure people across the organization are aligned with and contributing to the strategic objectives of the business.</p>
        </div>

        <div className='h-full w-[300px] bg-green-300  flex-shrink-0 flex flex-col justify-between mt-4 p-5 rounded-md'>
            <div className='flex justify-between items-center px-3 py-1'>
                <h3 className=' bg-red-600 rounded font-semibold text-sm px-2 py-1'>High</h3>
                <h4 className='font-medium text-l'>20 June 2024</h4>
            </div>
            <h2 className='text-xl font-semibold mb-2'>Make Employee Database</h2>
            <p className='text-sm leading-5'>A performance management system tracks the performance of employees in a manner that is consistent and measurable. The system relies on a combination of technologies and methodologies to ensure people across the organization are aligned with and contributing to the strategic objectives of the business.</p>
        </div>

        <div className='h-full w-[300px] bg-blue-300  flex-shrink-0 flex flex-col justify-between mt-4 p-5 rounded-md'>
            <div className='flex justify-between items-center px-3 py-1'>
                <h3 className=' bg-red-600 rounded font-semibold text-sm px-2 py-1'>High</h3>
                <h4 className='font-medium text-l'>20 June 2024</h4>
            </div>
            <h2 className='text-xl font-semibold mb-2'>Make Employee Database</h2>
            <p className='text-sm leading-5'>A performance management system tracks the performance of employees in a manner that is consistent and measurable. The system relies on a combination of technologies and methodologies to ensure people across the organization are aligned with and contributing to the strategic objectives of the business.</p>
        </div>

        <div className='h-full w-[300px] bg-yellow-300  flex-shrink-0 flex flex-col justify-between mt-4 p-5 rounded-md'>
            <div className='flex justify-between items-center px-3 py-1'>
                <h3 className=' bg-red-600 rounded font-semibold text-sm px-2 py-1'>High</h3>
                <h4 className='font-medium text-l'>20 June 2024</h4>
            </div>
            <h2 className='text-xl font-semibold mb-2'>Make Employee Database</h2>
            <p className='text-sm leading-5'>A performance management system tracks the performance of employees in a manner that is consistent and measurable. The system relies on a combination of technologies and methodologies to ensure people across the organization are aligned with and contributing to the strategic objectives of the business.</p>
        </div>

    </div>
  )
}

export default TaskList