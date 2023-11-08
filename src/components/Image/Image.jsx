import React from "react";
import image from "../../assets/istockphoto-1311487470-612x612.jpg";
import styles from "./Image.module.css";

const Image = () => {
    return (
        <React.Fragment>
            <div className={styles.image}>
                <img src={image} alt="meal image" />
            </div>
            <div className={styles.separator}></div>
        </React.Fragment>
    );
};

export default Image;
