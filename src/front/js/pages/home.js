import React, { useContext, useState, useEffect } from "react";

import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";



export const Home = () => {
    

    return (

        <div className="aling-items-center">
            <h3 className="mt-4">
        Bienvenido a mi proyecto de validacion con JWT, debes crear un Usuario y despues hacer login, go to <Link to="/login"> Login</Link>
        </h3>
        </div>




    )


		

};
