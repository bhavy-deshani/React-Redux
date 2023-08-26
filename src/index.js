import React from "react";
import ReactDOM from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
// import App from './App';
import store from "./Store/CustomStore";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import MainRouter from "./MainRouter";
import Store from "./Store/CustomStore";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <RouterProvider router={MainRouter} />
  </Provider>
);