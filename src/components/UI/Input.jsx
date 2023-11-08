import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles.form}>
            <label htmlFor="amount">Amount</label>
            <input {...props.input} ref={ref} />
        </div>
    );
});

export default Input;
