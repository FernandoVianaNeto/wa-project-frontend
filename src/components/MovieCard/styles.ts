import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }: any) => css`
    display: flex;
    flex-direction: column;


    img {
      width: 30px;

    }
  `}
`;

export const Footer = styled.footer`
  ${({ theme }: any) => css`
    display: flex;
  `}
`;
