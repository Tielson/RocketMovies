import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;

background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.BACKGROUND_800};
border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};


border-radius: 10px;
padding-right:16px; 

  >button {
    border:none;
    background:none;

    svg{
      color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK2}; 
      width: 22px;
      height: 24px;

    }
  }

  >input{
    height:56px;
    width: ${({ isNew }) => isNew ? `180px` : `113.16px`};
    border-radius: 10px;

    padding:12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};

    border:none;
    
    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_300}
    }
  }
`