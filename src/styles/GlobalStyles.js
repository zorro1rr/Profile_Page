import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// This is being applied in App.js
const GlobalStyles = createGlobalStyle`
// normalize makes styles consistant amongst various browsers
${normalize}
:root {
    --black: #030303;
    --blue: #4169e1;
    --grey: #b2b3b3;
    --lightGrey: #e5e5e5;
}
html {
    font-family: 'Oxygen', sans-serif;
}
`;

export default GlobalStyles;
