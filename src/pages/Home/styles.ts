import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }: any) => css`
    display: flex;
    margin: 0;
    padding: 0;
    max-height: 100vh;
    max-width: 100vw;
    overflow-y: auto;
  `}
`;

export const Aside = styled.aside`
  ${({ theme }: any) => css`
    display: flex;
    position: fixed;
    flex-direction: column;
    border-color: 10px solid gray;
    background-color: blue;
    height: 100vh;
    padding: 30px;
    width: 200px;
  `}
`;

export const Section = styled.section`
  ${({ theme }: any) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin-left: 260px;
  `}
`;

export const Header = styled.header`
  ${({ theme }: any) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
    margin: 30px;

    .input-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      border: 1px solid lightgray;
      border-radius: 10px;
      padding: 2.5px;
      margin-right: 10px;
    }

    form {
      display: flex;

      button {
        background-color: transparent;
        color: black;
        border: 0;
        cursor: pointer;
      }

      div {
        .icon {
          margin: 0px 5px 0px 5px;
        }
      }
    }


    input {
      border-radius: 10px;
      height: 20px;
      padding: 5px;
      border: 0px;
      outline: none;

      &:focus {
        border: 0px solid;
      }
    }
  `}
`;

