import styled from "styled-components";
import {
  Border1pxPurple,
  PptelegrafRegularNormalWhite17px
} from '../../../../../assets/styledMixins';

export const Styles = styled.div`
  @media screen and (max-width: 650px) {
    width: 100%;
  }
  .btn-container {
    ${Border1pxPurple}
    margin-left: 14px;
    height: 48px;
    display: flex;
    padding: 0 17px;
    align-items: center;
    background-color: var(--main);
    border-radius: 24px;
    color: white;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 18px;
    width: 177px;
    &:hover {
      background: #bf98e7;
    }
    @media screen and (max-width: 900px) {
      width: 255px;
      margin-left: 0px;
      padding: 0px;
      margin-top: 10px;
    }
    @media screen and (max-width: 650px) {
        width: 100%;
    }
    .txt{
      ${PptelegrafRegularNormalWhite17px}
      text-align: right;
      letter-spacing: 0;
      margin-left: 13px;
    }
  }
`;
