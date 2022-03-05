import styled from 'styled-components';


export const Styles = styled.div`
    .item-gallery{
        border-bottom: 1px solid black;
        border-top: 1px solid black;
        min-height: 66px;
        .item-group{
            padding-top: 1.6%;
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: var(--white);
            .item{
                min-height: 15px;
                min-width: 36px;
                letter-spacing: 0;
                &:hover {
                    color: #867d7d;
                }
            }
        }
    }
    
`;