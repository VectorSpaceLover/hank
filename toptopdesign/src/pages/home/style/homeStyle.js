import styled from 'styled-components';
import {
    PptelegrafUltraBoldBlack48px,
    PptelegrafRegularNormalBlueRibbon14,
    PptelegrafRegularNormalBlack14px,
    PptelegrafUltraBoldBlack14px,
    PptelegrafUltraBoldBlack40px
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    .home-container{
        padding: 137px 163px 0px 163px;
        @media screen and (max-width: 1200px) {
            padding: 130px 140px 0px 140px;
        }
        @media screen and (max-width: 1000px) {
            padding: 130px 100px 0px 100px;
        }
        @media screen and (max-width: 800px) {
            padding: 130px 60px 0px 60px;
        }
        @media screen and (max-width: 600px) {
            padding: 130px 20px 0px 20px;
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
        .all-apps{
            margin-bottom: 114px;
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
`;