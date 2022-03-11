import styled from "styled-components";

export const Styles = styled.div`
  .search-button {
    color: white;
    position: absolute;
    right: -2px;
    top: 1px;
    background: #1a1a1c;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 112px;
    height: 53px;
    border-radius: 63px;
    &:hover {
      color: white;
      background: rgb(51, 51, 51);
    }
  }
`;
