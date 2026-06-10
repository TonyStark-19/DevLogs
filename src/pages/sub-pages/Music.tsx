// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// music page component
export default function Music() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Music"
        >
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
                        For me, this emotional grounding comes from listening to a wide variety of music across completely different genres and languages. 
                        I frequently cycle through tracks in Hindi, English, Spanish, Punjabi, and Urdu depending on where my head is at.
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
                            href="https://open.spotify.com/user/3144dse2ga5ij26naaky2x3xml7a?si=52e8ae4e5ea74526"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            Spotify
                        </a>{' '}
                        make it easy to explore new genres, discover inspiring tracks, and curate playlists that suit different moods and activities. 
                        You can check out what I’m tracking through my active updates directly on my{' '}
                        <a
                            href="https://open.spotify.com/user/3144dse2ga5ij26naaky2x3xml7a?si=52e8ae4e5ea74526"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            Spotify Profile
                        </a>.
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
                        "Where words fail, music speaks." - Hans Christian Andersen
                    </p>
                }
            />
        </article>
    );
}