import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LoginScreen from "./components/pages/LoginScreen";
import SignupScreen from "./components/pages/SignupScreen";
import About from "./components/pages/About";
import Play from "./components/Play/play";

function App() {
    return (
        <Router>
            <Route exact path={"/"} component={Play} />
            <Route exact path={"/signup"} component={SignupScreen} />
            <Route exact path={"/Play"} component={LoginScreen} />
        </Router>
    );
}

export default App;
