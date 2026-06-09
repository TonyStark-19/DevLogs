// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// open source page component
export default function OpenSource() {
    const currentYear = new Date().getFullYear();

    return (
        <article className="max-w-3xl mx-auto px-2 py-10" id="OpenSource">
            {/* Header */}
            <LogHeader
                title="Open source"
                subtitle="Collaborating with a global community to write the transparent future of software."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Open-source contributions are crucial for both developers and the tech community,
                    offering a platform for collaboration, learning, and innovation.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        They allow developers to sharpen their <LogLink to="/skills">skills</LogLink>, work on real-world{' '}
                        <LogLink to="/project-building">projects</LogLink>, and gain practical experience in coding,
                        debugging, and <LogLink to="/problem-solving">problem-solving.</LogLink>
                    </li>
                    <li>
                        By contributing to open-source projects, developers get exposure to diverse codebases,
                        which helps them understand different coding styles, architectures, and best practices.
                    </li>
                    <li>
                        This skill is especially valuable in professional environments where teamwork and the
                        ability to navigate unfamiliar code are essential.
                    </li>
                </ul>

                <p>
                    Many big companies like Google, Microsoft, and Meta maintain open-source repositories,
                    encouraging global contributions to enhance project efficiency, scalability, and user experience.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Open source fosters a culture of knowledge-sharing and community-driven development,
                        where developers from different backgrounds and expertise levels can collaborate, review
                        each other's work, and improve software collectively.
                    </li>
                </ul>

                <p>
                    Additionally, open-source contributions are highly beneficial for a developer’s resume,
                    as they demonstrate hands-on experience, technical proficiency, and the ability to work in teams.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Participating in open-source programs like{' '}
                        <a
                            href="https://hacktoberfest.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            Hacktoberfest
                        </a>
                        ,{' '}
                        <a
                            href="https://gssoc.girlscript.tech/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            GirlScript Summer of Code
                        </a>
                        ,{' '}
                        <a
                            href="https://summerofcode.withgoogle.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            Google Summer of Code (GSoC)
                        </a>
                        , and{' '}
                        <LogLink to="/open-source">
                            Outreachy
                        </LogLink>{' '}
                        can provide structured mentorship, <LogLink to="/networking">networking</LogLink> opportunities, and even job prospects.
                    </li>
                    <li>
                        These programs help developers gain recognition in the community, build credibility, and
                        potentially contribute to major industry projects.
                    </li>
                </ul>

                <p>
                    Moreover, open source empowers developers to solve real-world problems, create impactful
                    software, and give back to the community.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        It encourages continuous learning and <LogLink to="/growth">growth</LogLink> while promoting the
                        idea that technology should be accessible, transparent, and collaborative.
                    </li>
                    <li>
                        Whether fixing bugs, adding features, writing documentation, or optimizing performance,
                        every contribution matters.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    By actively engaging in open source, developers not only improve their coding skills but
                    also become part of a global movement that shapes the future of technology.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        "Start contributing today! Check out some open-source projects on{' '}
                        <a
                            target="_blank"
                            href="https://github.com"
                            rel="noreferrer"
                            className="underline underline-offset-4 decoration-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors font-medium"
                        >
                            GitHub
                        </a>{' '}
                        and begin your journey."
                    </p>
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