import styled from "styled-components";

export const Container = styled.button`
width: 100%;

background-color: #b30000;
color:   #fbfbfb;;

height: 56px;
border: 0;
padding: 0 16px;
border-radius: 10px;
font-weight: 400;
font-size: 16px;

    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;

    >svg{
      width: 18px;
      height: 18px;
      color:  #fbfbfb;;
    }

  &:disabled {
  opacity: 0.5;
  }

  @media (max-width: 520px) {
padding: 0 10px;
  }
 
`