import styled from 'styled-components';
import {
    PptelegrafRegularNormalGray11px
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    @media screen and (max-width: 600px) {
        width: 100%;
    }
    .password-container{
        margin-top: 66px;
        max-width: 542px;
        width: 100%;
        .password-body{
            .password-alarm{
                ${PptelegrafRegularNormalGray11px}
                padding-top: 5px;
            }
        }
        .password-footer{
            padding-top: 40px;
        }
    }
`;