import { useContext } from "react";
import Modal from "../Modal/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItems = (
        <ul className={styles["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onAdd = {cartItemAddHandler.bind(null, item)}
                    onRemove = {cartItemRemoveHandler.bind(null, item.id)}
                />
            ))}
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
                <button
                    className={styles["button--alt"]}
                    onClick={props.onHideModal}
                >
                    Close
                </button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
