import React from "react";
import styled from "styled-components";
import { CartItemType } from "../pages/Main";
import { Badge, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: relative;
  align-items: center;
  justify-content: center;

  .title {
    color: ${({ theme }) => theme.colors.main};
    font-size: 20px;
    font-weight: bold;
  }

  .cart-icon {
    position: absolute;
    right: 40px;
    cursor: pointer;
  }
`;
type Props = {
  setCartOpen: (cartOpen: boolean) => void;
  getTotalItems: (items: CartItemType[]) => number;
  cartItems: CartItemType[];
};

const Navbar: React.FC<Props> = ({ setCartOpen, getTotalItems, cartItems }) => {
  //Functional Component (Props 타입의 props를 가진다)
  return (
    <Wrapper>
      <div className="title">Market Kurly</div>
      <IconButton className="cart-icon">
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <ShoppingCartIcon onClick={() => setCartOpen(true)} />
        </Badge>
      </IconButton>
    </Wrapper>
  );
};

export default Navbar;
