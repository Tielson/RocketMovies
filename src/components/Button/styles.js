import styled from "styled-components";

export const Container = styled.button`
width: 100%;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK2};
color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

height: 56px;
border: 0;
padding: 0 16px;
border-radius: 10px;
font-weight: 400;
font-size: 16px;

    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;

    >svg{
      width: 16px;
      height: 16px;
      color: ${({theme}) => theme.COLORS.BACKGROUND_PLUS};
    }

  &:disabled {
  opacity: 0.5;
  }
 
`