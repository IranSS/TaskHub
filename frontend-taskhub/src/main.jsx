import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { GlobalStyle } from "./styles/global.js";
import { ThemeContextProvider } from "./themes/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <GlobalStyle />
    <App />
  </ThemeContextProvider>,
);
