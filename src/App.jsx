import styled, { ThemeProvider } from "styled-components";
import Calculator from "./Components/Calculator.jsx";
import { theme } from "./styles/Theme.jsx";
import GlobalStyle from "./styles/GlobalStyles.jsx";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Calculator />
    </ThemeProvider>
  );
}
