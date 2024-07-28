import { Outlet } from 'react-router-dom'
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Project from './components/Project'
import Services from './components/Services'
import { useState } from 'react'

function App() {
  const [menu, setMenu] = useState(false)

  return (
    <div id='app'>
      <Header menu={menu} setMenu={setMenu} />
      <Outlet context={[menu, setMenu]} />
      <Footer />
    </div>
  )
}

export default App
