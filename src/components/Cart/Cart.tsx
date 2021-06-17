import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../../pages/Main";
import CartItem from "../CartItem/CartItem";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart }) => {
  return (
    <Wrapper>
      <div>장바구니</div>
      {cartItems.length === 0 ? <div>카트에 물건이 없습니다</div> : null}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} addToCart={addToCart} />
      ))}
    </Wrapper>
  );
};

export default Cart;
