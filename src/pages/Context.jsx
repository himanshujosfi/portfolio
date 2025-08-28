import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="bg-background px-6 py-16">
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Heading */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Get in Touch</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Interested in working together or just want to say hi?
                        Fill out the form or reach me via email and social links below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left: Contact Form */}
                    <form className="space-y-4 bg-card border border-border shadow-md p-6 rounded-xl">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                            <textarea
                                rows={4}
                                placeholder="Write your message..."
                                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow hover:bg-primary/90 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Right: Contact Info */}
                    <div className="space-y-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3">
                            <Mail className="h-6 w-6 text-primary" />
                            <a href="mailto:your@email.com" className="text-foreground hover:text-primary transition">
                                hemjoshi395@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <Linkedin className="h-6 w-6 text-primary" />
                            <a
                                href="https://linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-primary transition"
                            >
                                linkedin.com/in/yourprofile
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <Github className="h-6 w-6 text-primary" />
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-primary transition"
                            >
                                github.com/hemjoshi395@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
