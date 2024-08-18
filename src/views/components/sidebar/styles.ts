import styled from 'styled-components'

export const SidebarWrapper = styled.div<{navigationState: boolean}>`
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 99999999;

    ::before {
        content: "";
        position: fixed;
        left: 0px;
        top: 0px;
        display: ${props => props.navigationState ? "block" : "none"};
        height: 100vh;
        width: 100%;
        background-color: ${props => props.navigationState ? "#0006" : "transparent"};
        transition: all 0.2s ease-in-out;

        @media screen and (min-width: 800px) {
            background-color: transparent;
            width: 240px;
        }
    }
    @media screen and (min-width: 800px) {
        display: flex;
        left: 0px;
        width: 240px;
        z-index: 999999999;
    }
`;

export const SidebarContent = styled.div<{navigationState: boolean}>`
    display:  flex;
    flex-direction: column;
    position: fixed;
    left: ${props => props.navigationState ? "0px" : "-240px"};
    top: 0px;
    width: 240px;
    height: 100vh;
    transition: all 0.2s ease-in-out;
    // background: linear-gradient(252.88deg, #DD1F6F 0.63%, #DE2669 19.17%, #DE2D62 34.09%, #E03F52 46.29%, #E15142 58.31%, #E2583C 69.15%, #E36E28 81.04%, rgba(228, 117, 34, 0.88) 95.51%);
    background: linear-gradient(252.88deg,#FFC700,#F5AC38);
    // background: #F5AC38;

    @media screen and (min-width: 880px) {
        display: flex;
        left: 0px;
        z-index: 999999999;
    }
`;

export const Head = styled.div`
    padding: 4vh 40px;
    margin-bottom: 2vh;
`;

export const HeadContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 15px;
    background-color: #0006;
    border-radius: 4px;
    height: auto;
    h4 {
        color: #fff;
        font-size: 13px;
        font-weight: 600;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    img {
        width: 30px;
        margin-right: 10px;
    }
`;
export const Title = styled.h5`
   margin-bottom: 15px;
   font-size: 12px;
//    color: #ccc;
   color: black;
   padding: 0px 10px;
   text-transform: uppercase;
`;
export const Home = styled.li`
    margin-bottom: 25px;
    a {
        display: flex;
        align-items: flex-end;
        color: #fff;
        padding: 4px 10px;
        svg {
            margin-right: 10px;
            font-size: 18px;
        }
        span {
            font-size: 13px;
            font-weight: 400;
            color: #fafafa;
        }
    }
`;
export const Content = styled.div`
    padding: 0px 20px 0px 30px;
    overflow-y: auto;

    /* ::-webkit-scrollbar {
        width: 4px;
        margin-right: 10px;
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        border-radius: 10px;
        padding: 0px 20px;
    } */

    ul {
        margin-bottom: 40px;
    }
`;

export const MenuItems = styled.li`
    margin-bottom: 6px;
    a {
        display: flex;
        align-items: flex-end;
        color: #fff;
        padding: 6px 10px;
        svg {
            margin-right: 10px;
            font-size: 18px;
        }
        span {
            font-size: 13px;
            font-weight: 400;
            color: #fafafa;
        }
    }
`;