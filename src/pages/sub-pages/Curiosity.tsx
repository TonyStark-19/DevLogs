// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// curiosity page component
export default function Curiosity() {
    const currentYear = new Date().getFullYear();

    return (
        <article className="max-w-3xl mx-auto px-2 py-10" id="Curiosity">
            {/* Header */}
            <LogHeader
                title="Curiosity"
                subtitle="The internal engine that converts passive observation into active innovation."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Curiosity is one of the most powerful traits a developer or any individual can possess.
                    It is the driving force behind exploration, learning, and innovation.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        In the fast-evolving tech world, curiosity pushes developers to ask "why" and "how,"
                        leading to deeper <LogLink to="/problem-solving">problem-solving skills</LogLink> and creative thinking.
                    </li>
                    <li>
                        A curious <LogLink to="/mindset">mindset</LogLink> encourages individuals to go beyond just
                        writing code—they strive to understand how systems work, why certain approaches are better, and how they can
                        optimize their solutions. This thirst for knowledge helps them stay ahead in their field and continuously improve.
                    </li>
                </ul>

                <p>
                    For a developer, curiosity fuels continuous learning. Technology never stands still—new
                    programming languages, frameworks, and best practices emerge regularly.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Those who embrace curiosity seek out new trends, experiment with new tools, and
                        challenge themselves with complex problems.
                    </li>
                    <li>
                        Whether it’s reading documentation, watching tutorials, or diving into{' '}
                        <LogLink to="/open-source">open-source</LogLink>{' '}
                        <LogLink to="/project-building">projects</LogLink>, curious individuals take proactive steps to
                        expand their <LogLink to="/skills">skill set.</LogLink>
                    </li>
                    <li>
                        Instead of fearing challenges, they view them as opportunities to <LogLink to="/growth">grow</LogLink>,
                        making them more adaptable and resilient in the face of change.
                    </li>
                </ul>

                <p>
                    Curiosity also enhances problem-solving abilities. A naturally curious person does not
                    stop at surface-level fixes but digs deeper to understand the root cause of an issue.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        They explore different perspectives, ask insightful questions, and experiment with
                        multiple solutions before settling on the best one.
                    </li>
                    <li>
                        This mindset is invaluable in debugging, troubleshooting, and optimizing code. It also
                        fosters a sense of excitement rather than frustration when facing obstacles, turning
                        difficulties into engaging learning experiences.
                    </li>
                </ul>

                <p>
                    Beyond technical growth, curiosity strengthens personal and professional relationships.
                    Curious individuals actively listen, seek to understand different viewpoints, and engage
                    in meaningful discussions.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        This makes them better teammates, mentors, and leaders. In a collaborative environment,
                        curiosity encourages knowledge sharing, innovation, and collective problem-solving.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Whether in tech or any other field, those who nurture curiosity never stop learning,
                    evolving, and discovering new possibilities, making them invaluable contributors to any
                    team or community.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        "Stay curious! Explore new technologies, contribute to open-source projects, and never stop learning."
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