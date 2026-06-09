// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// music page component
export default function Music() {
    const currentYear = new Date().getFullYear();

    return (
        <article className="max-w-3xl mx-auto px-2 py-10" id="Music">
            {/* Header */}
            <LogHeader
                title="Music"
                subtitle="Setting the rhythm for focus, emotional balance, and creative flow."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Music is not just a form of entertainment; it is a powerful tool that influences
                    emotions, enhances focus, and improves <LogLink to="/mental-health">mental well-being.</LogLink>
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        It has played a significant role in my life, helping me stay mentally strong and
                        emotionally balanced.
                    </li>
                    <li>
                        The ability of music to regulate emotions makes it a great companion, especially during
                        stressful or overwhelming moments. It provides comfort, motivation, and even
                        inspiration, making daily tasks more enjoyable.
                    </li>
                </ul>

                <p>
                    During long coding sessions, which often last for hours, music acts as a driving force,
                    keeping me engaged and preventing <LogLink to="/burnout">burnout.</LogLink>
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        It sets a rhythm that aligns with my workflow, allowing me to code with passion and{' '}
                        <LogLink to="/consistency">consistency.</LogLink> Working on projects while listening to music
                        creates an immersive experience, helping me stay focused and <LogLink to="/productivity">productive.</LogLink>
                    </li>
                    <li>
                        However, <LogLink to="/problem-solving">when solving DSA problems</LogLink> or learning new
                        concepts that require deep concentration, I avoid listening to music to ensure maximum focus.
                    </li>
                </ul>

                <p>
                    Beyond work, music has the power to uplift moods, reduce stress, and provide a sense of
                    relaxation.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Whether it's instrumental tracks, lo-fi beats, or energetic playlists, the right kind of
                        music enhances creativity and productivity.
                    </li>
                    <li>
                        Platforms like{' '}
                        <a
                            href="https://open.spotify.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            Spotify
                        </a>{' '}
                        make it easy to explore new genres, discover inspiring tracks, and curate playlists that suit different moods and activities.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Overall, music is an integral part of my daily routine. It helps me push through
                    challenges, maintain consistency, and enjoy the process of learning and creating. Incorporating
                    it into your workflow can make a significant difference in maintaining motivation and efficiency.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        "Where words fail, music speaks." – Hans Christian Andersen
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