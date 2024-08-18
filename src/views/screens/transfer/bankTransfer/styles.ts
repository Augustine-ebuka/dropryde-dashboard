import styled from 'styled-components'

export const Content = styled.div`
    padding: 20px 15px;
`;

export const PageTitle = styled.h2`
    color: ${(props) => props.theme.primaryColor};
    font-size: 15px;
    font-weight: 700;
`;

export const StatsWrapper = styled.div`
    margin-top: 20px;
`;
export const StatsContent = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        border-radius: 6px;
        background-color: ${(props) => props.theme.primaryColor};
        padding: 20px 0px;
        overflow: hidden;
    }
`;
export const StatsCard = styled.div`
    background-color: ${(props) => props.theme.primaryColor};
    padding: 20px;
    border-radius: 6px;

    h4 {
        color: #fff;
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    h2 {
        color: #fff;
        font-size: 30px;
        font-weight: 700;
    }

    :nth-child(2) {
        margin: 20px 0px;
    }
    @media screen and (min-width: 880px) {
        background-color: unset;
        height: 180px;
        flex: 1;
        border-radius: 0px;
        h4 {
            font-size: 14px;
        }

        h2 {
            font-size: 40px;
        }
        :nth-child(2) {
            margin: 0px 0px;
            border: 0.8px solid #fff;
            border-top: none;
            border-bottom: none;
        }
    }
`;
export const ActionSection = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;

    button {
        width: 130px;
        border: none;
        height: 40px;
        text-transform: capitalize;
        background: ${props => props.theme.primaryColor};
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
    }

    @media screen and (min-width: 880px) {
        justify-content: flex-end;
    }
`;
export const FilterSection = styled.div`
    display: flex;
    margin-top: 20px;

    .input-sec {
        background-color: #fff;
        border: 1px solid rgba(145, 145, 145, 0.5);
        border-radius: 4px;
        padding: 0px 15px;
        flex: 1;
        max-width: 140px;
        overflow: hidden;
        input {
            border: none;
            background-color: #fff;
            height: 40px;
        }
    }

    select {
        padding: 10px 15px;
        max-width: 200px;
        border-radius: 4px;
        background-color: #fff;
        height: 40px;
        border: 1px solid rgba(145, 145, 145, 0.5);
        flex: 1;
        margin: 0px 20px;
    }

    button {
        width: 100px;
        border: none;
        text-transform: capitalize;
        background: ${props => props.theme.primaryColor};
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
    }
`;

export const TableWrapper = styled.div`
    background: #fff;
    margin-top: 20px;
    border: 1px solid #eee;
    border-radius: 5px;
    overflow: hidden;
    border: solid 1px rgba(0,0,0,.05);
    box-shadow: 0 0 1px rgba(0,0,0,.05);
`;

export const TableHead = styled.ul`
    display: none;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #eee;
    color: #222;
    font-size: 15px;
    font-weight: 600;
    li {
        flex: 1;
        :first-child {
            flex: 1.5;
        }
    }

    @media screen and (min-width: 880px) {
        display: flex;
        justify-content: space-around;
    }
`;

export const TableBody = styled.div`
    
`;

export const TableItems = styled.ul<{status: String}>`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 20px 13px 20px;
    border-top: 1px solid #eee;
    :first-child {
        border: none;
    }
    :nth-child(2n) {
        background-color: #fafafa;
    }
    li {
        margin-bottom: 7px;
        font-size: 14px;
        font-weight: 500;
        width: 50%;
        color: #5A5A5A;
        @media screen and (min-width: 880px) {
            flex: 1;
            flex-wrap: nowrap;
            width: unset;
        }
        :first-child {
            font-weight: 600;
            width: 100%;
            color: #444;
            margin-bottom: 16px;
            @media screen and (min-width: 880px) {
                font-weight: 500;
                flex: 1.5;
                flex-wrap: nowrap;
                width: unset;
                margin-bottom: 0px;
            }
        }
        :last-child {
            margin-right: 0px;
            color: ${props => props.status == "success" ? "#090" : props.status == "failed" ? "#D10B0B" : "#cc0"};
        }
    }
    @media screen and (min-width: 880px) {
        flex-wrap: nowrap;
        padding: 20px;
        li {
            margin-bottom: 0px;
            padding: 10px 0px;
        }
    }
`;
