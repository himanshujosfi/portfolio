import { useEffect, useState } from "react"

export const Background = () => {
    const [stars, setStars] = useState([])
    const [metros, setMetros] = useState([])

    useEffect(() => {
        const generateCount = Math.floor((window.innerWidth * window.innerHeight) / 10000)
        const newStars = []

        for (let i = 0; i < generateCount; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.3 + 0.3,
                animationDuration: Math.random() * 4 + 1, // seconds
            })
        }

        setStars(newStars)
    }, [])
    useEffect(() => {
        const noOfMetors = 5
        const newMetors = []
        for (let i = 0; i < noOfMetors; i++) {
            newMetors.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                duration: Math.random() * 3 + 3,
            })
        }
        setMetros(newMetors)
    }, [])
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        top: `${star.y}%`,
                        left: `${star.x}%`,
                        position: "absolute",
                        animation: `pulse-subtle ${star.animationDuration}s ease-in-out infinite`,
                    }}
                />
            ))}
            {metros.map((metor) => (
                <div
                    key={metor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: `${metor.size * 10}px`,
                        height: `${metor.size * 1}px`,
                        delay: ` ${metor.delay}s`,
                        top: `${metor.y}%`,
                        left: `${metor.x}%`,
                        position: "absolute",
                        direction: ` ${metor.duration}s ease-in-out `,
                    }}
                />
            ))}
        </div>
    )
}
