import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;


border-bottom-width: 1px;
border-bottom-style: solid;
background: #b30000;

border-bottom: 1px solid #fff7f7;

@media (max-width: 570px) {
  
  display: none;
  button{
    width: 150px;
  }

  }

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

@media (max-width: 1150px) {
  grid-auto-columns: auto 500px auto;
  gap: 55px;
}
@media (max-width: 955px) {
  grid-auto-columns: auto 300px auto;
}
@media (max-width: 760px) {
  grid-auto-columns: auto 200px auto;
  gap: 30px;
}

`

export const H1 = styled.div`
  grid-area: hh;
  display: flex;
  justify-content: flex-start;
  align-items: center;


    
  >h1{
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Rampart One', cursive;
 }

 @media (max-width: 760px) {
  h1{
    font-size: 20px;
  }
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
    border: 1px solid #15101054;
  }
  h1{
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  button{
    background: none;
    border: none;
    color: white;
  }
  div{
    display: flex;
    justify-items: flex-end;
    flex-direction: column;
    align-items: flex-end;
  }


`