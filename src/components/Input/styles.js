import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;

background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
color: ${({ theme }) => theme.COLORS.GRAY_300};
border-radius: 10px;


>input{
  height: 56px;
  width: 100%;
  padding: 0 24px;
  border: none;


  color: ${({ theme }) => theme.COLORS.WHITE};
  background: transparent;

  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  svg{
    margin-left: 16px;
  }
 }
`