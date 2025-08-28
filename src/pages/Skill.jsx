import { useState } from "react";
import {
    Code2,
    Monitor,
    Laptop,
    Terminal,
    GitBranch,
    Figma,
    Settings,
} from "lucide-react";

const skills = {
    frontend: [
        { name: "React.js", icon: <Monitor className="h-6 w-6 text-primary" />, level: 85 },
        { name: "JavaScript", icon: <Terminal className="h-6 w-6 text-primary" />, level: 90 },
        { name: "Next.js", icon: <Laptop className="h-6 w-6 text-primary" />, level: 80 },
        { name: "HTML & CSS", icon: <Code2 className="h-6 w-6 text-primary" />, level: 95 },
    ],
    tools: [
        { name: "Git & GitHub", icon: <GitBranch className="h-6 w-6 text-primary" />, level: 85 },
        { name: "Figma", icon: <Figma className="h-6 w-6 text-primary" />, level: 75 },
        { name: "VS Code", icon: <Settings className="h-6 w-6 text-primary" />, level: 95 },
    ],
};

const categories = [
    { key: "all", label: "All" },
    { key: "frontend", label: "Frontend" },
    { key: "tools", label: "Tools & Design" },
];


export const Skill = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    // filtering logic
    const filteredSkills =
        selectedCategory === "all"
            ? [...skills.frontend, ...skills.tools]
            : skills[selectedCategory];

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

                {/* Category Filters */}
                <div className="flex justify-center gap-4 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category.key}
                            type="button"
                            onClick={() => { setSelectedCategory(category.key), console.log("click", category.key) }}
                            className={`rounded-full px-6 py-2 border transition ${selectedCategory === category.key
                                ? "bg-primary text-white shadow-md"
                                : "border-border text-foreground hover:bg-muted"
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredSkills?.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl border border-border shadow hover:shadow-md transition flex flex-col space-y-3"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-sm font-medium text-foreground">{item.name}</h4>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                                <div
                                    className="h-2 bg-primary rounded-full transition-all duration-700"
                                    style={{ width: `${item.level}%` }}
                                />
                            </div>
                            <span className="text-xs text-muted-foreground">{item.level}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
