import styled from "styled-components";


export const Container = styled.button`
  width: max-content;

  cursor: pointer;


  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 1.4rem;

  padding: .4rem 1.2rem;
  gap: .4rem;

  border-radius: 2rem;
  border: none;

  background: ${({ theme }) => theme.COLORS.DARK_800};

  svg {
    font-size: 1.6rem;
  }
`;