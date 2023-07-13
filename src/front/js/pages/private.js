import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";


export const Private = () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState(store.user)


    useEffect(() => {
        let storageUSer = JSON.parse(localStorage.getItem("user"))
        if (storageUSer && user === null) {
            setUser(() => storageUSer)
        }
        if (!storageUSer && user === null) {
            actions.getUser();

        }

    }, [user, store.user])


    return (
        <>
            {user !== null ? `hola ${user.email}` : <></> }

        </>

    )
}