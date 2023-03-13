import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
`
export const Header = styled.div`
width: 100%;
height: 144px;


background: #b30000;
    border-bottom: 1px solid #ff0506;

display: flex;

align-items: center;
>button{
  background: none;
  border: none;
  margin-left: 144px;
  display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
  >svg{
    color: rgb(255 250 250);
    
      }   
  >h1{
    color:rgb(255 250 250);
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  
   }
}


`
export const Avatar = styled.div`
  width: 186px;
  position: relative;
  >img{
    width: 186px;
    height: 186px;
  border-radius: 50%;
  border: 1px solid #000000;
}
>label{
  width: 48px;
  height: 48px;
  border: 1px solid rgb(59 22 29);
    background-color: rgb(255 255 255 / 59%);
  border-radius: 50%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  left: 133px;
  position: relative;
    bottom: 56px;

  input{
    display: none;
  }
  svg{
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    margin-left: 0px;
  }

}

`
export const Form = styled.div`
width: 340px;
margin: -100px auto 0;
padding: 18px 12px;

display: flex;
flex-direction: column;
align-items: center;

  svg{
    margin-left: 12px;
  }
  >div{
    margin-bottom: 8px;
  }
  >div:nth-child(3){
    margin-bottom: 24px;
  }

  >button{
    margin-top: 24px;
    width: 100%;
    border: none;
    background-color: rgb(164 0 0);

  }


`