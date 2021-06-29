import { useState } from "react";
import { Drawer } from "@material-ui/core";
import Item from "../components/Item/Item";
import Data from "../data";
import { Wrapper } from "./Main.styles";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart/Cart";
import Modal from "../components/Modal/Modal";
import { CartItemType } from "../types";
import { useRecoilState } from "recoil";
import { cartItemState } from "../states";

const Main = () => {
  const [items, setItems] = useState(Data);
  const [cartItems, setCartItems] = useRecoilState(cartItemState);
  const [cartOpen, setCartOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    id: 0,
    title: "",
    content: "",
    image: "",
    price: 0,
    amount: 0,
  });

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);
  //배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

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
      <Navbar setCartOpen={setCartOpen} getTotalItems={getTotalItems} />
      {modalOpen ? (
        <Modal
          setModalOpen={setModalOpen}
          handleAddToCart={handleAddToCart}
          selectedItem={selectedItem}
        />
      ) : null}
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <Wrapper>
        <div className="item-container">
          {items?.map((item) => (
            <Item
              key={item.id}
              item={item}
              setModalOpen={setModalOpen}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Main;
