import styled from 'styled-components';
import {
    PptelegrafRegularUltrabold36px,
    RobotoRegularNormalPurple36px,
} from '../../assets/styledMixins';

export const Styles = styled.div`
    .myaccount-before-container{
        display: flex;
        justify-content: center;
        .myaccount-container{
            margin: 137px 0px 0px 0px;
            padding: 0px 22px 20px 22px;
            max-width: 1156px;
            width: 100%;
            .myaccount-header{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                max-width: 542px;
                margin: auto;
                .header-avatar{
                    width: 60px;
                    height: 60px;
                    border-radius: 60px;
                    background-color: var(--mist-gray);
                }
                .header-content{
                    display: flex;
                    flex-direction: row;
                    margin-left: 31px;
                    .user-name{
                        ${PptelegrafRegularUltrabold36px}
                    }
                    .profile-name{
                        ${RobotoRegularNormalPurple36px}
                    }
                }
                
            }
            .myaccount-content{
                display: flex;
                flex-direction: row;
                margin-top: 56px;
                justify-content: center;
                .active-item{
                    font-family: var(--font-family-pp_telegraf-ultrabold) !important;
                    font-weight: 800px !important;
                    text-decoration-line: underline !important;
                }

            }
            .myaccount-body{
                display: flex;
                justify-content: center;
            }
        }
    }
`;