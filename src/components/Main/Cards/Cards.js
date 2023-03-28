import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.css'
const Cards = (props) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='productCards'>
            {
                products.map(product => <Card
                    key={product.id}
                    product={product}
                    addedProduct={props.addedProduct}
                ></Card>)
            }

        </div>
    );
};

export default Cards;