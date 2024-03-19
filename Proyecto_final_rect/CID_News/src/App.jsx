import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { IndexNews } from './components/IndexNews'
import { Footer } from './components/Footer'
import { RoutesIndex } from './routers/RoutesIndex'

function App() {

  return (
    <div className="layout">
      <Header />
      <div className="container py-2">
        <RoutesIndex />
      </div>
      <Footer />
    </div>
  )
}

export default App
