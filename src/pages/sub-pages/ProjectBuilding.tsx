// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// project building page component
export default function ProjectBuilding() {
    const currentYear = new Date().getFullYear();

    return (
        <article className="max-w-3xl mx-auto px-2 py-10" id="ProjectBuilding">
            {/* Header */}
            <LogHeader
                title="Project building"
                subtitle="Transforming abstract concepts into tangible, real-world applications."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Project building is a vital process for transforming abstract ideas into practical,
                    real-world applications. It plays a key role in showcasing your <LogLink to="/skills">skills</LogLink>,
                    deepening your understanding of the technology, and contributing value to society.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        For beginners, starting with small and straightforward projects, such as mini HTML and
                        CSS designs, is essential.
                    </li>
                    <li>
                        These initial projects, like creating static web pages or simple UI components, help you
                        build confidence and establish a strong foundation.
                    </li>
                </ul>

                <p>
                    As you progress, working on slightly more complex projects, such as cloning popular
                    websites or applications, allows you to mimic professional-level features while learning
                    best practices.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        For instance, replicating platforms like Amazon, Netflix, or Zomato can provide insight
                        into responsive design, animations, and efficient code structuring.
                    </li>
                    <li>
                        Through this process, you also develop <LogLink to="/problem-solving">problem-solving</LogLink> skills
                        by addressing challenges like layout responsiveness, cross-browser compatibility, and UI/UX refinements.
                    </li>
                </ul>

                <p>
                    Once you’ve gained proficiency, brainstorming unique ideas is the next step. These ideas
                    can tackle real-world problems or address gaps in the current market.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Examples include creating tools for <LogLink to="/mental-health">mental health</LogLink> tracking,
                        community-building platforms, or budget management applications. By doing so, you demonstrate creativity
                        and the ability to innovate.
                    </li>
                </ul>

                <p>
                    Moreover, engaging in collaborative projects or contributing to <LogLink to="/open-source">open-source</LogLink> platforms
                    helps you gain teamwork experience and exposure to diverse coding practices.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Constantly refining your code, exploring emerging technologies, and incorporating user
                        feedback make your projects even more robust.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Ultimately, the continuous cycle of ideating, creating, and refining projects is how you
                    master new technologies, build a strong portfolio, and make meaningful contributions to
                    the tech community.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <div className="space-y-2">
                        <p>
                            “Ready to start your first project? Check out{' '}
                            <a
                                target="_blank"
                                href="https://html-css-projects-phi.vercel.app/"
                                rel="noreferrer"
                                className="underline underline-offset-4 decoration-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors font-medium"
                            >
                                My HTML-CSS Mini Projects Website.
                            </a>
                            ” This website is filled with numerous HTML-CSS mini projects to begin your web dev journey.
                        </p>
                        <p className="text-xs text-zinc-400 dark:text-zinc-500 italic">
                            You can star it if you find it useful!
                        </p>
                    </div>
                }
                credits={
                    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
                        <p>© {currentYear} DevLogs — Aditya Chandel</p>

                        <div className="flex gap-3">
                            <a
                                href="https://linkedin.com/in/aditya-chandel-223bb3308"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="https://twitter.com/iamaditya_3"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                }
            />
        </article>
    );
}