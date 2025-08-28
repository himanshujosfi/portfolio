import { Code2, Palette, Monitor } from "lucide-react";

export const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center bg-background px-6 py-16"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left side - intro */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">About Me</h2>

                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        Hi, I’m <span className="font-semibold text-foreground">Himanshu Joshi</span>,
                        a passionate <span className="text-primary font-medium">Frontend Developer</span>
                        who loves crafting modern, responsive, and user-friendly web applications.
                        I specialize in working with <span className="font-semibold">React, Next.js, and TailwindCSS</span>
                        to bring creative ideas to life on the web.
                    </p>

                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        My focus is on building clean and scalable UI components, improving
                        user experience, and writing maintainable code. I enjoy learning
                        new tools and keeping up with the latest trends in web development.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground shadow hover:bg-primary/90 transition"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/vite.svg"
                            download
                            className="px-6 py-3 rounded-xl border border-primary text-primary shadow hover:bg-primary hover:text-primary-foreground transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Right side - skill highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-border shadow hover:shadow-md transition">
                        <Code2 className="h-8 w-8 text-primary mb-3" />
                        <h3 className="font-semibold text-lg text-foreground">Web Developer</h3>
                        <p className="text-sm text-muted-foreground">
                            Building modern, responsive, and scalable web applications.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border border-border shadow hover:shadow-md transition">
                        <Palette className="h-8 w-8 text-primary mb-3" />
                        <h3 className="font-semibold text-lg text-foreground">UI/UX Designer</h3>
                        <p className="text-sm text-muted-foreground">
                            Crafting intuitive, user-friendly, and visually appealing interfaces.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border border-border shadow hover:shadow-md transition">
                        <Monitor className="h-8 w-8 text-primary mb-3" />
                        <h3 className="font-semibold text-lg text-foreground">Frontend Engineer</h3>
                        <p className="text-sm text-muted-foreground">
                            Writing clean, maintainable code and optimizing performance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
