import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (currState, action) => {
    if (action.type === "ADD") {
        const updatedItems = currState.items.concat(action.data);
        console.log(updatedItems);
        const updatedTotalAmount =
            currState.totalAmount + action.data.price * action.data.amount;
        console.log(updatedTotalAmount)
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartItems] = useReducer(
        cartReducer,
        defaultState
    );
    const addItemHandler = (item) => {
        dispatchCartItems({ type: "ADD", data: item });
    };
    const removeItemHandler = (id) => {
        dispatchCartItems({ type: "REMOVE", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
