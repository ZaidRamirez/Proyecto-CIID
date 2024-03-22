import './App.css'
import { Header } from './components/Header'
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
