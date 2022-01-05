import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { BrowserRouter, Route } from "react-router-dom";

export function RouterDom() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </BrowserRouter>
  );
}
