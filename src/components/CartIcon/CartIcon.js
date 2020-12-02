import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './CartIcon.scss';

const CartIcon = () => (
    <FontAwesomeIcon icon={faShoppingBasket} className="cartIcon" />
)

export default CartIcon;