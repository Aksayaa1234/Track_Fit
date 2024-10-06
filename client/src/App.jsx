import { useState } from 'react'
import Navbar from './component/Navbar'
import Login from './component/login'
import { CssBaseline } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CssBaseline/>
     <Navbar/>
     <Login/>
    </>
  )
}

export default App
