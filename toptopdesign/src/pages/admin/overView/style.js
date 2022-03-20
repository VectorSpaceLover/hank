import styled from "styled-components";
import {
    ManropeNormalCharade36px,
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    position: relative;
    padding: 32px;
    .header{
        display: flex;
        .sort{
            padding: 26px 32px;
        }
        .welcom{
            ${ManropeNormalCharade36px}
            position: absolute;
            top: 0px;
            left: 32px;
        }
    }
    .banner{
        display: flex;
        
    }
    
`;