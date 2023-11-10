import { useContext, useState } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CardContext from "../../store/CartContext";

const MealItem = (props) => {
    const cartCtx = useContext(CardContext);
    const onAddToCart = (amount, meal) => {
        cartCtx.addItem({
            id: meal.id,
            name: meal.name,
            amount: amount,
            price: meal.price
        })
    };
    return (
        <div className={styles.menu}>
            {props.meals.map((meal) => (
                <div key={meal.id}>
                    <div className={styles.menulist}>
                        <div>
                            <h5>{meal.name}</h5>
                            <p>{meal.description}</p>
                            <span>${meal.price}</span>
                        </div>
                        <MealItemForm onAddToCart={(amount) => onAddToCart(amount, meal)}/>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default MealItem;
