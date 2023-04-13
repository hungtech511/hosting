import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import HoverImage from "@custom/HoverImage/HoverImage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HoverImage>
      <App />
    </HoverImage>
  </React.StrictMode>,
)
