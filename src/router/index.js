import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "../pages/Home";

export function RouterDom() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/home" exact component={Home} />
    </BrowserRouter>
  );
}
