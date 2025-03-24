// src/App.js
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ModelDisplay } from "./ModelDisplay";

const App = () => (
  <ChakraProvider>
    <ModelDisplay />
  </ChakraProvider>
);

export default App;
