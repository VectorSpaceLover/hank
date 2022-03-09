import styled from "styled-components";
import {
    Border1pxGraniteGray
} from '../../../../../assets/styledMixins';

export const Styles = styled.div`
    .container {
        ${Border1pxGraniteGray}
        position: relative;
        height: 220px;
        border-radius: 24px;
        cursor: pointer;
    }
    
    .image {
        display: block;
        width: 100%;
        height: 220px;
        border-radius: 24px;
        object-fit: cover;
    }

    .overlay-image{
        width: 100%;
        height: 220px;
        border-radius: 24px;
        object-fit: cover;
        position: relative;
    }
    
    .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #008CBA;
        overflow: hidden;
        width: 100%;
        height: 0px;
        border-radius: 24px;
        transition: .5s ease;
        .close-btn{
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
    
    .container:hover .overlay {
        height: 100%;
    }
`;