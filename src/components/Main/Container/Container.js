import { useState } from 'react';
import Aside from '../Cards/Aside/Aside';
import Cards from '../Cards/Cards';
import './Container.css'
const Container = () => {

    const [cart, setCart] = useState([])

    const addedProduct = (product) => {


        const newProduct = [...cart, product];
        // console.log(newProduct)
        setCart(newProduct)
    }

    return (

        <div className='container'>
            <Cards addedProduct={addedProduct} ></Cards>
            <Aside product={cart}></Aside>
        </div>
    );
};

export default Container;