import styled from "styled-components";


export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  gap: .8rem;
  padding: 1.2rem .8rem;
  border-radius: .8rem;


  input {
    width: 100%;

    font-family: ${({ theme }) => theme.FONT_FAMILY.MAIN_TITLE};

    background: none;
    outline: none;
    border: none
  };

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.TINTS_LIGHT_500};
  };

  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
  };
`;