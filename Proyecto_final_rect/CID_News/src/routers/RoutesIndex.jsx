import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { IndexNews } from '../components/IndexNews'
import { Error404 } from '../components/Error404'

export const RoutesIndex = () => {
  return (
        //Creamos nuestro directorio de rutas
        <Routes>
            <Route path='/' element={<IndexNews />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
)}
