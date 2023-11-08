import React from "react";
import CartButton from "../Cart/CartButton.jsx";
import styles from "./Header.module.css";

const Header = (props) => {
    return (
        <React.Fragment>
            <div className={styles.main}>
                <h3>Foodie</h3>
                <CartButton onClick={props.onShowModal}/>
            </div>
        </React.Fragment>
    );
};

export default Header;
