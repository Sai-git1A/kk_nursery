import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Nav/Navbar";
import Footer from "../Components/Footer/Footer";

export default function() {

    const params = useParams();

    return (
        <>
            <Navbar />
            <h1>{params.name}</h1>
            <Footer />
        </>
    )
}