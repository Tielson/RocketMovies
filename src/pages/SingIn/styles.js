import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-columns: 50% 50%;
grid-column: "cc dd";

`
export const Section = styled.div`
width: 340px;
margin: 150px auto;
grid-area: "cc";


  header{
    gap: 5px;
    margin-bottom: 48px;
    h1{
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 63px;
      color: ${({theme})=> theme.COLORS.BACKGROUND_PINK2};
    }
    p{
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: ${({theme})=> theme.COLORS.GRAY_500};     
    }
  }

  >h2{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 48px;
  }

`
export const BackGround = styled.div`
grid-area: "dd";
background-image: url(../../../img/dd.png);
background-repeat: no-repeat;
background-size: 100% 100%;
`

export const Form = styled.div`
  div{
    margin-bottom: 8px;
    padding-left: 16px;

  }
  
  button{
    width: 340px;
    margin-top: 24px;
  }

  a{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: ${({theme}) => theme.COLORS.BACKGROUND_PINK2};
    display: flex;
    flex-direction: column;
    margin-top: 42px;
  }


  
`