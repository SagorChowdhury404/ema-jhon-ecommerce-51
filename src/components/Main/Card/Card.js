import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
    const { id, img
        , category, name, seller, price, ratings, ratingsCount, shipping, stock

    } = props.product;

    const addedProduct = props.addedProduct;


    return (
        <div className='productCard'>
            {/* <h4>id:{id}</h4> */}
            <img src={img} alt="" srcset="" />
            <h3>{name}</h3>
            <h5>price:{price}</h5>
            <h6>stock:{stock}</h6>
            <h6>ratingsCount:{ratingsCount} </h6>
            <button onClick={() => addedProduct(props.product)} className='ProductBuy'> BUY  <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Card;