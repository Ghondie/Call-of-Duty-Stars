import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import API from "../../utils/API";
import MainScreen from "../MainScreen";


const LoginScreen = () => {

    const [developerState, setDeveloperState] = useState({
        username: "",
        password: "",
        login: true
      });


    const authUser = () => {
    API.authUser({ username: developerState.username, password: developerState.password })
        .then(res => setDeveloperState({ ...developerState, login: true }))   
        .catch(err => console.log(err));
       
    }

    const logOut = (evt) => {
        evt.preventDefault();
        setDeveloperState({ username: "", password: "", login: false })
    }



    const handleUserChange = evt => {
        const userInput = evt.target.value;
        return setDeveloperState({ ...developerState, username: userInput });
    }

    const handlePasswordChange = evt => {
        const passInput = evt.target.value;
        return setDeveloperState({ ...developerState, password: passInput })
    }

    const submitForm = evt => {
        evt.preventDefault();

        let dataSubmit = {
            username: developerState.username,
            password: developerState.password
        }
        authUser();

        console.log("username: ", dataSubmit.username);
    }

    if (!developerState.login) 
    
    return (
        <div>
            <Link to="/signup"><button>Sign Up Page</button></Link>
            <h1>Log In!</h1>
            <form>
                <div>
                    <p>UserName</p>
                    <input onChange={handleUserChange} value={developerState.username}></input>
                </div>
                <div>
                    <p>Password</p>
                    <input onChange={handlePasswordChange} value={developerState.password}></input>
                </div>

                <div>
                    <button onClick={submitForm}>Login</button>
                </div>
            </form>
        </div>
        
    )

    return (
        <div>
            <button onClick={(evt) => logOut(evt)}>Log Out</button>
            <MainScreen />
        </div>
        
    )
}

export default LoginScreen;