import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../menu/Menu'
import { AnimatePresence } from 'framer-motion'

export default function Section() {
  return (
    <div>
         <Menu /> 
     
    <Outlet /></div>
  )
}
