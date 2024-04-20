import React, { useState } from "react";
import { useEffect } from "react";

import MyHeader from "./components/myHeader";

import Initial from "./sections/initial";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Formation from "./sections/Formations";

import "./Home.css"

export default function Home() {

    const [section, setSection] = useState(<Initial />);

    useEffect(() => {
        switch (section) {
            case 'home':
                setSection(<Initial />);
                break;
            case 'about':
                setSection(<AboutMe />);
                break;
            case 'projects':
                setSection(<Projects />);
                break;
            case 'formation':
                setSection(<Formation />);
                break;
            default:
                break;
        }
    }, [section]);


    return (
        <div className="d-flex flex-column" style={{ height: "100vh" }}>
            <MyHeader navElement={[
                <span onClick={() => { setSection('home') }}>Home</span>,
                <span onClick={() => { setSection('about') }} >Sobre</span>,
                <span onClick={() => { setSection('projects') }}>Projetos</span>,
                <span onClick={() => { setSection('formation') }}>Formação</span>,
            ]} />
            {section}
        </div>
    )
}