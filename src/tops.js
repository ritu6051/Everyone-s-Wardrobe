import React from 'react';
import {useNavigate} from "react-router-dom";
import './index.css';

import tank_top from './images/tank_top.png'
import tshirt from './images/tshirt.gif'
import blouse from './images/blouse.jpg'
import sweater from './images/sweater.png'
import sweatshirt from './images/sweatshirt.png'
import jacket from './images/jacket.png'
import cart from './images/cart.png'


const Home = () => { 
    const navigate = useNavigate();

    function cartButton(event) {
        navigate('/cart');
    }

    return (
        <div>
            <div class="cart2">
                <button onClick={cartButton}>
                    <img src={cart} alt="cart" width="100" height="100"></img>
                </button>
            </div>
            <div class = "topContainer">
                    <figure class = "topCategory">
                        <img src={tank_top} alt="tank top" width="200" height="200"></img>   
                        <figcaption class='figcaption'>Tank Top</figcaption>
                        <figcaption class='description'>Color: Red</figcaption>
                        <figcaption class='description'>Material: Polyester</figcaption>
                        <figcaption class='description'>Size: M</figcaption>
                    </figure>
                    <figure class = "topCategory">
                        <img src={tshirt} alt="T-shirt" width="200" height="200"></img>
                        <figcaption class='figcaption'>T-Shirt</figcaption>
                        <figcaption class='description'>Color: Green</figcaption>
                        <figcaption class='description'>Material: Cotton</figcaption>
                        <figcaption class='description'>Size: S</figcaption>
                    </figure>
                    <figure class = "topCategory">
                        <img src={blouse} alt="blouse" width="200" height="200"></img>
                        <figcaption class='figcaption'>Blouse</figcaption>
                        <figcaption class='description'>Color: Red</figcaption>
                        <figcaption class='description'>Material: Polyester</figcaption>
                        <figcaption class='description'>Size: L</figcaption>
                    </figure>
                    <br/>
                    <figure class = "topCategory">
                        <img src={sweater} alt="sweater" width="200" height="200"></img>
                        <figcaption class='figcaption'>Sweater</figcaption>
                        <figcaption class='description'>Color: Pink</figcaption>
                        <figcaption class='description'>Material: Wool</figcaption>
                        <figcaption class='description'>Size: XS</figcaption>
                    </figure>
                    <figure class = "category">
                        <img src={sweatshirt} alt="sweatshirt" width="200" height="200"></img>
                        <figcaption class='figcaption'>Sweatshirt</figcaption>
                        <figcaption class='description'>Color: Blue</figcaption>
                        <figcaption class='description'>Material: Cotton</figcaption>
                        <figcaption class='description'>Size: XL</figcaption>
                    </figure>
                    <figure class = "category">
                        <img src={jacket} alt="jacket" width="200" height="200"></img>
                        <figcaption class='figcaption'>Jacket</figcaption>
                        <figcaption class='description'>Color: </figcaption>
                        <figcaption class='description'>Material: Acrylic</figcaption>
                        <figcaption class='description'>Size: M</figcaption>
                    </figure>
            </div>
        </div>
    );
};

export default Home;