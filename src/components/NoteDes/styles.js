import styled from "styled-components";


export const Container = styled.div`
width: 100%; 
>footer{
    width: 100%;
    display: flex;
    margin-top: 15px;
    background-color: ${({  theme ,gray500 }) => gray500 ? theme.COLORS.GRAY_500 : "theme.COLORS.BACKGROUND_700"};

  }

    
  @media (max-width: 760px) {
display: none;
}
`



