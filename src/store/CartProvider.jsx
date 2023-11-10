import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (currState, action) => {
    if (action.type === "ADD" && typeof action.data === "object") {
        const existingItemIndex = currState.items.findIndex(
            (item) => item.id === action.data.id
        );

        const existingItem = currState.items[existingItemIndex];

        let updatedItems;
        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                amount: action.data.amount + existingItem.amount,
            };
            updatedItems = [...currState.items];
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems = [...currState.items, action.data];
        }
        const updatedTotalAmount =
            currState.totalAmount + action.data.price * action.data.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === "REMOVE") {
        const existingItemIndex = currState.items.findIndex(
            (item) => item.id === action.id
        );

        const existingItem = currState.items[existingItemIndex];

        const updatedTotalAmount = currState.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = currState.items.filter(
                (item) => item.id !== action.id
            );
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1,
            };
            updatedItems = [...currState.items];
            updatedItems[existingItemIndex] = updatedItem;
        }
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
