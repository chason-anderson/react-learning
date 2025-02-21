import styled, { createGlobalStyle } from "styled-components";
import Card from "./components/Card";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ffffff;
    margin: 0;
    font-family: sans-serif;
  }
  #root {
    height: 100vh;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Card
          title="My Card"
          description="Card description"
          imageUrl="https://robohash.org/po"
          size="medium"
        />
      </AppContainer>
    </>
  );
}

export default App;
