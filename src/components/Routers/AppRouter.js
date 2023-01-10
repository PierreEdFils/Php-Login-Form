import React from "react";
import {Routes, Route} from 'react-router-dom'
import  Container  from "../common/Container"
import Home from "../Home/Home";
import Login from "../Auth/Login";
import Self from "../Student/Self";
import Students from "../Student/Students";
import Navbar from "../Navbar/Navbar";
import PayFees from "../Student/PayFees";

const AppRouter =() => {

    // Home
    // Login
    // Students
    // MyPage

    // optional teacher 

    return(
        <Container>
            <Navbar />
            <Routes >
            <Route path ="/" element = {<Home />}/>
            <Route path ="/login" element = {<Login />}/>
            <Route path ="/profile" element = {<Self />}/>
            <Route path ="/students" element = {<Students />}/>
           <Route path  = "/payfees" element ={<PayFees />}/>
           
            </Routes>
        </Container>
    )
}

export  default AppRouter;