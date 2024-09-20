import styled from 'styled-components'

export const Content = styled.div`
    padding: 20px 15px;
`;

export const ContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

export const PageTitle = styled.h2`
    color: ${(props) => props.theme.primaryColor};
    font-size: 15px;
    font-weight: 700;
`;


export const Form = styled.div`
    flex: 1;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 20px -5px #eee;
    border-radius: 4px;
    margin: 0px 0px 15px 0px;

    @media screen and (min-width: 880px) {
        margin: 0px 15px 15px 0px;
    }
`;
export const FormContent = styled.div`
    .img-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px auto;
        width: 130px;
        height: 130px;
        font-size: 30px;
        background-color: #FFEDDF;
        border-radius: 50%;
        color: ${props => props.theme.primaryColor};
    }

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
`;
export const InputSection = styled.div`
    margin-top: 20px;

    @media screen and (min-width: 880px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .input-col {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        label {
            font-size: 12px;
            font-weight: 500;
            color: #909090;
            margin-bottom: 10px;
        }
        input {
            height: 45px;
            padding: 0px 15px;
            border-radius: 4px;
            font-size: 13px;
            color: #141414;
            border: 1px solid rgba(145, 145, 145, 0.2);

            ::placeholder {
                color: #acacac;
            }
        }

        @media screen and (min-width: 880px) {
            width: calc(50% - 10px);
        }
    }
`;

export const SecuritySection = styled.div`
    display: flex;
    flex-direction: column;

    .security-card {
        background-color: #fff;
        padding: 20px;
        box-shadow: 0px 0px 20px -5px #eee;
        border-radius: 4px;
        margin-bottom: 15px;

        h2 {
            color: #1C1115;
            font-size: 20px;
            font-weight: 600;
        }
        p {
            margin: 20px 0px;
            font-size: 12px;
            line-height: 21px;
            font-weight: 300;
            color: #5A5A5A;
        }
    }

    button {
        width: 100%;
        border: none;
        height: 48px;
        text-transform: capitalize;
        background: ${props => props.theme.primaryColor};
        border-radius: 4px;
        font-weight: 500;
        color: #fff;
        cursor: pointer;
    }

    @media screen and (min-width: 880px) {
        max-width: 480px;
    }

    
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;

  h2 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .input-col {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
     input {
            height: 45px;
            padding: 0px 15px;
            border-radius: 4px;
            font-size: 13px;
            color: #141414;
            border: 1px solid rgba(145, 145, 145, 0.2);

            ::placeholder {
                color: #acacac;
            }
        }
            button {
        border: none;
        height: 48px;
        text-transform: capitalize;
        background: ${props => props.theme.primaryColor};
        border-radius: 4px;
        font-weight: 500;
        color: #fff;
        cursor: pointer;
        margin:10px;
        padding: 0px 15px;
    }
`;