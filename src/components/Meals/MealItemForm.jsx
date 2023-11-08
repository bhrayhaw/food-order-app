import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Button from "../Button/Button";
import Input from "../UI/Input";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const addOrderHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const amountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            amountNumber < 1 ||
            amountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(amountNumber);
    };

    return (
        <form onSubmit={addOrderHandler}>
            <Input
                ref={amountInputRef}
                input={{
                    type: "number",
                    min: 1,
                    max: 10,
                    step: 1,
                    defaultValue: 1,
                }}
            />
            <Button>+ Add</Button>
            {!amountIsValid && <p>Enter a valid number between 1 and 5</p>}
        </form>
    );
};

export default MealItemForm;
