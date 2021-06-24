import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 160px auto;
  position: relative;
  height: 480px;

  .item {
    display: flex;
    align-items: center;
  }

  img {
    max-width: 500px;
    height: 400px;
    margin-left: 40px;
  }

  .item-info {
    position: absolute;
    top: 0;
    right: 160px;
    font-size: 20px;
    color: darkgray;

    & > div {
      margin-bottom: 56px;
    }

    &__title {
      font-size: 40px;
      font-weight: bold;
    }
  }
  .buttons {
    position: absolute;
    bottom: 0;
    right: 30px;

    button {
      width: 200px;
      height: 50px;
      margin-right: 30px;
      font-weight: bold;
      cursor: pointer;

      &:nth-of-type(1) {
        border: 1px solid lightgray;
        background: #fff;
      }

      &:nth-of-type(2) {
        border: none;
        background: ${({ theme }) => theme.colors.main};
        color: #fff;
      }
    }
  }
`;
