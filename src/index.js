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
    MuiInput: {
      root: {
        marginLeft: "10px"
      }
    },
    MuiPaper: {
      root: {
        width: "100%"
      }
    },
    MuiIcon: {
      root: {
        margin: "5px"
      }
    },
    MuiButton: {
      root: {
        "& a": {
          textDecoration: "none",
          color: "#faf9f9"
        }
      }
    }
  },
  typography: {
    fontFamily: ["Montserrat"].join(","),
    useNextVariants: true
  },
  palette: {
    primary: {
      light: "#c5e1a5",
      // main: "#5ea3a3",
      main: "#7cb342",
      dark: "#33691e",
      contrastText: "#faf9f9"
    },
    secondary: {
      light: "#f2ccb8",
      main: "#ea5b0d",
      dark: "#33691e",
      contrastText: "#f2ccb8"
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
