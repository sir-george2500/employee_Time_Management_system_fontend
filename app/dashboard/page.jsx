"use client"
import AdminForm from '@/components/AdminForm'
import DashboardView from '@/components/dashboard_components/DashboardView'
import Navbar from '@/components/dashboard_components/NavBar'
import Sidebar from '@/components/dashboard_components/SideBar'
import Image from 'next/image'
import Link from 'next/navigation'

export default function Dasboard() {
  return (
    <> 
    <Navbar/> 
    <div  className='flex'>
    <Sidebar /> 
     <DashboardView />
    </div>
    </>
  )
}
