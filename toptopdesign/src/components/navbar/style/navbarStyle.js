import styled from 'styled-components';
import {
  Border1pxSecond,
  PptelegrafRegularNormalBlack13px,
  ValignTextMiddle,
  PptelegrafRegularNormalBlack14px,
  PptelegrafRegularNormalGraniteGray1
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    .navbar{
        min-height: 86px;
        background-color: var(--white);
        border-bottom: 1px solid var(--second);
        position: relative;
        .flex-row{
            padding: 31px 165px 0px 165px;
            margin-left: 6px;
            display: flex;
            @media screen and (max-width: 1200px) {
                padding: 31px 100px 0px 100px;
            }
            @media screen and (max-width: 1000px) {
                padding: 31px 60px 0px 60px;
            }
            @media screen and (max-width: 900px) {
                padding: 31px 30px 0px 30px;
            }
            @media screen and (max-width: 800px) {
                padding: 31px 10px 0px 10px;
            }
            .overlap-group{
                display: flex;
                height: 37px;
                .item-group{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    @media screen and (max-width: 768px) {
                        display: none;
                    }
                    .item{
                        min-height: 15px;
                        min-width: 36px;
                        letter-spacing: 0;
                        &:hover {
                            color: #867d7d;
                        }
                    }
                    .item-ml{
                        margin-left: 58px;
                    }
                }
                .menu-icon {
                    display: none;
                    cursor: pointer;
                    @media screen and (max-width: 768px) {
                      display: block;
                    }
                }
                .title-img{
                    position: absolute;
                    width: 85px;
                    height: 37px;
                    top: 27px;
                    left: calc((100vw - 85px)/2);
                }
            }
            .small-btn-outline{
                ${Border1pxSecond}
                ${PptelegrafRegularNormalBlack13px}
                height: 32px;
                margin-left: auto;
                margin-bottom: 0.78px;
                display: flex;
                padding: 0 15.5px;
                justify-content: flex-end;
                align-items: center;
                border-radius: 64px;
                &:hover {
                    color: #ffffff;
                    background: #000000;
                }
                .sign-in-btn{
                    ${ValignTextMiddle}
                    height: 22px;
                    min-width: 58px;
                    text-align: center;
                    letter-spacing: 1.04px;
                    line-height: 22.5px;
                    white-space: nowrap;
                }
                .sign-in-arrow{
                    width: 13px;
                    height: 8px;
                    margin-left: 8px;
                    margin-top: 0;
                }
            }
            .icon-group{
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-left: auto;
                .icon{
                    width: 18px;
                    height: 21px;
                }
                .alarm{
                    margin-bottom: 1.19px;
                }
                .gift{
                    margin-left: 39px;
                    margin-bottom: 2.02px;
                }
            }
        }
    }
`;