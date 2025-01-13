import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from "./home";
import Tops from "./tops";
import Bottoms from "./bottoms";
import Dresses from "./dresses";
import Shoes from "./shoes";
import Accessories from "./accessories";
import Cart from "./cart";


export default function App() {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="/tops" element={<Tops/>}>
            </Route>
            <Route path="/bottoms" element={<Bottoms/>}>
            </Route>
            <Route path="/dresses" element={<Dresses/>}>
            </Route>
            <Route path="/shoes" element={<Shoes/>}>
            </Route>
            <Route path="/accessories" element={<Accessories/>}>
            </Route>
            <Route path="/cart" element={<Cart/>}>
            </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

reportWebVitals();
