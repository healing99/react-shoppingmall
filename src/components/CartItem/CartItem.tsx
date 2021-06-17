import { Wrapper } from "./CartItem.styles";
import { CartItemType } from "../../pages/Main";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart }) => {
  return (
    <Wrapper>
      <div>{item.title}</div>
      <div>{item.price}</div>
      <div>{item.amount}</div>
    </Wrapper>
  );
};

export default CartItem;
