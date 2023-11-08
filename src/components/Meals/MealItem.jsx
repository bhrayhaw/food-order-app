import { useContext, useState } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CardContext from "../../store/CartContext";

const MealItem = (props) => {
    console.log(props.meals)
    const cartCtx = useContext(CardContext);
    const onAddToCart = (amount) => {
        cartCtx.addItem({
            id: props.meals.id,
            name: props.meals.name,
            amount: amount,
            price: props.meals.price
        })
        console.log(cartCtx)
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
                        <MealItemForm onAddToCart={onAddToCart}/>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default MealItem;
