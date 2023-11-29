import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../styles/deviceBreackpoint";


export const Container = styled.div`

  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;


  padding: 2rem;

  main {
    width: 34.7rem;
    min-width: 25rem;

    @media (min-width: ${DEVICE_BREACKPOINTS.MD}) {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      gap: 1.8rem;
    }
  };
`;


export const Title = styled.div`
  width: 100%;

  
  h2 {
    margin-top: 1.4rem;

    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
    font-weight: 700;
  }

  @media (min-width: ${DEVICE_BREACKPOINTS.MD}) {
    width: 34.7rem;
  };
`;


export const Brand = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${({ theme }) => theme.FONT_FAMILY.MAIN_TITLE};

  h1 {
    font-size: ${({ theme }) => theme.FONT_SIZE.XXLARGE};
    font-weight: 700;
  };

  img {
    width: 4.3rem;
    height: 4.3rem;
  };


  @media (max-width: ${DEVICE_BREACKPOINTS.SM}) {

    h1 {
      font-size: ${({ theme }) => theme.FONT_SIZE.XLARGE};
    };
  };
`;

export const Section = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};


  @media (min-width: ${DEVICE_BREACKPOINTS.MD}) {
    width: 35.6rem;
  };

  @media (min-width: ${DEVICE_BREACKPOINTS.LG}) {
    width: 47.5rem;
  };
`;

export const Form = styled.form`

  
  h3 {
    font-size: ${({ theme }) => theme.FONT_SIZE.XLARGE};
    font-weight: 500;

    display: none;
  };

  @media (min-width: ${DEVICE_BREACKPOINTS.MD}) {
    h3 {
      display: block;
    };
  };
`;