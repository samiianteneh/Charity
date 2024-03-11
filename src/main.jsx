import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/lib/integration/react.js";
import store from "./Store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <ConfigProvider>
        <App />
      </ConfigProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
