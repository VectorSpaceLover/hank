import styled from 'styled-components';

export const Styles = styled.div`
    .edit-profile-container{
        margin-top: 66px;
        max-width: 542px;
        width: 100%;
        @media screen and (max-width: 600px) {
            margin-top: 40px;
        }
        .edit-header{
            display: flex;
            align-items: center;
            .upload-button{
                border: 1px solid var(--second)';
                color: var(--second);
                font-family: var(--font-family-open_sans);
                font-size: var(--font-size-17);
                font-weight: 600px;
                font-style: normal;
                height: 36px;
                width: 202px;
                margin-bottom: 0.78px;
                display: flex;
                padding: 0px 15.5px;
                justify-content: center;
                align-items: center;
                border-radius: 64px;
                cursor: pointer;
                
                @media screen and (max-width: 650px) {
                    width: 150px;
                    font-size: var(--font-size-16);
                },
            
                textTransform: none;
                transition: .3s ease;
                &:hover: {
                    color: var(--white);
                    background-color: var(--second);
                }
            }
            .edit-avatar{
                object-cover: fit;
                width: 89px;
                height: 89px;
                background-color: var(--mist-gray);
                border-radius: 89px;
                margin-right: 32px;
                @media screen and (max-width: 800px) {
                    min-width: 60px;
                    min-height: 60px;
                }
                @media screen and (max-width: 600px) {
                    width: 45px;
                    height: 45px;
                }
                .avatar-size{
                    width: 89px;
                    height: 89px;
                    border-radius: 89px;
                    @media screen and (max-width: 800px) {
                        min-width: 60px;
                        min-height: 60px;
                        border-radius: 60px;
                    }
                    @media screen and (max-width: 600px) {
                        width: 45px;
                        height: 45px;
                        border-radius: 45px;
                    }
                }
            }
        }
        .edit-body{
        }
        .edit-footer{
            padding-top: 40px;
        }
    }
`;