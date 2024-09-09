import styled from 'styled-components'

export const MainLayoutWrapper = styled.div`
    display: flex;
    background-color: #f4f4f4;
    /* align-items: flex-start; */
    min-height: 100vh;
`;

export const Content = styled.div`
    flex: 1;
    margin-top: 70px;
    position: relative;
    z-index: 1;
    background-color: #f9f6f7;

    @media screen and (min-width: 880px) {
        margin-left: 240px;
    }
`;