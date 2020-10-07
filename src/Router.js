import React from "react";
import App from "./pages/App";
import Contribute from "./pages/Contribute";
import { BrowserRouter, Route } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route exact path="/contribute" component={Contribute} />
    </BrowserRouter>
  );
}
