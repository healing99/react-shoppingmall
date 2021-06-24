import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid lightgray;
  margin: 20px 30px;
  text-align: center;
  width: 300px;

  button {
    border: 1px solid lightgray;
    width: 100px;
    height: 40px;
    background: #fff;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #660096;
    }
  }
  img {
    height: 250px;
    width: 100%;
  }
`;
