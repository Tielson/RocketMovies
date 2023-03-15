import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-columns: 30% 70%;
grid-column: "cc dd";
background-color: #000000;


@media (max-width: 900px) {
 grid-template-columns: 50% 50%;
}

@media (max-width:650px) {
  grid-template-columns:100%;
}
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
      color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Rampart One', cursive;
    }
    p{
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color:#ffffff;     
    }
  }

  >h2{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 48px;
  }

  @media (max-width: 1250px) {
width: 250px;
margin: auto;
header{
margin-bottom: 15px;
  h1{
    font-size: 34px;
  }
  p{
    font-size: 12px;
  } 
}
h2{
  font-size: 25px;
  margin-bottom: 20px;
}
}

`
export const BackGround = styled.div`
grid-area: "dd";
width: 100%;
height:100%;

img{
  width: 100%;
    height: 100%;
}

@media (max-width: 650px){
display: none;
grid-template-columns:100%;
}

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
    color: rgb(255 255 255);
    display: flex;
    flex-direction: column;
    margin-top: 42px;
  }

  @media (max-width: 1250px) {
button{
  width: 250px;
}

}

  
`