import React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
    return (
        <React.Fragment>
            <div className={styles.welcome}>
                <h3>Delicious Food, At Your Service</h3>
                <p>
                    Choose your favorite meal from our broad selection of
                    available meals and enjoy a delicious lunch or dinner at
                    home.
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients,
                    just-in-time and of course by experienced chefs!
                </p>
            </div>
        </React.Fragment>
    );
};

export default Welcome;
