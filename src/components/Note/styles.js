import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.button`

width: 100%;
background-color: ${({ theme }) => theme.COLORS.PINK};

border: none;
border-radius: 10px;

padding: 32PX;
margin-bottom: 24px ; 

  .content{
    margin-top: 15px;
    height: 37px;
    overflow-y: hidden;
    size: 16px;
    line-height:18.75px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};


    text-align: left;
    flex-direction: column;
  }

  >h1{
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
  }


`