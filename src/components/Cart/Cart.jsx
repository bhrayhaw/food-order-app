import { useContext } from "react";
import Modal from "../Modal/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/CartContext";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const cartItems = (
        <ul className={styles["cart-items"]}>
            {cartCtx.items.map(
                (item) => (
                    <li key={item.id}>{item.name}</li>
                    
                )
            )}
        </ul>
    );
    

    return (
        <Modal>
            
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles["button--alt"]} onClick={props.onHideModal}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
