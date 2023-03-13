import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
`
export const Section = styled.div`
    padding: 40px 41px 60px;
    max-width: 1336px;
    margin: auto;

    .created{
      display: flex;
      align-items: flex-end;
    }

  
.bc-iframe, .bc-iframe body, .bc-player-default_default, .bc-player-default_default .vjs-poster{
    background-color: black ;
}
.video {
    display: flex;
    justify-content: center;
  }
  .bc-player-default_default {
  min-width: 1000px;
  min-height: 370px;
  }

  >div{
 
  overflow: auto;
  >p{
     margin-top: 40px;
      padding-right: 10px;
      font-weight:400;
      size:16px;
      line-height:21.1px;
      text-align:justify;
   }
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
  display: flex;
    gap: 10px;
    align-items: center;
  
  >svg{
    color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK2};
    width: 15px;
    height: 13px;

}
>h1{
  color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK2};
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  
 }

  }
`
export const Title = styled.div`
width: 100%;
`
export const Creation = styled.div`
width: 100%;
margin-bottom: 20px;

`
export const Buttons = styled.div`
display: flex;
justify-content: flex-start;
gap: 8px;
margin-top: 40px;
width: 100%;

`

