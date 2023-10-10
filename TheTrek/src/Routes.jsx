import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Pages/Home'
import Lesson01 from './components/Pages/lesson01'

export default function AppRoutes() {
    return(

        < BrowserRouter>
        <Routes>
            <Route path="/"
            element = {<Home/>} />
            <Route path="/lesson01" element= {<Lesson01/>} />
        </Routes>
    </BrowserRouter>
            )
}