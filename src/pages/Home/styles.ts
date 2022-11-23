import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }: any) => css`
    display: flex;
    margin: 0;
    padding: 0;
    height: 100vh;

  `}
`;

export const Aside = styled.aside`
  ${({ theme }: any) => css`
    display: flex;
    flex-direction: column;
    border-color: 10px solid gray;
    background-color: blue;
    height: 100vh;
    flex: 1;
    padding: 30px;
    z-index: 100;
  `}
`;

export const Section = styled.section`
  ${({ theme }: any) => css`
    display: flex;
    flex-direction: column;
    flex: 6;
  `}
`;

export const Header = styled.header`
  ${({ theme }: any) => css`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    max-width: 100%;
    padding: 30px;

    .input-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 30px;
      border: 2px solid lightgray;
      border-radius: 5px;
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

