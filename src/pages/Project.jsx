
const projectData = [
    {
        id: 6,
        title: "Portfolio Website",
        description: "A personal portfolio built with React and Tailwind.",
        image: "/vite.svg",
        link: "https://github.com/himanshujosfi/portfolio",
    },
    {
        id: 5,
        title: "E-commerce App",
        description: "An online store application using Next.js and Stripe.",
        image: "/vite.svg",
        link: "https://github.com/himanshujosfi/portfolio",
    },
    {
        id: 3,
        title: "Task Manager",
        description: "A todo/task manager app built with React and localStorage.",
        image: "/vite.svg",
        link: "https://github.com/himanshujosfi/portfolio"
    },
];

export const Project = () => {
    return (
        <section className="bg-background px-6 py-16" id="project">
            <div className="max-w-6xl mx-auto space-y-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
                    My Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projectData.map((item) => (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-6 rounded-xl border border-border shadow hover:shadow-md transition transform hover:-translate-y-1 "
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
