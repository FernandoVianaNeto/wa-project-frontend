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
