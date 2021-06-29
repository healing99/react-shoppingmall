import React from "react";
import styled from "styled-components";
import { CartItemType } from "../types";
import { cartItemState } from "../states";
import { useRecoilValue } from "recoil";
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
    font-size: 28px;
    font-weight: bold;
  }

  .cart-icon {
    position: absolute;
    right: 40px;
    cursor: pointer;
  }

  .signup-btn {
    position: absolute;
    right: 260px;
    color: ${({ theme }) => theme.colors.main};
    cursor: pointer;
  }

  .login-btn {
    position: absolute;
    right: 200px;
    cursor: pointer;
  }
`;
type Props = {
  setCartOpen: (cartOpen: boolean) => void;
};

//Functional Component (Props 타입의 props를 가진다)
const Navbar: React.FC<Props> = ({ setCartOpen }) => {
  const cartItems = useRecoilValue(cartItemState);

  //배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  return (
    <Wrapper>
      <div className="title">Market Kurly</div>
      <div className="signup-btn">회원가입</div>
      <div className="login-btn">로그인</div>
      <IconButton className="cart-icon">
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <ShoppingCartIcon onClick={() => setCartOpen(true)} />
        </Badge>
      </IconButton>
    </Wrapper>
  );
};

export default Navbar;
