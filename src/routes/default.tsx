import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, Panel, Login, Error404, Editar} from '../pages';
import { Header } from '../components';
export default function DefaultRoute(){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/panel' element={<Panel></Panel>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/editar/:id' element={<Editar></Editar>}></Route>
                <Route path='*' element={<Error404></Error404>}></Route>
            </Routes>
        </BrowserRouter>   
    )
}