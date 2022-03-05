import styled from "styled-components";

export const Styles = styled.div`
  .search-button {
    color: white;
    position: absolute;
    right: -5px;
    top: 1px;
    background: #1a1a1c;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 112px;
    height: 56px;
    border-radius: 63px;
    &:hover {
      color: black;
      background: #c5c5ca;
    }
  }
`;
