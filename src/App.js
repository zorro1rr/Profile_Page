import React from "react";
import { Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Home from "./components/Home";
import Name from "./components/Name";
import Photo from "./components/Photo";
import Phone from "./components/Phone";
import Email from "./components/Email";
import About from "./components/About";

// This component is delegated to handling routes and global styles
function App() {
  return (
    <div>
      <GlobalStyles />
      <Route path="/" exact component={Home} />
      <Route path="/Name" component={Name} />
      <Route path="/Photo" component={Photo} />
      <Route path="/Phone" component={Phone} />
      <Route path="/Email" component={Email} />
      <Route path="/About" component={About} />
    </div>
  );
}

export default App;
