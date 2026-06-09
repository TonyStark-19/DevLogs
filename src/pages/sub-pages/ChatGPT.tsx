// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';
import SocialLinks from '../../components/sub-pages/SocialLinks.tsx';

// chatgpt page component
export default function ChatGPT() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="ChatGPT"
        >
            {/* Header */}
            <LogHeader
                title="ChatGPT"
                subtitle="Utilizing artificial intelligence as an intellectual catalyst, not a cognitive crutch."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    ChatGPT is a revolutionary invention that has significantly impacted the tech industry,
                    with billions of users actively using it for various purposes.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        It has made knowledge and assistance more accessible than ever, helping individuals
                        learn new <LogLink to="/skills">skills</LogLink>, <LogLink to="/problem-solving">solve problems</LogLink>,
                        and streamline workflows.
                    </li>
                    <li>
                        However, its widespread use has also sparked debates, especially among developers. One
                        of the most common mistakes developers make is relying too much on ChatGPT to generate
                        entire codebases instead of using it as a learning tool.
                    </li>
                    <li>
                        When someone copies and pastes code without understanding it, they miss out on the
                        essential process of problem-solving, debugging, and gaining real experience.
                    </li>
                </ul>

                <p>
                    For developers, ChatGPT should be seen as an assistant rather than a substitute for
                    learning. If used correctly, it can help in debugging, providing explanations,
                    optimizing code, and offering guidance on best practices.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        The true value of learning to code comes from writing, experimenting, and
                        troubleshooting on your own.
                    </li>
                    <li>
                        This is why simply asking ChatGPT to generate an entire HTML, CSS, or JavaScript{' '}
                        <LogLink to="/project-building">project</LogLink> is counterproductive—it bypasses the
                        learning process and creates a false sense of progress.
                    </li>
                </ul>

                <p>
                    A balanced approach is necessary to maximize ChatGPT's potential. For instance, using it
                    to summarize concepts, clarify doubts, or break down complex topics can enhance
                    understanding.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Additionally, it can be a valuable tool for brainstorming ideas, improving efficiency,
                        and gaining new perspectives. The key is to ensure that AI complements human effort
                        rather than replacing it.
                    </li>
                    <li>
                        For me, I use it for brainstorming ideas, reflections on thoughts, and creating daily posts for sharing my progress on <SocialLinks />.{" "}
                        I also bring other powerful tools like Gemini and Claude into my creative workflow to get different perspectives.
                    </li>
                </ul>

                <p>
                    Ultimately, ChatGPT is a powerful tool, but its effectiveness depends on how it is used.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Developers and learners must be mindful of their dependency on AI and focus on
                        continuous practice, experimentation, and problem-solving.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    True expertise in coding—or any skill—comes from hands-on experience, persistence, and
                    curiosity. Using ChatGPT wisely, as a guide rather than a crutch, will lead to genuine
                    learning and long-term success.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        "How do you use ChatGPT in your learning journey? Share your thoughts in my{' '}
                        <a
                            target="_blank"
                            href="https://twitter.com/iamaditya_3"
                            rel="noreferrer"
                            className="underline underline-offset-4 decoration-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors font-medium"
                        >
                            Twitter
                        </a>
                        "
                    </p>
                }
            />
        </article>
    );
}