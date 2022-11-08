import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;


`

export const InputC = styled.div`
width: 100%;
display: grid;
gap: 40px;
grid-template-rows: 55px 55px 274px;
grid-template-columns: 536.5px 536.5px;
 >Textarea{
  width: 1113px;
 }
;

`

export const Section = styled.div`
    
    max-width: 1113px;
    margin:40px auto;
    >p{
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-bottom: 24px;
}

  >h1{
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    margin-bottom: 40px;
   }
  

  
  .section::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  
  
  .section::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK2};
    
    border-radius: 1.2rem;
    -webkit-border-radius: 1.2rem;
    -moz-border-radius: 1.2rem;
    overflow: auto;
    
  }
  
  .section::-webkit-scrollbar-corner {
    
    height: 8px;
  }
  
  `

export const Arrow = styled.div`
width: 100%;
display: flex;
gap: 8px;
align-items: center;
margin-bottom: 24px;
color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK2};
>a{
  
  >svg{
    color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK2};
      margin-left: 144px;
      width: 15px;
      height: 13px;

}

  }
>h1{
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
 }
`
export const Bookmarks = styled.div`
width: 100%;
height: 88px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
border-radius: 8px;
display: flex;
flex-direction: row;
align-items: center;
padding-left: 16px;

gap: 24px;

`
export const Buttons = styled.div`
display: flex;
width: 100%;
gap: 8px;
align-items: center;
margin-top: 40px;
justify-content: space-between;
width: 100%;

`


