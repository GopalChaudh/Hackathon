import React from "react";
import ReactDOM from "react-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

import App from "./App";
import theme from "theme";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <Router> {/* Use BrowserRouter instead of HashRouter */}
                <App />
            </Router>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);
