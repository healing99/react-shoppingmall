import { Wrapper } from "./ItemDetail.styles";
import Icecream from "../../assets/image/Icecream.jpg";

const ItemDetail = () => {
  return (
    <Wrapper>
      <div className="item">
        <img src={Icecream} alt="" />
        <div className="item-info">
          <div className="item-info__title">바닐라 아이스크림</div>
          <div className="item-info__price">
            <span>가격: </span>1400원
          </div>
          <div className="item-info__delivery">
            <span>배송구분: </span>
            샛별배송/ 택배배송
          </div>
          <div className="item-info__origin">
            {" "}
            <span>원산지: </span> 별도표기
          </div>
          <div className="item-info__amount">
            <span>구매수량: </span>1
          </div>
        </div>
      </div>
      <div className="buttons">
        <button>재입고 알림</button>
        <button>장바구니 담기</button>
      </div>
      <div className="item-details"></div>
    </Wrapper>
  );
};

export default ItemDetail;
