import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;

background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
color: ${({ theme }) => theme.COLORS.GRAY_300};
border-radius: 10px;
font-family: 'Montserrat', sans-serif;


>input{
  height: 56px;
  width: 100%;
  padding: 0 24px;
  border: none;
  display: ${({ isActive }) => isActive ?'none'  :  'block'};
  border-radius: 10px;


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