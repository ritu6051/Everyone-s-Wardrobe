import React from 'react';
import {useNavigate} from "react-router-dom";
import './index.css';

import tshirt from './images/tshirt.gif'
import pants from './images/jeans.png'
import dress from './images/dress.jpg'
import shoes from './images/shoes.jpg'
import ring from './images/ring.png'
import cart from './images/cart.png'


const Home = () => { 
    const navigate = useNavigate();
    
    function topsButton(event) {
        navigate('/tops');
    }

    function bottomsButton(event) {
        navigate('/bottoms');
    }

    function dressesButton(event) {
        navigate('/dresses');
    }

    function shoesButton(event) {
        navigate('/shoes');
    }

    function accessoriesButton(event) {
        navigate('/accessories');
    }

    function cartButton(event) {
        navigate('/cart');
    }

    return (
        <div>
            <div class="title">
                <h1>Everyone's Wardrobe</h1>
            </div>
            <div class="cart">
                <button class="cart" onClick={cartButton}>
                    <img src={cart} alt="cart" width="100" height="100"></img>
                </button>
            </div>
            
            <div class = "container">
                    <figure class = "category">
                    <button onClick={topsButton}>
                        <img src={tshirt} alt="T-shirt" width="200" height="200" border="none"></img>   
                        <figcaption class='figcaption'>Tops</figcaption>
                    </button>
                    </figure>
                    <figure class = "category">
                    <button onClick={bottomsButton}>
                        <img src={pants} alt="Pants" width="130" height="200"></img>
                        <figcaption class='figcaption'>Bottoms</figcaption>
                    </button>
                    </figure>
                    <figure class = "category">
                    <button onClick={dressesButton}>
                        <img src={dress} alt="Dress" width="200" height="200"></img>
                        <figcaption class='figcaption'>Dresses</figcaption>
                    </button>
                    </figure>
                    <br/>
                    <figure class = "category">
                    <button onClick={shoesButton}>
                        <img src={shoes} alt="Shoes" width="200" height="200"></img>
                        <figcaption class='figcaption'>Shoes</figcaption>
                    </button>  
                    </figure>
                    <figure class = "category">
                    <button onClick={accessoriesButton}>
                        <img src={ring} alt="Ring" width="200" height="200"></img>
                        <figcaption class='figcaption'>Accessories</figcaption>
                    </button>
                    </figure>
            </div>
        </div>
    );
};

export default Home;