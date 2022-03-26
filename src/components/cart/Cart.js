import React from 'react';
import './Cart.css'



const Cart = ({ cart }) => {


    for (const product of cart) {
        cart = product.name;

    }


    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item:{cart}</p>

            <button>Choose 1 For me</button><br />
            <button>Choose Again</button>

        </div>

    );
};

export default Cart;