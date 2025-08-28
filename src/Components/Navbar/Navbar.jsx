import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react";
import { ToogleTheme } from "../ThemeToggle/TheameToogle";


const navItems = [
    { name: "Home", href: "#main" },
    { name: "About", href: "#about" },
    { name: "Skill", href: "#skill" },
    // { name: "Language", href: "#language" },
    { name: "Contact", href: "#contact" },
    { name: "Project", href: "#project" },
]
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return window.removeEventListener("scroll", handleScroll)
    })
    return (

        <nav className={`p-4 w-full fixed z-40 transition-all duration-300 ${isScrolled ? "py-3 bg-background/30 backdrop-blur-md shadow-xs" : "py-5"}`}>
            <div className="flex items-center justify-between w-full gap-8">
                {/* "logo" */}
                <a href="#main" className="text-xl font-bold">
                    <span className="relative z-20 text-primary">
                        <span className="text-glow text-foreground">Himanshu Joshi /</span> Portfolio
                    </span>
                </a>

                <div className="flex gap-4 hidden md:flex ">
                    {navItems?.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="ml-8 text-center mt-8" title="Theme">
                        <ToogleTheme />
                    </div>
                </div>

                <>
                    {/* Mobile menu toggle button */}
                    <button
                        className="md:hidden text-foreground  rounded-md hover:bg-primary/20 transition"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div
                        className={`absolute top-8  right-8 z-50  shadow-lg rounded-b-xl px-2 py-2 space-y-4 transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                            } `}
                    >
                        {navItems?.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="block text-foreground/90 hover:text-primary font-medium transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>

                        ))}
                    </div>
                    {/* <div className="absolute top-8  right-8">
                        <ToogleTheme />
                    </div> */}
                </>



            </div>

        </nav >
    )
}