import { Background } from "../Components/Backgroung/Background"
import { Navbar } from "../Components/Navbar/Navbar"
import { About } from "./About"
import { Contact } from "./Context"
import { Home } from "./Home"
import { Skill } from "./Skill"
// import { ToogleTheme } from "../Components/ThemeToggle/TheameToogle"

export const Dashboard = () => {
    return (
        <div className="m-h-screen bg-background text-foreground overflow-x-hidden">
            <div>
                {/* <ToogleTheme /> */}
                <Background />
                <Navbar />

                <main>
                    <Home />
                    <About />
                    <Skill />
                    <Contact />
                </main>
            </div>
        </div>
    )
}