import { useState } from "react";
import Cart from "./components/Cart/Cart.jsx";
import Header from "./components/Header/Header.jsx";
import Image from "./components/Image/Image.jsx";
import MealItem from "./components/Meals/MealItem.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";
import CartProvider from "./store/CartProvider.jsx";

const meals = [
    { id: "c1", name: "Sushi", description: "Fishes and Veggies", price: 22.29 },
    { id: "c2", name: "Sushi", description: "Fishes and Veggies", price: 22.29 },
    { id: "c3", name: "Sushi", description: "Fishes and Veggies", price: 22.29 },
];
console.log(meals)
function App() {
    const [showModal, setShowModal] =useState(false)

    const showModalView = () => {
      setShowModal(true);
    }

    const hideModal = () => {
      setShowModal(false);
    }

    const orderMeal = (order) => {
        console.log(order);
        // return (order = order + 1);
    };
    return (
        <CartProvider>
            <Header onShowModal = {showModalView}/>
            {showModal && <Cart onHideModal={hideModal}/>}
            <Image />
            <Welcome />
            <MealItem meals={meals} onAddMeal={orderMeal} />
        </CartProvider>
    );
}

export default App;
