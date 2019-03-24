import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import axios from "axios";
import rootSaga from "./sagas";
import reducers from "./reducers";

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const theme = createMuiTheme({
  overrides: {
    MuiIcon: {
      root: {
        margin: "5px"
      }
    }
  },
  typography: {
    fontFamily: ["Montserrat"].join(","),
    useNextVariants: true
  },
  palette: {
    primary: {
      light: "#add2c9",
      main: "#5ea3a3",
      dark: "#488b8f",
      contrastText: "#faf9f9"
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",

      contrastText: "#ffcc00"
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
