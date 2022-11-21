import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }: any) => css`
    display: flex;
    width: 100vw;
    height: 100vh;
  `}
`;
