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


background-color: ${({ theme, add }) => add ? theme.COLORS.BACKGROUND_PINK2 : theme.COLORS.BACKGROUND_1000};

color:  ${({ theme, add }) => add ?theme.COLORS.BACKGROUND_1000  : theme.COLORS.BACKGROUND_PINK2};

font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;

`