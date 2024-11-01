import React from 'react'
import Header from '../others/Header'
import TaskItemList from '../others/TaskItemList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C]'>
        <Header />
        <TaskItemList />
    </div>
  )
}

export default EmployeeDashboard