// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// growth page component
export default function Growth() {
    const currentYear = new Date().getFullYear();

    return (
        <article className="max-w-3xl mx-auto px-2 py-10" id="Growth">
            {/* Header */}
            <LogHeader
                title="Growth"
                subtitle="Nurturing an evolving intersection of deep technical skill and personal evolution."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Growth is an essential aspect of a <LogLink to="/my-journey">developer's journey</LogLink>,
                    encompassing both technical and personal development. In a constantly evolving industry, developers must strive to
                    improve their coding <LogLink to="/skills">skills</LogLink>, <LogLink to="/problem-solving">problem-solving</LogLink> abilities,
                    and adaptability.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Growth is not just about mastering new programming languages or
                        frameworks but also about developing a <LogLink to="/mindset">mindset</LogLink> that embraces challenges, continuous
                        learning, and innovation.
                    </li>
                    <li>
                        A growth-oriented developer seeks opportunities to refine their craft and stay relevant
                        in the ever-changing tech landscape.
                    </li>
                </ul>

                <p>
                    One of the key drivers of growth is continuous learning. The tech industry is fast-paced,
                    with new tools, methodologies, and best practices emerging regularly.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Developers who actively seek knowledge by reading documentation, taking courses,
                        contributing to <LogLink to="/open-source">open-source</LogLink> projects, or engaging in coding
                        communities accelerate their progress.
                    </li>
                    <li>
                        Learning from mistakes and feedback is also crucial—every bug, error, or failure is an
                        opportunity to gain deeper insights and enhance problem-solving skills.
                    </li>
                </ul>

                <p>
                    Beyond technical expertise, personal growth plays a significant role in a developer's
                    success. <LogLink to="/soft-skills">Soft skills</LogLink> such as communication, teamwork, and{' '}
                    <LogLink to="/time-management">time management</LogLink> are just as important as writing efficient code.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Developers must learn to collaborate effectively with colleagues, present their ideas
                        clearly, and manage workloads efficiently.
                    </li>
                    <li>
                        Embracing a growth mindset—one that views challenges as opportunities rather than
                        obstacles—allows developers to remain motivated, resilient, and open to new possibilities.
                    </li>
                </ul>

                <p>
                    Lastly, growth in a developer's career is often shaped by their
                    willingness to step out of their comfort zone.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Taking on complex <LogLink to="/project-building">projects</LogLink>, exploring different domains,
                        and experimenting with new technologies foster both skill enhancement and confidence.
                    </li>
                    <li>
                        <LogLink to="/networking">Networking</LogLink>, mentorship, and contributing to the tech community
                        further expand opportunities for learning and career advancement.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    A developer who actively seeks growth not only improves their own abilities but also
                    contributes to innovation and positive change in the tech industry.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Stay curious and continue to grow your skills! Check out our resources and start your journey today.”
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