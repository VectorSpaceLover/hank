import styled from 'styled-components';
import {
    PptelegrafUltraBoldBlack17px,
    PptelegrafRegularNormalGraniteGray1,
    Border1pxGraniteGray,
} from '../../../../../assets/styledMixins';

export const Styles = styled.div`
    .card-container{
        position: relative;
        padding: 24px 20px 19px 20px;
        box-shadow: 4px -2px 9px 8px rgb(0 0 0 / 2%);
        background-color: var(--white);
        border-radius: 16px;
        height: 336px;
        cursor: pointer;
        @media screen and (max-width: 900px) {
            height: 311px;
        }
        @media screen and (max-width: 800px) {
            height: 273px;
        }
        .card-header{
            .collection-name{
                ${PptelegrafUltraBoldBlack17px}
                margin-bottom: 13px;
                min-height: 18px;
                min-width: 141px;
                text-align: center;
                letter-spacing: 0;
                display: flex;
                justify-content: center;
                overflow: hidden;
            }
            .sub-name{
                ${PptelegrafRegularNormalGraniteGray1}
                text-align: center;
                height: 15px;
                border-radius: 100px;
                letter-spacing: 0;
                padding-bottom: 20px;
                @media screen and (max-width: 800px) {
                    margin-top: 4px;
                }
            }
        }
        .card-body{
            display: flex;
            flex-direction: column;
            .main{
                ${Border1pxGraniteGray}
                height: 155px;
                border-radius: 24px;
                width: 100%;
                margin-bottom: 7px;
                @media screen and (max-width: 900px) {
                    height: 130px;
                }
                @media screen and (max-width: 800px) {
                    height: 92px;
                }
            }
            .child{
                width: 100%;
                height: 95px;
                background-color: var(--granite-gray);
                border-radius: 24px;
            }
        }
    }
`;