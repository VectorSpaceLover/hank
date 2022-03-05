import styled from 'styled-components';
import {
    PptelegrafUltraBoldBlack20px,
    PptelegrafRegularNormalWhite10px,
    ValignTextMiddle
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    .app-card{
        position: relative;
        padding: 10px;
        box-shadow: 4px -2px 9px 8px rgb(0 0 0 / 2%);
        background-color: var(--white);
        border-radius: 16px;
        .card-header{
            .circle{
                position: absolute;
                left: 32px;
                top: 32px;
                width: 45px;
                height: 45px;
                // @media screen and (max-width: 600px) {
                //     left: 20px;
                //     width: 30px;
                //     height: 30px;
                // }
                background-color: var(--mist-gray);
                border-radius: 22.5px;
            }
            .card-body{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 34px;
                .app-name{
                    display: inline-block;
                    ${PptelegrafUltraBoldBlack20px}
                    min-height: 21px;
                    letter-spacing: 0;
                }
                .sub-name{
                    ${ValignTextMiddle}
                    ${PptelegrafRegularNormalWhite10px}
                    text-align: center;
                    letter-spacing: 0.8px;
                    line-height: 10.5px;
                    white-space: nowrap;
                    height: 24px;
                    margin-top: 8px;
                    margin-bottom: 53px;
                    display: flex;
                    align-items: center;
                    min-width: 140px;
                    background-color: var(--second);
                    border-radius: 100px;
                }
            }
        }
    }
`;