// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// mental health page component
export default function MentalHealth() {
    const currentYear = new Date().getFullYear();

    return (
        <article className="max-w-3xl mx-auto px-2 py-10" id="MentalHealth">
            {/* Header */}
            <LogHeader
                title="Mental health"
                subtitle="Nurturing a stable mind as the foundation for sustainable growth."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Mental health is one of the most important aspects of overall well-being, yet it is often
                    overlooked. A stable mind is essential for <LogLink to="/productivity">productivity</LogLink>,
                    happiness, and balance in life.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        When mental health is not in good shape, it can lead to feelings of exhaustion, lack of
                        motivation, and an inability to focus on personal or professional goals.
                    </li>
                    <li>
                        Many people struggle with mental health challenges, but the key
                        to overcoming them lies in self-improvement, self-care, and maintaining a positive{' '}
                        <LogLink to="/mindset">mindset.</LogLink>
                    </li>
                </ul>

                <p>
                    Instead of getting stuck in negative thoughts or circumstances beyond our control, the
                    best approach is to keep moving forward by focusing on <LogLink to="/growth">personal growth.</LogLink>
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Upskilling, learning new things, and setting goals can give a sense of purpose and
                        direction. Productivity plays a major role in maintaining mental stability—when we feel
                        accomplished, our confidence grows, and our mental health improves.
                    </li>
                    <li>
                        However, it's also important to understand that bad days are normal, and it's okay to
                        take breaks when needed. The goal should always be progress, not perfection.
                    </li>
                </ul>

                <p>
                    Developing daily habits that support mental well-being is essential. Meditation,
                    exercise, and listening to <LogLink to="/music">music</LogLink> can be great ways to clear the
                    mind and reduce stress.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Engaging in creative activities, journaling thoughts, or even maintaining an online
                        presence by sharing progress, like on{' '}
                        <a
                            href="https://linkedin.com/in/aditya-chandel-223bb3308"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            LinkedIn
                        </a>{' '}
                        or{' '}
                        <a
                            href="https://twitter.com/iamaditya_3"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            Twitter
                        </a>
                        , can provide a sense of fulfillment and connection.
                    </li>
                    <li>
                        Surrounding yourself with positivity, whether through people, content, or experiences,
                        also plays a crucial role in mental resilience.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    At the core of mental well-being is self-prioritization. When we make ourselves a
                    priority, we naturally cultivate a mindset of self-care, growth, and continuous
                    improvement. Instead of waiting for circumstances to change, we take charge of our own lives
                    to become the best version of ourselves.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “What do you do to maintain good mental health? Let me know in my{' '}
                        <a
                            target="_blank"
                            href="https://twitter.com/iamaditya_3"
                            rel="noreferrer"
                            className="underline underline-offset-4 decoration-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors font-medium"
                        >
                            Twitter
                        </a>
                        ”
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