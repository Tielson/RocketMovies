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
 };

@media (max-width: 1170px) {
  grid-template-rows: 55px 261px;
    grid-template-columns: 248px 175px 45vmin;
    padding: 0 10px;
    gap: 10px;
}
@media (max-width: 820px) {
  grid-template-rows: 55px 150px 45vmin;
    grid-template-columns: 250px 200px;

    grid-template-areas: 
'a b '
'p p '
'v v '
;
}

@media (max-width: 485px) {
  grid-template-rows: 55px 150px 250px;
    grid-template-columns: 250px 150px;;

    grid-template-areas: 
'a b '
'p p '
'v v '
;
}

@media (max-width: 430px) {
  grid-template-rows: 55px 55px 150px 45vmin;
    grid-template-columns: 250px;

    grid-template-areas: 
'a'
'b'
'p'
'v'
;
gap: 14px;
}
`
export const Section = styled.div`

@media (max-width: 1170px) {
    padding: 0 10px;
}

display: flex;
    max-width: 1113px;
    margin: 14px auto;
    flex-direction: column;

.video{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    grid-area: v;
    align-items: flex-start;
    
    
.ReactPlayer{
  border-radius: 10px;
  width: 50vmin;
  height:40vmin
}


    .bc-player-default_default {
      width: 50vmin;
    height: 40vmin;
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

@media (max-width: 1170px) {
  .bc-player-default_default {
      width: 40vmin;
    height: 35vmin;
  }
  .ReactPlayer{
    iframe{
      width: 100vmin;
    height: 50vmin;
    }
  border-radius: 10px;
}
}
@media (max-width: 910px) {
  .r{
    width: 40vmin;
    height: 40vmin;
  }
  .ReactPlayer{
    iframe{
      width: 40vmin;
    height: 40vmin;
    }
  border-radius: 10px;
}
}
@media (max-width: 820px) {
  .bc-player-default_default {
    width: 60vmin;
    height: 30vmin;
  }

  .r{
    width: 70vmin;
    height: 40vmin;
  }
  iframe{
    width: 60vmin;
  height: 40vmin;
  }
}
  
}

@media (max-width: 650px) {
  .bc-player-default_default {
    width: 60vmin;
    height: 40vmin;
  }

  .r{
    width: 80vmin;
    height: 40vmin;
  }
  iframe{
    width: 80vmin;
  height: 40vmin;
  }
}

    p{
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-bottom: 24px;
  
}

.p{
    grid-area: p;
    overflow-y: auto;
    box-shadow: 0px 0px 7px 3px #414a4a6b;
    margin-bottom: 10px;
  p{
    color: #796959;

  }
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
border-radius: 8px;
display: flex;
flex-direction: row;
align-items: center;
padding-left: 16px;
flex-wrap: wrap;
gap: 24px;

`
export const Buttons = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 32px;
width: 100%;
`