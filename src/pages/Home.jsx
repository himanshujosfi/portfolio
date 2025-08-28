import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react";

export const Home = () => {
    const [show, setShow] = useState(true);


    return (
        <section id="main" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container text-center z-40 mx-auto max-w-4xl ">
                <div className="space-y-6">
                    <h1 className="text-4xl md-text-6xl font-bold tracking-tight gap-2 ">
                        <span className="opacity-0 animate-fade-in-delay-1 ">Hi I'am</span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2 ">Himanshu</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3 ">Joshi</span>
                    </h1>
                    <p className="text-sm md:text-lg opacity-0 animate-fade-in-delay-4 text-muted-foreground max-auto">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis culpa atque nemo quae, consequuntur eius. Nostrum, omnis adipisci iusto magni labore voluptate culpa fuga. Provident eius esse aliquid nihil quo.
                    </p>
                    <div className="text-sm md:text-lg opacity-0 animate-fade-in-delay-4">
                        <a href="/project" className=" bg-primary text-primary-foreground
  px-4 py-2 rounded-lg shadow
  hover:bg-primary/90 transition">View My Work</a>
                    </div>
                </div>
            </div>

            {/* arroew button */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
            </div>

        </section>
    )
}