import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;

.inputButton{
  display: none;
}

  >main{
    padding: 40px 41px 60px;
    max-width: 1336px;
    margin: auto;
   
   
   
    .content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 38px;

      button{
      width:207px;
      height:48px;
      }
    }

    .note{
      height: 600px;
      overflow-y: auto;
    }
}

.note::-webkit-scrollbar {
  width: 8px;
  height: 4px;
}


.note::-webkit-scrollbar-thumb {
  background-color: rgb(175 2 2);
  
  border-radius: 1.2rem;
  -webkit-border-radius: 1.2rem;
  -moz-border-radius: 1.2rem;
  overflow: auto;

}

.note::-webkit-scrollbar-corner {
  
  height: 4px;
}


@media (max-width: 570px) {
  .inputButton{
    .hh.hidden{
 display: none;
}

    display: flex;

     .cc{
      position: absolute;
    width: 40px;
    height: 40px;
    right: 20px;
    padding: 12px;
    border-radius: 50%;

  svg{
  }
}

    >div{
    position: absolute;
    right: 77px;
    top: 45px;

    input{
    width: 250px;
    height: 30px;
    background-color: #ffffff3b;
    border: none;
    border-radius: 5px;
    padding: 10px;
       }
    }

  }
  .notes{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .content{
    display: flex;
    overflow-y: auto;
    flex-direction: column-reverse;
    margin: 80px 0 40px;
    gap: 15px
}
  button{
gap: 1;
width: auto;
justify-content: center;
}
  .ii{
display: none;
}
}


`