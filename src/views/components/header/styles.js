import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    display: block;
    position: fixed;
    width: 100%;
    top: 0px;
    right: 0px;
    height: 70px;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(196, 196, 196, 0.4);
    z-index: 9999;

    @media screen and (min-width: 880px) {
        width: calc(100% - 240px);
    }
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    height: 100%;

    .toggle-menu {
        display: block;
        font-size: 20px;
        cursor: pointer;
    }

    @media screen and (min-width: 880px) {
        /* justify-content: flex-end; */
        padding: 0px 2%;
        .toggle-menu {
            display: none;
        }
    }
`;
export const Title = styled.h5`
    font-size: 13px;
    font-weight: 700;
    color: #222;

    img {
        width: 120px;
    }
    @media screen and (min-width: 880px) {
        font-size: 13px;
    }
`;
export const HeadMeta = styled.div`
    display: flex;
    align-items: center;
    .notify-sec {
        font-size: 25px;
        color: #909090;
        margin: 0px 15px 0px 0px;
    }
    .profile-sec {
        font-size: 22px;
        color: #909090;
    }
`;