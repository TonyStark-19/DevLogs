// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// git page component
export default function Git() {
    const currentYear = new Date().getFullYear();

    return (
        <article className="max-w-3xl mx-auto px-2 py-10" id="Git">
            {/* Header */}
            <LogHeader
                title="Git & GitHub"
                subtitle="Mastering version control, team collaboration, and the open-source ecosystem."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Git and GitHub are powerful tools that play a crucial role in modern software
                    development, offering version control, collaboration, and{' '}
                    <LogLink to="/open-source">open-source contribution</LogLink> opportunities.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Git is a distributed version control system that allows developers to track changes in
                        their code, revert to previous versions, and collaborate seamlessly.
                    </li>
                    <li>
                        GitHub, built on Git, provides a cloud-based platform where developers can store,
                        manage, and share their code in a structured and secure manner. It is widely used by
                        individuals, teams, and large companies to maintain{' '}
                        <LogLink to="/project-building">projects</LogLink> efficiently.
                    </li>
                </ul>

                <p>
                    One of GitHub’s most significant advantages is its role in collaboration and open-source
                    development. Many major tech companies and organizations host their repositories on
                    GitHub, allowing developers worldwide to contribute to their projects.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        This ecosystem fosters innovation, as developers can review existing codebases, identify
                        bugs, create issues, and submit pull requests to suggest improvements or add new features.
                    </li>
                    <li>
                        Contributing to open-source projects not only helps enhance software quality but also
                        enables developers to improve their <LogLink to="/skills">coding skills</LogLink>, understand
                        real-world codebases, and build a strong <LogLink to="/networking">professional network.</LogLink>
                    </li>
                </ul>

                <p>
                    Beyond open-source, GitHub is invaluable for teamwork in software development. It
                    provides features like branches, pull requests, and code reviews, making collaboration seamless.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Teams can work on different features simultaneously without interfering with each
                        other’s progress, ensuring a smooth development workflow.
                    </li>
                    <li>
                        Additionally, GitHub Actions and CI/CD integrations automate testing and deployment,
                        streamlining the development process.
                    </li>
                </ul>

                <p>
                    Understanding a codebase is an essential skill for any developer, and GitHub provides an
                    excellent environment to practice this.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        By exploring repositories, analyzing structured code, and making contributions,
                        developers can gain practical experience and upskill themselves.
                    </li>
                    <li>
                        Whether you're working on web development, mobile applications, AI/ML projects, or any
                        other programming-related field, GitHub serves as a hub where developers connect,
                        collaborate, and build impactful projects together.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    By actively using GitHub, you not only improve your coding and collaboration skills but
                    also increase your visibility in the developer community. It acts as a portfolio
                    showcase of your projects, contributions, and expertise when applying for jobs or internships.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        Here is my{' '}
                        <a
                            target="_blank"
                            href="https://github.com/TonyStark-19"
                            rel="noreferrer"
                            className="underline underline-offset-4 decoration-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors font-medium"
                        >
                            GitHub
                        </a>
                        . Let's connect here :)
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