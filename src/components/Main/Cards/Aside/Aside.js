
const Aside = (props) => {
    // console.log(props.product)
    // const { carts } = props.product;
    return (
        <div>
            <h1>{props.product.length}</h1>
            {
                props.product.map(cart => <CartCard
                    key={cart.id}
                    cart={cart}></CartCard>)
            }


        </div>
    );
};

function CartCard(props) {
    const { id, name, price } = props.cart;
    return (
        <div>

            <h4> id: {id}</h4>
            <h5>Name:{name}</h5>
            <h5>Price:{price}</h5>

        </div>)

}


export default Aside;