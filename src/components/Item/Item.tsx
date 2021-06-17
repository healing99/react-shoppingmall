import { CartItemType } from "../../pages/Main";
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};
const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <div>
        <img src={item.image} alt={item.image} />
        <h4>{item.title}</h4>
        <p>{item.content}</p>
        <p>{item.price}</p>
        <button onClick={() => handleAddToCart(item)}>카트에 담기</button>
      </div>
    </Wrapper>
  );
};
export default Item;
