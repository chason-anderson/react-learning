import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Card from "./components/Card";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0; 
    padding: 0; 
    height: 100%; 
  }

  #root { 
     height: 100%;
  } 
`;

const AppContainer = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Card />
      </AppContainer>
    </>
  );
};

export default App;
