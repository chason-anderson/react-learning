import styled, { createGlobalStyle } from "styled-components";
import Card from "./components/Card"; // Import your Card component

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ffffff; /* White background */
    margin: 0; /* Remove default margins */
    font-family: sans-serif; /* Example font */
  }
  #root { /* Target the root div */
    height: 100vh; /* Make sure background covers the entire viewport */
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
      <GlobalStyle /> {/* Include the global style */}
      <AppContainer>
        <Card
          title="My Card"
          description="Card description"
          imageUrl="https://robohash.org/po"
          size="small"
        />
      </AppContainer>
    </>
  );
}

export default App;
