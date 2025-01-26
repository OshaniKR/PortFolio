import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Header from './components/Header';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <About/>
       </div>
    </>
  )
}

export default App
