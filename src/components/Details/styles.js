import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

`
export const Creation = styled.div`
width: 100%;

display: flex;
gap: 8px;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 19px;

>img{
  width: 16px;
  height: 16px;
border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
border-radius: 50%;
}

svg{
  color: ${({theme}) => theme.COLORS.BACKGROUND_PINK2};
  margin-left: 8px;
}
`
export const TiSt = styled.div`
svg{
  font-size: 20px;
}
width: 100%;
margin-bottom: 24px;

font-size: 36px ;
display: flex;
align-items: center;
align-content: center;
gap: 19px;



`
