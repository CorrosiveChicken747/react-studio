import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import CartItem from "./components/CartItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [totalPrice, setPrice] = useState(0);

  return (
    <div className="App">
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h1 style={{fontSize: "100px"}}>Bigly Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <h2>Has anyone ever told you to eat their dust? Eat this yummy food instead</h2>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}>
        <div>
          {bakeryData.map((item, index) => (
            <BakeryItem
              idx={index}
              callback={() => {
                setCart(cart.concat([item.name]))
                setPrice(totalPrice + item.price)
              }}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          minWidth: "30vw",
        }}>
          <h2>Cart</h2>
          {cart.map((item) => (
            <CartItem text={item}/>
          ))}
          <h2>Total Price: ${Number(totalPrice).toFixed(2)}</h2>
        </div>
      </div>

    </div>
  );
}

export default App;
