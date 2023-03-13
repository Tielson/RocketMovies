import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;

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


`