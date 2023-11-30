import styled from "styled-components";


export const Container = styled.button`
  width: 100%;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: .8rem;

  background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  padding: 1.2rem 3.2rem;

  border-radius: .5rem;
  border: none;

  svg {
    font-size: 2.2rem;
  };
`;