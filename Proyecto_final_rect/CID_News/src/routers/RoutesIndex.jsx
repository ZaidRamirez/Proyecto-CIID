import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import { IndexNews } from '../components/IndexNews'
import { Error404 } from '../components/Error404'
import { Lists } from '../components/Lists'

export const RoutesIndex = () => {
  return (
        <Routes>
            <Route path='/' element={<IndexNews />} />
            <Route path='/lists' element={<Lists />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
)}
