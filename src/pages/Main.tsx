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

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      //이미 장바구니에 담겨있으면 amount만 하나 증가
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      //처음 담는거라면
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };
  return (
    <>
      <Navbar
        setCartOpen={setCartOpen}
        getTotalItems={getTotalItems}
        cartItems={cartItems}
      />
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
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
