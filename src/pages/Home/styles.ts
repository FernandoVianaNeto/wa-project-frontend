import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }: any) => css`
    display: flex;
    width: 100vw;
    height: 100vh;
  `}
`;

export const Aside = styled.aside`
  ${({ theme }: any) => css`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    /* @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      align-items: center;
    } */
  `}
`;

export const Section = styled.section`
  ${({ theme }: any) => css`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    /* @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      align-items: center;
    } */
  `}
`;
