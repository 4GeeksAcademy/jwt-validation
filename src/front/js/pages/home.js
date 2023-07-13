import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useForm } from "../hooks/useform";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';


export const Home = () => {
    

    return (

        <div>

        Welcome, go to <Link to="/login"> Login</Link>

        </div>




    )


		

};
