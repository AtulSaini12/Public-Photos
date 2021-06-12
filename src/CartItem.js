import React from 'react';

const CartItem = (props) => {

    // increaseQty = () => {
    //     this.setState({
    //         qty : this.state.qty + 1
    //     });
    // }

    // decreaseQty = () => {
    //     if(this.state.qty === 0){
    //         return;
    //     }
    //     this.setState({
    //         qty : this.state.qty - 1
    //     });
    // }
    
    const {
        product,
        onIncreaseQty,
        onDecreaseQty,
        onDeleteProduct
    } = props;

    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img} alt="Product"/>
            </div>
            <div className="right-block">
                <div>{product.title}</div>
                <div>Rs {product.price}</div>
                <div>Qty: {product.qty}</div>
                <div className="cart-item-actions">
                        {/* Icon buttons */}
                        <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992651.png" 
                        onClick={()=>onIncreaseQty(product)}
                        />
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                        onClick={()=>onDecreaseQty(product)}
                        />
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/512/3096/3096673.png" 
                        onClick={()=>onDeleteProduct(product.id)}
                        />
                </div>
            </div>
        </div>   
    );
}

const styles={
    image : {
        height : 110,
        width : 110,
        borderRadius : 4
    }
}

export default CartItem;