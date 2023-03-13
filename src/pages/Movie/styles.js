import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 100vh;



`
export const InputC = styled.div`
width: 100%;
display: grid;
gap: 40px;
grid-template-rows: 55px auto;
grid-template-columns: 350px 175px 500px;

grid-template-areas: 
'a b v'
'p p v'

;
 >Textarea{
  width: 1113px;
 }
;

`
export const Section = styled.div`

display: flex;
    max-width: 1113px;
    margin: 14px auto;
    flex-direction: column;

.video{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    grid-area: v;
    align-items: flex-start;
    
    
.ReactPlayer{
  border-radius: 10px;
}


    .bc-player-default_default {
  min-width: 50vmin;
  min-height: 40vmin;
  border-radius: 5px;
  }

  .bc-iframe, .bc-iframe body, .bc-player-default_default, .bc-player-default_default .vjs-poster {
    background-color: black;
}

.vjs-poster{
  background-position: 50% 50%;
}

.video-js .vjs-tech {
    width: 50vmin;
    height: 40vmin;
}
}
    
    max-width: 1113px;
    margin:14px auto;
    p{
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-bottom: 24px;
  grid-area: p;
}

  >h1{
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    margin-bottom: 8px;
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
  align-items: center;
  
  >svg{
    color: rgb(255 255 255);
      width: 15px;
      height: 13px;
}
h1{
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: rgb(255 255 255);
 }

  }

`
export const Bookmarks = styled.div`
width: 100%;
min-height: 88px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
border-radius: 8px;
display: flex;
flex-direction: row;
align-items: center;
padding-left: 16px;
overflow-y: auto;

gap: 24px;

`
export const Buttons = styled.div`
display: flex;
justify-content: flex-end;
gap: 8px;
margin-top: 40px;
width: 100%;


`


