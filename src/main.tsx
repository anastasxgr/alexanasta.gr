import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import { Provider } from "react-redux";
import { store } from "./_store/index.ts";
import "./assets/app.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
