import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;


border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

`
export const Box = styled.div`
max-width: 1366px;
gap: 64px;


display: grid;
grid-auto-columns: auto 680px auto;
grid-template-rows:116px;
grid-template-areas: 
"hh ii uu"
;

`

export const H1 = styled.div`
  grid-area: hh;
  display: flex;
  justify-content: flex-start;
  align-items: center;


    
  >h1{
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK2};
 }

`

export const Inp = styled.div`
grid-area: ii;
width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

`
export const User = styled.div`
grid-area:uu;

  display: flex;
  justify-content: flex-end;;
  gap: 9px;
  align-items: center;


  img{
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }
  h1{
    font-weight: 700;
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
  p{
    font-weight: 400;
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }
  div{
    display: flex;
    justify-items: flex-end;
    flex-direction: column;
    align-items: flex-end;
  }
`