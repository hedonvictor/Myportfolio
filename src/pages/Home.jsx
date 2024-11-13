import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import MyHeader from "./components/myHeader";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Formation from "./sections/Formations";

import "./Home.css"
import { Presentation } from "./sections/Presentation";
import { MyFooter } from './components/myFooter';

export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1500, offset: 200 });
    }, []);

    return (
        <div style={{ height: "100vh" }}>
            <MyHeader/>
            <Presentation/>
            <AboutMe/>
            <Projects/>
            <Formation/>
            <MyFooter/>
        </div>
    )
}