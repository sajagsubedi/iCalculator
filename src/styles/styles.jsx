import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.themeColor};
  width: 100vw;
`;

export const CalculatorSec = styled.section`
  width: 80vw;
  height:78vh;
  margin: 5px;
  background: ${({ theme }) => theme.colors.calthemeColor};
  display: grid;
  padding: 8px;
  grid-template-rows:4fr 9fr;
  grid-gap: 8px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 2px 2px 5px 5px rgb(5, 30, 50);
  font-family: "Roboto", sans-serif;
  @media (min-width: ${({ theme }) => theme.responsive.largeMobile}) {
    width: 60vw;
  }
  @media (min-width: ${({ theme }) => theme.responsive.tab}) {
    width: 50vw;
    height: 83vh;
    border-radius: 30px;
    padding: 10px; 
    box-shadow: 5px 5px 5px 5px rgb(5, 30, 50);
  }
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    width: 30vw;
    height: 78vh;
  }
`;

export const CalculatorHead = styled.div`
  background: ${({ theme }) => theme.colors.innerCalculator};
  color: white;
  padding: 5px;
  border-radius: 9px;
  display: grid;
  grid-template-rows: 3fr 1fr;
  @media (min-width: ${({ theme }) => theme.responsive.tab}) {
    padding: 7px;
    border-radius: 18px;
  }
`;

export const ResultArea = styled.div`
  font-size: 1.7rem;
  word-break: break-all;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: ${({ theme }) => theme.responsive.tab}) {
    font-size: 2.5rem;
  }
`;
export const IconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CalculatorBody = styled.div`

`;

export const ButtonCG = styled.div`
  display: grid;
  grid-gap: 5px;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const ClearBtn = styled.button`
  padding: 5px;
  grid-column-start: 1;
  grid-column-end: 3;
  border: none;
  background: ${({ theme }) => theme.colors.color1};
  width: 100%;
  border-radius: 5px;
  color: white;
  font-size: 1.3rem;
  &:active {
    color: ${({ theme }) => theme.colors.color2};
  }
  @media (min-width: ${({ theme }) => theme.responsive.tab}) {
    font-size: 1.4rem;
    border-radius: 8px;
  }
`;

export const NumBtn = styled.button`
  background: ${({ theme }) => theme.colors.innerCalculator};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 2px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  &:hover {
    //color: #3b82f6;
    color: ${({ op }) => (op == "true" ? "#3b82f6" : "crimson")};
  }
  @media (min-width: ${({ theme }) => theme.responsive.tab}) {
    font-size: 1.4rem;
    border-radius: 8px;
  }
`;

export const EqBtn = styled.button`
  background: ${({ theme }) => theme.colors.color2};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  font-size: 1.5rem;
  &:active {
    color: ${({ theme }) => theme.colors.color1};
  }
  @media (min-width: ${({ theme }) => theme.responsive.tab}) {
    font-size: 1.7rem;
    border-radius: 10px;
  }
`;

export const ButtonRG = styled.div`
  display: grid;
  grid-gap: 5px;
  height: 100%;
  grid-template-rows: repeat(5, auto);
  @media (min-width: ${({ theme }) => theme.responsive.tab}) {
    grid-gap: 8px;
  }
`;

export const Tit = styled.h1`
  color: white;
  margin: 7px;
  font-family: "Fuzzy Bubbles", cursive;
  font-size: 2rem;
  @media (min-width: ${({ theme }) => theme.responsive.tab}) {
    font-size: 2.5rem;
  }
`;

export const DeleteSvg = styled.svg`
  height: 30px;
 
`;

export const DelBtn = styled.button`
  background: transparent;
  border: none;
`;
