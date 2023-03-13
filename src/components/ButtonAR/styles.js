import styled from "styled-components";


export const Container = styled.button`
width: 536.5px;
height: 56px;

border-radius: 10px;
padding: 16px;
border: none;

display: flex;
justify-content: center;
align-items: center;

gap: 8px;


background-color: ${({ theme, add }) => add ? "rgb(156 2 2)" : theme.COLORS.BACKGROUND_1000};

color: rgb(255 250 250);

font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;

`