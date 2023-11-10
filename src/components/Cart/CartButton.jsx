import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import styles from "./CartButton.module.css";
import CardContext from "../../store/CartContext";

const CartButton = (props) => {
    const cartCtx = useContext(CardContext);

    const { items } = cartCtx;

    const numberOfItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    
    const [itemIsAdded, setItemIsAdded] = useState(false);
    const btnClasses = `${styles['cart-button']} ${itemIsAdded ? styles.bump : ""}`

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setItemIsAdded(true);

        const timer = setTimeout(() => {
            setItemIsAdded(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }
    }, [items])
    return (
        <React.Fragment>
            <button className={btnClasses} onClick={props.onClick}>
                <CartIcon className={styles.icon} />
                <p>Your Cart</p>
                <div className={styles["item-number"]}>{numberOfItems}</div>
            </button>
        </React.Fragment>
    );
};

export default CartButton;
