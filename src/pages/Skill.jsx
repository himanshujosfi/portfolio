import { Code2, Palette, Monitor, Laptop, Terminal, GitBranch, Figma, Settings } from "lucide-react";

const skills = {
    frontend: [
        {
            name: "React.js",
            icon: <Monitor className="h-6 w-6 text-primary" />,
        },
        {
            name: "JavaScript",
            icon: <Terminal className="h-6 w-6 text-primary" />,
        },
        {
            name: "Next.js",
            icon: <Laptop className="h-6 w-6 text-primary" />,
        },
        {
            name: "HTML & CSS",
            icon: <Code2 className="h-6 w-6 text-primary" />,
        },
    ],
    tools: [
        {
            name: "Git & GitHub",
            icon: <GitBranch className="h-6 w-6 text-primary" />,
        },
        {
            name: "Figma",
            icon: <Figma className="h-6 w-6 text-primary" />,
        },
        {
            name: "VS Code",
            icon: <Settings className="h-6 w-6 text-primary" />,
        },
    ],
};

export const Skill = () => {
    return (
        <section id="skill" className="bg-background px-6 py-16">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Heading */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">My Skills</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A quick overview of the technologies and tools I use to build
                        modern, responsive, and user-friendly web applications.
                    </p>
                </div>

                {/* Frontend Skills */}
                <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">Frontend Development</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {skills.frontend.map((skill, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl border border-border shadow hover:shadow-md transition flex flex-col items-center text-center space-y-3"
                            >
                                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                                    {skill.icon}
                                </div>
                                <h4 className="text-sm font-medium text-foreground">{skill.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">Tools & Design</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {skills.tools.map((skill, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl border border-border shadow hover:shadow-md transition flex flex-col items-center text-center space-y-3"
                            >
                                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                                    {skill.icon}
                                </div>
                                <h4 className="text-sm font-medium text-foreground">{skill.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
