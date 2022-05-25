import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ModalProvider } from "./contexts";
import {Provider} from "react-redux"
import store from "./redux/store"
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ModalProvider >
        <App />
      </ModalProvider>
    </BrowserRouter>
  </Provider>
)
