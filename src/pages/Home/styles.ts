import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }: any) => css`
    display: flex;
    margin: 0;
    padding: 0;
  `}
`;

export const Aside = styled.aside`
  ${({ theme }: any) => css`
    display: flex;
    flex-direction: column;
    background-color: lightblue;
  `}
`;

export const Section = styled.section`
  ${({ theme }: any) => css`
  `}
`;
