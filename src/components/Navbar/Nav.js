import React from "react";
import styles from "./Nav.module.css";
import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <Link to="/" className={styles.Link}><h1 className={styles.heading}>React Router</h1></Link>
            <ul>
                <Link to="/shop" className={styles.Link}><li>Shop</li></Link>
                <Link to="/contact" className={styles.Link}><li>Contact</li></Link>
            </ul>
        </nav>
    );

}

export default Nav;
