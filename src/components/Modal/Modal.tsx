import { CartItemType } from "../../types";
import { Wrapper } from "./Modal.styles";

type Props = {
  setModalOpen: (modalOpen: boolean) => void;
  handleAddToCart: (clickedItem: CartItemType) => void;
  selectedItem: CartItemType;
};
const Modal: React.FC<Props> = ({
  setModalOpen,
  handleAddToCart,
  selectedItem,
}) => {
  const handleConfirm = () => {
    setModalOpen(false);
    handleAddToCart(selectedItem);
  };
  return (
    <Wrapper>
      <div className="modal__bg">
        <div className="modal">
          <p>장바구니에 담으시겠습니까?</p>
          <div className="modal__buttons">
            <button
              className="modal__cancel-btn"
              onClick={() => setModalOpen(false)}
            >
              취소
            </button>
            <button className="modal__confirm-btn" onClick={handleConfirm}>
              장바구니 담기
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
