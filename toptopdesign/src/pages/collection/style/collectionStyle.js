import styled from 'styled-components';
import {
    PptelegrafUltraBoldCharade40px,
    ManropeSemiBoldCharade28px,
    PptelegrafRegularNormalBlack17px,
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    .collection-container{
        margin: 147px 163px 0px 163px;
        @media screen and (max-width: 1100px) {
            margin: 120px 100px 0px 100px;
        }
        @media screen and (max-width: 1000px) {
            margin: 80px 80px 0px 80px;
        }
        @media screen and (max-width: 600px) {
            margin: 60px 40px 0px 40px;
        }
        .search-bar{
            border-bottom: 1px solid rgba(105, 105, 105, 0.2);
            padding-bottom: 23px;
            display: flex;
            flex-direction: row;
            align-items: center;
            @media screen and (max-width: 650px) {
                flex-direction: column;
            }
            .topic-txt{
                ${PptelegrafUltraBoldCharade40px}
                min-height: 42px;
                letter-spacing: 0;
                @media screen and (max-width: 650px) {
                    align-items: start;
                    width: 100%;
                }
            }
            .search-action{
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-left: auto;
                .add-collection-btn{
                    margin-left: 24px;
                }
                @media screen and (max-width: 900px) {
                    width: 255px;
                    flex-direction: column;
                }
                @media screen and (max-width: 650px) {
                    padding-top: 10px;
                    width: 100%;
                }
            }
        }
        .collection-list{
            padding-top: 32px;
        }
    }
`;

export const DialogStyles = styled.h1`
    margin: 0px;
    position: relative;
    .dialog-container{
        height: 534px;
        padding: 34px 32px 34px 32px;
        overflow: hide;
        border-radius: 24px;
        background-color: white;
        .header{
            ${ManropeSemiBoldCharade28px}
            border-bottom: 1px solid var(--granite-gray);
            min-height: 36px;
            letter-spacing: 0;
            line-height: 36px;
            white-space: nowrap;
        }
        .body{
            .label{
                ${PptelegrafRegularNormalBlack17px}
                min-height: 18px;
                letter-spacing: 0;
                padding: 24px 0px 12px 0px;
            }
        }
        .footer{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
`;
