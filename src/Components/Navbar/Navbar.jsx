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

        <nav className={`max-h-screen fixed z-40 transition-all duration-300 ${isScrolled ? "py-3 bg-background/30 backdrop-blur-md shadow-xs" : "py-5"}`}>
            <div className="flex items-center justify-between w-full gap-8">
                {/* "logo" */}
                <a href="#main" className="text-xl font-bold">
                    <span className="relative z-20 text-primary">
                        <span className="text-glow text-foreground">Himanshu Joshi /</span> Portfolio
                    </span>
                </a>

                <div className="flex gap-4 hidden md:flex ml-8">
                    {navItems?.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                    <ToogleTheme />
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

        </nav >
    )
}