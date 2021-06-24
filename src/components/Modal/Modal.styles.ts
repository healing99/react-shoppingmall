import styled from "styled-components";

export const Wrapper = styled.div`
  .modal__bg {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    position: relative;
    background-color: #fff;
    width: 30%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;

    > p {
      font-weight: bold;
      font-size: 20px;
    }

    &__buttons {
      display: flex;
      width: 80%;
      margin-top: 40px;
      justify-content: space-between;

      button {
        font-size: 14px;
        width: 170px;
        height: 60px;
        border: 1px solid lightgray;
        cursor: pointer;
      }
    }

    &__cancel-btn {
      background-color: #fff;
    }

    &__confirm-btn {
      border: none;
      background-color: ${({ theme }) => theme.colors.main};
      color: #fff;
    }
  }
`;
