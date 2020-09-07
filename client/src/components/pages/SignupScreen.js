import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import API from "../../utils/API";
import Header from "../Header/Header";
import TeamJoin from "../teamJoin/teamjoin";


const SignupScreen = () => {

    const [developerState, setDeveloperState] = useState({
        username: "",
        password: "",
        errors: []
      });

    const saveUser = () => {
        API.saveUser({ username: developerState.username, password: developerState.password })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
       
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

        saveUser();

        console.log("username: ", dataSubmit.username);
    }

    
    return (
        <div>
             <Header/>

            <h1>Sign Up!</h1>
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
                    <button onClick={submitForm}>Sign Up</button>
                </div>
            </form>
            <form>
                <div>
                    <p>Join existing game</p>
                    <input onChange={handleUserChange} value={developerState.username}></input>
                </div>
                {/* <div>
                    <p>Password</p>
                    <input onChange={handlePasswordChange} value={developerState.password}></input>
                </div> */}

                <div>
                    <button onClick={submitForm}>Join</button>
                </div>
            </form>
        </div>
    )
}

export default SignupScreen;