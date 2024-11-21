import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { AboutMe, Projects, Formation, Presentation} from  './sections'




import { MyFooter, MyHeader } from './components';

export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1500, offset: 200 });
    }, []);

    return (
        <div className='HomeDiv'>
            <MyHeader/>
            <Presentation/>
            <AboutMe/>
            <Projects/>
            <Formation/>
            <MyFooter/>
        </div>
    )
}