import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export const ToogleTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const changesTheme = localStorage.getItem("theme")
        if (changesTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        }
        else {
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark")
        }
    })
    const handleToogle = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        }
        else {
            setIsDarkMode(true)
            localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        }
    }
    return (
        <div onClick={handleToogle}
            className="fixed top-4 right-4 z-50 rounded-full transition-colors duration-300"
            title="Theme"
        >
            <button >{isDarkMode ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-gray-400" />}</button>
        </div>
    )
}