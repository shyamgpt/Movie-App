import React, {Component} from "react";
import styles from './Navbar.module.css';


class Navbar extends Component{
    render(){

        return (
            <>
            <div className={styles.nav}>
                <div classname={styles.title}>Movie app</div>
                <div className={styles.cartIconContainer}>
                    <img 
                    className={styles.cartIcon}
                    src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"
                    alt="cart-icon"
                    />
                    <span className={styles.cartCount}>3</span>
                </div>
            </div>
            </>
        );
    }
}

export default Navbar;