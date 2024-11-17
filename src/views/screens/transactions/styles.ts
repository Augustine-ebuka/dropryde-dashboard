import styled from 'styled-components';

export const Content = styled.div`
    padding: 20px 15px;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content:left;
    margin-top: 20px;
    flex-wrap: wrap;
    gap: 30px
`;

export const PageHeader = styled.div`
    h2 {
        color: ${(props) => props.theme.primaryColor};
        font-size: 15px;
        font-weight: 700;
    }
`;

export const BalanceCard = styled.div`
    display: block;
    max-width: 500px;
    min-width: 400px;
    background-color: #141414;
    position: relative;
    border-radius: 8px;
    margin-top: 20px;
    overflow: hidden;

    ::after {
        content: "";
        display: block;
        position: absolute;
        width: 200px;
        height: 200px;
        background-color: #FFC700;
        mix-blend-mode: overlay;
        border-radius: 100px;
        z-index: 3;
        top: -100px;
        left: 0px;
    }
    ::before {
        content: "";
        display: block;
        position: absolute;
        width: 200px;
        height: 200px;
        border-radius: 100px;
        background-color: #F5AC38;
        mix-blend-mode: overlay;
        z-index: 3;
        bottom: 0px;
        left: -100px;
    }
`;

export const BalanceCardContent = styled.div`
    position: relative;
    z-index: 9;
    padding: 20px;
    display: flex;
    flex-direction: column;

    h4 {
        color: #fff;
        font-size: 12px;
        margin-bottom: 40px;
    }
    h2 {
        color: #F5AC38;
    }
`;

export const TableWrapper = styled.div`
    background: #fff;
    margin-top: 20px;
    border: 1px solid #eee;
    border-radius: 5px;
    overflow: auto;
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
     text-align: center;
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

export const TableBody = styled.div``;

export const TableItems = styled.ul<{ status: string }>`
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
        font-size: 12px;
        font-weight: 400;
        width: 50%;
        color: #5A5A5A;
         text-align: center;
        @media screen and (min-width: 880px) {
            flex: 1;
            font-size: 14px;
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
              :nth-child(2) {
           margin-left: 20px;
        }
        :last-child {
            margin-right: 0px;
            font-size: 10px;
            color: ${(props) => (props.status === 'success' ? '#090' : props.status === 'failed' ? '#D10B0B' : '#cc0')};
            @media screen and (min-width: 880px) {
                font-size: 13px;
            }
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

// New styles

export const PaginationControls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 0 10px;

    button {
        padding: 8px 12px;
        background-color: ${(props) => props.theme.primaryColor};
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
    }

    span {
        font-size: 14px;
        color: #444;
    }

    select {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
`;

export const FilterSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 10px 0;

    div {
        display: flex;
        align-items: center;

        label {
            margin-right: 10px;
            font-size: 14px;
            color: #444;
        }

        input {
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-right: 10px;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;

        div {
            margin-top: 10px;
        }
    }
`;

export const SearchInput = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 250px;
    }
`;
