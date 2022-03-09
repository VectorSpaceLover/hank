import styled from "styled-components";


export const Styles = styled.div`
    .image-container{
        position: relative;
        height: 473px;
        padding: 10px;
        box-shadow: 4px -2px 9px 8px rgb(0 0 0 / 2%);
        background-color: var(--white);
        border-radius: 16px;
        @media screen and (max-width: 892px) {
            height: 616px;
        }
        @media screen and (max-width: 600px) {
            height: 296px;
        }
        .favourite{
            position: absolute;
            top: 33px;
            right: 18px;
        }
        .image-viewer{
            padding: 50px 20px 20px 20px;
            width: 80%;
            height: 80%;
            object-fit: cover;
        }
    }
`;