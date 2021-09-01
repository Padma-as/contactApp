import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./container/AddContact";
import EditContact from "./container/EditContact";
const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddContact} />
        <Route exact path="/edit/:id" component={EditContact} />
      </Switch>
    </div>
  );
};

export default App;
