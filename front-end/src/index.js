import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "UI/Components/Style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "UI/Components/Style/theme";
import { Provider as ReduxProvider } from "react-redux";
import store from "State/Redux/Store"

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
