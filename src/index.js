import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import routes from "./routes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(routes);
