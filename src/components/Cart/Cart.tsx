import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../../types";
import CartItem from "../CartItem/CartItem";
import { useRecoilValue } from "recoil";
import { cartItemState } from "../../states";

type Props = {
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ addToCart, removeFromCart }) => {
  const cartItems = useRecoilValue(cartItemState);
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <Wrapper>
      <div>장바구니</div>
      {cartItems.length === 0 ? <div>카트에 물건이 없습니다</div> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>총 가격 : {calculateTotal(cartItems)}</h2>
      <button>결제하기</button>
    </Wrapper>
  );
};

export default Cart;
