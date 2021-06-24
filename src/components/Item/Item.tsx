import { CartItemType } from "../../pages/Main";
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  setModalOpen: (modalOpen: boolean) => void;
};
const Item: React.FC<Props> = ({ item, setModalOpen }) => {
  const handleAddClick = () => {
    setModalOpen(true);
  };
  return (
    <Wrapper>
      <div>
        <img src={item.image} alt={item.image} />
        <h4>{item.title}</h4>
        <p>{item.price}원</p>
        <button onClick={handleAddClick}>카트에 담기</button>
      </div>
    </Wrapper>
  );
};
export default Item;
