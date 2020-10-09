import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import API from "../../utils/API";
import MainScreen from "../MainScreen/MainScreen";
import Header from "../Header/Header";

const LoginScreen = () => {
	const [developerState, setDeveloperState] = useState({
		username: "",
		password: "",
		login: true,
	});

	const authUser = () => {
		API.authUser({
			username: developerState.username,
			password: developerState.password,
		})
			.then((res) => setDeveloperState({ ...developerState, login: true }))
			.catch((err) => console.log(err));
	};

	const logOut = (evt) => {
		evt.preventDefault();
		setDeveloperState({ username: "", password: "", login: false });
	};

	const handleUserChange = (evt) => {
		const userInput = evt.target.value;
		return setDeveloperState({ ...developerState, username: userInput });
	};

	const handlePasswordChange = (evt) => {
		const passInput = evt.target.value;
		return setDeveloperState({ ...developerState, password: passInput });
	};

	const submitForm = (evt) => {
		evt.preventDefault();

		let dataSubmit = {
			username: developerState.username,
			password: developerState.password,
		};
		authUser();

		console.log("username: ", dataSubmit.username);
	};

	if (!developerState.login)
		return (
			<div>
				<Header />
				<h1>Log In!</h1>
				<form>
					<div>
						<p>UserName</p>
						<input
							onChange={handleUserChange}
							value={developerState.username}
						></input>
					</div>
					<div>
						<p>Password</p>
						<input
							onChange={handlePasswordChange}
							value={developerState.password}
						></input>
					</div>

					<div>
						<button onClick={submitForm}>Login</button>
					</div>
				</form>
				{/* <form>
					<div>
						<h1> COD-STARS</h1>
						<p>For Testing Please Use</p>
						<p>Username: Testuser</p>
						<p>Password: test123</p>
					</div>
				</form>
				<form>
					<div>
						<h1>Descripton</h1>
						<p>We made an application to track </p>
						<p>your Call Of Duty stats with all</p>
						<p> of you friends to see who has the </p>
						<p>best score at the end of the night.</p>
					</div>
				</form> */}
			</div>
		);

	return (
		<div>
			<MainScreen />
		</div>
	);
};

export default LoginScreen;
