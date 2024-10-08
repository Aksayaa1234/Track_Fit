import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Navbar from './component/Navbar'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'

const theme = createTheme({
    palette:{
        primary:{
            main:"#001B3E"
        },
        secondary:{
            main:"#939185"
        },
        white:{
            main:"#EEEDEB",
            cream:"#e3e8d4"
        },
        red:{
            main:"#FF204E"
        },
        gold: {
            main:"#f0c451"
        }
    }
})
  

function App() {

    return (
        <div style={{"backgroundColor": theme.palette.primary.main, "minHeight" : "100vh"}}>
                <ThemeProvider theme = {theme}>
                    <CssBaseline/>
                    <BrowserRouter>
                        <Navbar/>
                        <Routes> 
                            <Route path='/home' element={<Home/>}/>
                            <Route path='/sign-in' element={<SignIn/>}/>
                            <Route path='/sign-up' element={<SignUp/>}/>
                            <Route path='/about' element={<About/>}/>
                            <Route path='/profile' element={<Profile/>}/>
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
        </div>
    )
}

export default App

