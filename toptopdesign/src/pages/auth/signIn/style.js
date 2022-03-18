import styled from 'styled-components';
import { PptelegrafRegularNormalBlack14px, PptelegrafRegularNormalBlack12px } from '../../../assets/styledMixins';
export const Styles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .sign-in-container{
        position: relative;
        border-radius: 24px;
        box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
        .mobile-cover{
            @media screen and (max-width: 650px) {
                height: 669px !important;
            }
        }
        .out-body{
            width: 866px;
            height: 748px;
            box-sizing: border-box;
            padding: 78px 74px 102px 74px;
            @media screen and (max-width: 800px) {
                width: 673px;
                height: 692px;
                padding: 90px 32px 34px 32px;
            }
            @media screen and (max-width: 600px) {
                width: 328px;
                height: 596px;
                padding: 59px 20px 20px 20px;
            }
            .inside-body{
                width: 100%;
                height: 100%;
                border: 1px solid var(--gray-nurse);
                border-radius: 24px;
                .btn-group{
                    display: flex;

                }
                .main{
                    position: relative;
                    padding: 65px 95px 0px 95px;
                    .mt-55{
                        padding-top: 0px;
                        @media screen and (max-width: 650px) {
                            padding-top: 59px;
                        }
                    }
                    .social-group{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .icon{
                            margin-right: 8px;
                        }
                        .ml-16{
                            margin-left: 16px;
                            @media screen and (max-width: 650px) {
                                margin-left: 0px;
                            }
                        }
                        @media screen and (max-width: 600px) {
                            flex-direction: column;
                        }
                    }
                    @media screen and (max-width: 600px) {
                        padding: 13px 16px 0px 16px;
                    }
                    .input-group{
                        
                    }
                    .alert-not-exist{
                        position: absolute;
                        top: 19px;
                        left: calc((100% - 572px) / 2);
                        .not-exist{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            ${PptelegrafRegularNormalBlack12px}
                            width: 572px;
                            height: 23px;
                            background-color: #FF7373;
                            border-radius: 100px;
                            @media screen and (max-width: 600px) {
                                padding: 5px;
                                width: 256px;
                                height: 40px;
                            }
                        }
                        @media screen and (max-width: 600px) {
                            top: 16px;
                            left: calc((100% - 256px) / 2);
                        }
                    }
                    .alert-not-match{
                        position: absolute;
                        top: 19px;
                        left: calc((100% - 425px) / 2);
                        .not-match{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            ${PptelegrafRegularNormalBlack12px}
                            width: 425px;
                            height: 23px;
                            background-color: #FF7373;
                            border-radius: 100px;
                            @media screen and (max-width: 600px) {
                                width: 256px;
                                height: 23px;
                            }
                        }
                        @media screen and (max-width: 600px) {
                            top: 16px;
                            left: calc((100% - 256px) / 2);
                        }
                    }
                }
                .alarm{
                    padding-top: 12px;
                    text-align: center;
                    ${PptelegrafRegularNormalBlack14px}
                    @media screen and (max-width: 600px) {
                        margin-top: 16px;
                    }
                }
            }
        }
    }
    .close-btn{
        position: absolute;
        top: 13px;
        left: 13px;
        .icon{
            width: 24px;
            height: 24px;
            @media screen and (max-width: 600px) {
                width: 15px;
                height: 15px;
            }
        }
    }
`;