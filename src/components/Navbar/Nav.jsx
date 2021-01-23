import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
    return(
        <nav>
            <h1 className={styles.heading}>React Router</h1>
            <ul>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );

}

export default Nav;
