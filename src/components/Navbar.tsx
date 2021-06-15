import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #a1a1f8;
  position: relative;
  align-items: center;
  justify-content: center;

  button {
    height: 30px;
    position: absolute;
    right: 20px;
  }
`;

type Props = {
  setCartOpen: (cartOpen: boolean) => void;
};

const Navbar: React.FC<Props> = ({ setCartOpen }) => {
  return (
    <Wrapper>
      <button onClick={() => setCartOpen(true)}>카트 열기</button>
      <div className="title">Shopping Mall</div>
    </Wrapper>
  );
};

export default Navbar;
