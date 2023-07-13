import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { actions } = useContext(Context)
	const location = useLocation();
	const navigate = useNavigate()

	const logoutCondition = location.pathname !== "/login" && location.pathname !== "/" && location.pathname !== "/signup"

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>

				<div className="ml-auto">
					{logoutCondition && <button onClick={() => actions.logOut(navigate)} className="btn btn-primary">Log Out</button>}
				</div>
			</div>
		</nav>
	);
};
