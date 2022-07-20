import './Main.module.scss'
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Main() {
    return(
        <main>
            <About />
            <Skills />
            <Projects />
        </main>
    )
}