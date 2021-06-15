import React, { useState } from "react";
import { Drawer, Grid } from "@material-ui/core";
import Item from "../components/Item/Item";
import Data from "../data";
import { Wrapper } from "./Main.styles";
import Navbar from "../components/Navbar";

export type CartItemType = {
  id: number;
  title: string;
  content: string;
  image: string;
  price: number;
};

const Main = () => {
  const [items, setItems] = useState(Data);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (clickedItem: CartItemType) => null;

  return (
    <>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        Cart
      </Drawer>
      <Wrapper>
        <div className="item-container">
          {items?.map((item) => (
            <Item item={item} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Main;
