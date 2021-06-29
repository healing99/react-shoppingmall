import { Wrapper } from "./CartItem.styles";
import { CartItemType } from "../../types";
import Button from "@material-ui/core/Button";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="item-info">
          <p>가격: {item.price}원</p>
          <p>총가격: {item.amount * item.price}원</p>
        </div>
        <div className="item-buttons">
          <Button
            onClick={() => removeFromCart(item.id)}
            size="small"
            disableElevation
            variant="contained"
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            onClick={() => addToCart(item)}
            size="small"
            disableElevation
            variant="contained"
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.image} />
    </Wrapper>
  );
};

export default CartItem;
