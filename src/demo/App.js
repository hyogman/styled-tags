import React from "react";
import { Div, H1, Span, Header, P } from "../lib";

const mediaQueries = `
  @media all and (max-width: 425px) {
    & {
      margin: 20px;
      justify-content: flex-start;
      background-color: red;
    }
  }
`;

function MyContainer({ children, justifyContent }) {
  return (
    <Div
      margin="24px"
      display="flex"
      justifyContent={justifyContent}
      className="test"
    >
      {children}
    </Div>
  );
}

const BLUE = "blue";

const App = () => (
  <div>
    <Div
      margin="24px"
      display="flex"
      justifyContent="center"
      pseudo={`&:hover { background-color: ${BLUE} }`}
      media={mediaQueries}
    >
      <H1>hi inside my Div</H1>
    </Div>
    <MyContainer justifyContent="center">
      <P>hello inside my div</P>
    </MyContainer>
  </div>
);

export default App;
