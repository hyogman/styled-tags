# Styled Tags

A library of flexible and customizable inline HTML tag components built on top of the amazing [styled-components](https://github.com/styled-components/styled-components) library

`yarn add styled-tags`

## API by example 

```js
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
  </div>
);

export default App;

```
Note that psuedo and media selectors have their own prop fields. 

You can also have reusability by simpling wrapping your inline styled tags with in a React component and pass props or children for dynamic customizability.

```js
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


 <MyContainer justifyContent="center">
    <P>hello inside my div</P>
  </MyContainer>

```
### Todo

Add more HTML tags and animations. Lib is mainly an experiment and work in progress...

