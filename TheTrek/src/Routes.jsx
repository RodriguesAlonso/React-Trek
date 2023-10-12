import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Pages/Home'
import Lesson01 from './components/Pages/lesson01'
import Lesson02 from './components/Pages/lesson02'
import DataPage from './components/Pages/lesson02/DataPage'

export default function AppRoutes() {
    return(

        < BrowserRouter>
        <Routes>
            <Route path="/"
            element = {<Home/>} />
            <Route path="/lesson01" element= {<Lesson01/>} />
            <Route path="/lesson02" element={<Lesson02/>} />
            <Route path="/data" element={<DataPage/>} />
        </Routes>
    </BrowserRouter>
            )
}