import styled from 'styled-components';
import {
    PptelegrafRegularNormalBlack20px
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    position: relative;
    .password-input{
        ${PptelegrafRegularNormalBlack20px}
        width: 100%;
        outline: none;
        border-left: none;
        border-right: none;
        border-top: none;
        border-bottom: 1px solid var(--second);
        padding-bottom: 12px;
        padding-top: 40px;
        &::placeholder {
            color: var(--second);
        }
        &:focus {
            &::placeholder {
                color: var(--white);
            }
        }
    }
    .eye-icon{
        position: absolute;
        right: 0px;
        top: 41px;
    }
`;