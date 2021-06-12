import { findByLabelText } from '@testing-library/dom';
import React from 'react';

const Navbar = (props) => {

    return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://image.flaticon.com/icons/png/512/1170/1170678.png" alt="Cart-Icon" />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>   
    );
}
const styles = {
    cartIcon : {
        height: 32,
        marginRight: 20
    },
    nav : {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems:'center'
    },
    cartIconContainer : {
        position: 'relative'
    },
    cartCount : {
        background: 'yellow',
        position: 'absolute',
        borderRadius: '50%',
        right: 0,
        padding: '4px 6px',
        top: -9
    }

}

export default Navbar;