import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "../pages/Home";



export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                <Route exact path="/" element={<Home/>}/>
                    <Route exact path="*" element={<Home/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}