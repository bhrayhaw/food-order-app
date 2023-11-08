import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import styles from "./CartButton.module.css";
import CardContext from "../../store/CartContext";

const CartButton = (props) => {
    const cartCtx = useContext(CardContext);

    const numberOfItems = cartCtx.items.reduce((currentNumber, item) => {
        // console.log(cartCtx.items)
        return currentNumber + item.amount;
    }, 0);
    return (
        <React.Fragment>
            <button className={styles["cart-button"]} onClick={props.onClick}>
                <CartIcon className={styles.icon} />
                <p>Your Cart</p>
                <div className={styles["item-number"]}>{numberOfItems}</div>
            </button>
        </React.Fragment>
    );
};

export default CartButton;
