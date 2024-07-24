import React from 'react'
import Sidebar from './Sidebar'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'
import { Emergencies } from './Emergencies'


export const Dashboard = () => {
  return (
    <div>

        <Sidebar/>
        <Header/>
        <Outlet/>

    </div>
  )
}
