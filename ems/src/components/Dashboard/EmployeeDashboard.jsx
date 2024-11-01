import React from 'react'
import Header from '../others/Header'
import TaskItemList from '../others/TaskItemList'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C]'>
        <Header />
        <TaskItemList />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard