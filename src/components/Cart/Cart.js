import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div>
            Order Summary: {cart.length}
        </div>
    );
};

export default Cart;