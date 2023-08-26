import React from 'react'
import MainNavigation from '../components/MainNavigation'
import { Outlet } from 'react-router-dom'
import './RootLayout.css'

export default function RootLayout() {
  return (
    <>
    <MainNavigation />
    <main className='content'>
     <Outlet />
    </main>
    </>
  )
}
