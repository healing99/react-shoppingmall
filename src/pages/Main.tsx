import React, { useState } from "react";
import { Drawer, Badge } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Item from "../components/Item/Item";
import Data from "../data";
import { Wrapper } from "./Main.styles";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart/Cart";

export type CartItemType = {
  id: number;
  title: string;
  content: string;
  image: string;
  price: number;
  amount: number;
};

const Main = () => {
  const [items, setItems] = useState(Data);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const [cartOpen, setCartOpen] = useState(false);

  // const getTotalItems = (items: CartItemType[]) =>
  //   items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => null;

  return (
    <>
      <Navbar setCartOpen={setCartOpen} />
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} />
      </Drawer>
      <Wrapper>
        <div className="item-container">
          {items?.map((item) => (
            <Item key={item.id} item={item} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Main;
