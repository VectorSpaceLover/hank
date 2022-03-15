import styled from 'styled-components';

export const Styles = styled.div`
    .edit-profile-container{
        margin-top: 66px;
        max-width: 542px;
        width: 100%;
        .edit-header{
            display: flex;
            align-items: center;
            .edit-avatar{
                width: 89px;
                height: 89px;
                background-color: var(--mist-gray);
                border-radius: 89px;
                margin-right: 32px;
            }
        }
        .edit-body{
        }
        .edit-footer{
            padding-top: 40px;
        }
    }
`;