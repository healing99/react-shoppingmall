import { CartItemType } from "../../pages/Main";
import { Wrapper } from "./Item.styles";
import { useHistory } from "react-router-dom";

type Props = {
  item: CartItemType;
  setModalOpen: (modalOpen: boolean) => void;
};
const Item: React.FC<Props> = ({ item, setModalOpen }) => {
  const history = useHistory();

  const handleAddClick = () => {
    setModalOpen(true);
  };
  const moveToDetail = () => {
    history.push(`/item/${item.id}`);
  };
  return (
    <Wrapper>
      <div>
        <div className="item-click" onClick={moveToDetail}>
          <img src={item.image} alt={item.image} />
          <h4>{item.title}</h4>
        </div>
        <p>{item.price}원</p>
        <button onClick={handleAddClick}>카트에 담기</button>
      </div>
    </Wrapper>
  );
};
export default Item;
