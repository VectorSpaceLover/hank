import styled from 'styled-components';
import {
    PptelegrafUltraBoldBlack48px,
    PptelegrafRegularNormalBlueRibbon14,
    PptelegrafRegularNormalBlack14px,
    PptelegrafUltraBoldBlack14px,
    PptelegrafUltraBoldBlack40px
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    .before-container {
        display: flex;
        justify-content: center;
        .home-container{
            margin: 137px 0px 0px 0px;
            padding: 0px 22px 20px 22px;
            max-width: 1156px;
            @media screen and (max-width: 1200px) {
                margin: 130px 140px 0px 140px;
            }
            @media screen and (max-width: 1000px) {
                margin: 130px 100px 0px 100px;
            }
            @media screen and (max-width: 800px) {
                margin: 130px 60px 0px 60px;
            }
            @media screen and (max-width: 600px) {
                margin: 130px 20px 0px 20px;
                padding: 0px;
            }
            .xs-hide{
                display: block;
                @media screen and (max-width: 620px) {
                    display: none;
                }
            }
            .topic-txt{
                ${PptelegrafUltraBoldBlack48px}
                min-height: 106px;
                letter-spacing: 0;
                line-height: 53px;
                padding-bottom: 44px;
            }
            .des-group{
                width: 254px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                min-height: 94px;
                margin-left: auto;
                .des-item{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-left: auto;
                    .des-img{
                        width: 54px;
                        height: 54px;
                        object-fit: cover;
                    }
                    .des-txt{
                        ${PptelegrafRegularNormalBlack14px}
                        min-height: 15px;
                        letter-spacing: 0;
                    }
                    .des-color-txt{
                        ${PptelegrafRegularNormalBlueRibbon14}
                        min-height: 15px;
                        letter-spacing: 0;
                    }
                }
            }
            .center-container{
                text-align: center;
                .view-full{
                    ${PptelegrafUltraBoldBlack14px}
                    min-height: 15px;
                    display: inline-block;
                    letter-spacing: 0;
                    text-decoration: underline;
                    padding-top: 11px;
                    &:hover {
                        color: #9b9595;
                    }
                }
                .pattern-container{
                    margin-top: 20px;
                    overflow-y: auto;
                    height: 196px;
                    box-shadow: 4px -2px 9px 8px rgb(0 0 0 / 2%);
                    background-color: var(--white);
                    border-radius: 16px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    flex-wrap: wrap;
                    padding: 0px 35px 10px 35px;
                    @media screen and (max-width: 800px) {
                        padding: 10px 35px 20px 35px;
                    }
                    @media screen and (max-width: 600px) {
                        padding: 10px 35px 20px 35px;
                    }
                    .pattern-item{
                        width: 140px;
                        display: flex;
                        justify-content: start;
                    }
                }
            }
            .center-mode{
                display: flex;
                flex-direction: row;
                justify-content: center;
                .more-button{
                    
                }
            }
            .all-patterns{
                margin-top: 59px;
            }
            .all-searched-app{
                margin-bottom: 64px;
            }
            .keyword-container{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                margin-top: 66px;
                margin-bottom: 44px;
                .search-keyword{
                    ${PptelegrafUltraBoldBlack40px}
                    min-height: 42px;
                    margin-left: 10px;
                    letter-spacing: 0;
                    display: inline-block;
                }
            }
        }
    }
    .all-app-container{
        margin: 0px 29px 0px 186px;
        @media screen and (max-width: 1200px) {
            margin: 0px 20px 114px 140px;
        }
        @media screen and (max-width: 1000px) {
            margin: 0px 20px 114px 100px;
        }
        @media screen and (max-width: 800px) {
            margin: 0px 20px 114px 60px;
        }
        @media screen and (max-width: 600px) {
            margin: 0px 20px 114px 20px;
        }
    }
`;