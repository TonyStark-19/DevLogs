// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// networking page component
export default function Networking() {
    const currentYear = new Date().getFullYear();

    return (
        <article className="max-w-3xl mx-auto px-2 py-10" id="Networking">
            {/* Header */}
            <LogHeader
                title="Networking"
                subtitle="Cultivating connections that amplify opportunity and mutual support."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Networking is an essential component for <LogLink to="/growth">career growth</LogLink>, 
                    particularly in fields like tech. It allows you to connect with like-minded individuals 
                    who share similar goals, ideas, and <LogLink to="/skills">skills.</LogLink>
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Through networking, you can collaborate on <LogLink to="/project-building">projects</LogLink>, 
                        exchange knowledge, and gain valuable insights from others who are on a similar{' '}
                        <LogLink to="/my-journey">journey.</LogLink>
                    </li>
                    <li>
                        Platforms like{' '}
                        <a 
                            href="https://linkedin.com/in/aditya-chandel-223bb3308" 
                            target="_blank" 
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            LinkedIn
                        </a>{' '}
                        and{' '}
                        <a 
                            href="https://twitter.com/iamaditya_3" 
                            target="_blank" 
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            Twitter
                        </a>{' '}
                        are powerful tools for this, enabling you to showcase your progress, share your work, 
                        and engage with a community of professionals who can help you grow.
                    </li>
                </ul>

                <p>
                    By <LogLink to="/consistency">consistently</LogLink> sharing your learning and achievements on 
                    these platforms, you not only improve your visibility but also attract the attention of 
                    potential collaborators, mentors, and even employers.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Networking can lead to opportunities that you wouldn't find otherwise, such as project 
                        collaborations or job referrals.
                    </li>
                    <li>
                        In fact, many people land jobs or get hired through referrals within their network 
                        because others have seen their <LogLink to="/dedication">dedication</LogLink> and growth firsthand.
                    </li>
                </ul>

                <p>
                    As you build a strong network of connections, you're essentially building a support 
                    system that can offer advice, guidance, and opportunities that will accelerate your career.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        The key is to stay consistent, be authentic in your interactions, and actively seek to 
                        add value to the people you connect with.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    By doing so, you'll create relationships that go beyond just professional gain and foster 
                    a community where you can continuously learn and grow.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <div className="space-y-2">
                        <p className="font-medium">"Your network is your net worth." – Porter Gale</p>
                        <p>
                            “Start building your network today! Connect with me on{' '}
                            <a 
                                target="_blank" 
                                href="https://linkedin.com/in/aditya-chandel-223bb3308" 
                                rel="noreferrer"
                                className="underline underline-offset-4 decoration-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
                            >
                                LinkedIn
                            </a>{' '}
                            or{' '}
                            <a 
                                target="_blank" 
                                href="https://twitter.com/iamaditya_3" 
                                rel="noreferrer"
                                className="underline underline-offset-4 decoration-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
                            >
                                Twitter
                            </a>
                            , and let's learn and grow together.”
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