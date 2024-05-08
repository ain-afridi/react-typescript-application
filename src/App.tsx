import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import "./App.css";
import theme from "./theme";
import { store } from "./store";
import GlobalStyles from "./theme/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";

const persistor = getPersistor();

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <GlobalStyles />
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </PersistGate>
  );
}

export default App;
