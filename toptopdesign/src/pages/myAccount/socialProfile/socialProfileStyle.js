import styled from 'styled-components';
import {
    PptelegrafUltraBoldCharade28px,
    PptelegrafRegularNormalBlack20px
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    @media screen and (max-width: 600px) {
        width: 100%;
    }
    .edit-profile-container{
        margin-top: 66px;
        max-width: 542px;
        width: 100%;
        .edit-header{
            display: flex;
            align-items: center;
            .edit-avatar{
                width: 89px;
                height: 89px;
                background-color: var(--mist-gray);
                border-radius: 89px;
                margin-right: 32px;
            }
        }
        .edit-body{
            .social-login{
                display: flex;
                align-items: center;
                justify-content: center;
                @media screen and (max-width: 600px) {
                    flex-direction: column;
                }
            }
        }
        .edit-footer{
            padding-top: 40px;
        }
    }
`;


export const ViewCollectionDlgStyle = styled.div`
    margin: 0px;
    position: relative;
    .dialog-container{
        height: 622px;
        width: 718px;
        padding: 70px 75px 70px 73px;
        overflow-x: hide;
        overflow-y: auto;
        border-radius: 24px;
        background-color: white;
        @media screen and (max-width: 900px) {
            width: 609px;
        }
        @media screen and (max-width: 800px) {
            width: 560px;
        }
        @media screen and (max-width: 600px) {
            width: 350px;
        }
        @media screen and (max-width: 700px) {
            width: 306px;
            height: 598px;
            padding: 20px 12px;
        }
        .content{
            width: 100%;
            height: 100%;
            border: 1px solid var(--mist-gray);
            border-radius: 24px;
            .header{
                ${PptelegrafUltraBoldCharade28px}
                padding-top: 67px;
                min-height: 36px;
                min-width: 243px;
                text-align: center;
                letter-spacing: 0;
                line-height: 36px;
                white-space: nowrap;
            }
            .second-header{
                ${PptelegrafUltraBoldCharade28px}
                padding-top: 32px;
                min-height: 36px;
                min-width: 243px;
                text-align: center;
                letter-spacing: 0;
                line-height: 36px;
                white-space: nowrap;
            }
            .body{
                display: flex;
                flex-direction: column;
                align-items: center;
                .des-txt{
                    ${PptelegrafRegularNormalBlack20px}
                    min-height: 87px;
                    text-align: center;
                    letter-spacing: 0;
                    line-height: 29px;
                    padding: 24px 64px 0px 64px;
                    @media screen and (max-width: 700px) {
                        width: 297px;
                    }
                }
                .pt-28{
                    padding-top: 28px;
                }
                .picture{
                    width: 215px;
                    height: 265px;
                    margin-bottom: 32px;
                }
            }
            .footer{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
    }
`;