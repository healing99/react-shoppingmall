import Navbar from "../../components/Navbar";
import { Wrapper } from "./ItemDetail.styles";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { CartItemType } from "../../types";

type LocationState = {
  from: Location;
  item: CartItemType;
};

const ItemDetail = () => {
  const [item, setItem] = useState<CartItemType | null>(null);
  const location = useLocation<LocationState>();
  useEffect(() => {
    console.log(location.state.item);
    setItem(location.state.item);
  }, []);
  return (
    <Wrapper>
      <div className="item">
        <img src={item?.image} alt="" />
        <div className="item-info">
          <div className="item-info__title">{item?.title}</div>
          <div className="item-info__price">
            <span>가격: </span>
            {item?.price}원
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
            <span>구매수량:{item?.amount} </span>
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
