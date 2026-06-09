// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// burnout page component
export default function Burnout() {
    const currentYear = new Date().getFullYear();

    return (
        <article className="max-w-3xl mx-auto px-2 py-10" id="Burnout">
            {/* Header */}
            <LogHeader
                title="Burnout"
                subtitle="Managing cognitive fatigue and stress to protect your long-term momentum."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Burnout is a significant challenge, particularly in the tech field, where developers and
                    programmers spend long hours in front of their screens, continuously working on{' '}
                    <LogLink to="/problem-solving">complex problems.</LogLink>
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        It occurs when prolonged <LogLink to="/mental-health">mental</LogLink> and physical stress leads
                        to exhaustion, reduced efficiency, and an inability to focus. Over time, burnout can make even passionate
                        coders lose motivation, affecting both <LogLink to="/productivity">productivity</LogLink> and overall well-being.
                    </li>
                    <li>
                        One of the best ways to combat burnout is by maintaining a strong sense of ambition and
                        passion for coding, as genuine interest in the work can keep motivation levels high.
                    </li>
                </ul>

                <p>
                    Staying hydrated is another crucial factor in preventing burnout. Drinking water{' '}
                    <LogLink to="/consistency">consistently</LogLink> helps regulate brain function, improve
                    concentration, and prevent fatigue. Dehydration can lead to headaches, sluggishness, and decreased cognitive ability, which
                    can worsen burnout.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Additionally, incorporating <LogLink to="/music">music</LogLink> into coding sessions can enhance
                        productivity by creating a relaxing atmosphere, improving mood, and making work more enjoyable.
                    </li>
                    <li>
                        Many developers find that listening to instrumental music or ambient sounds can help
                        them stay engaged and focused without being distracted.
                    </li>
                </ul>

                <p>
                    However, even with these preventive measures, burnout can still occur. In such cases,
                    taking short breaks of five to ten minutes between coding sessions can help reset the
                    mind and reduce mental strain.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Stepping away from the screen, stretching, or taking a brief walk can make a significant
                        difference in maintaining focus and efficiency.
                    </li>
                    <li>
                        Another highly effective method to prevent and overcome burnout is meditation.
                        Practicing meditation for ten to twenty minutes daily enhances mental clarity, reduces
                        stress, and improves focus, allowing developers to handle prolonged work sessions more effectively.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    By implementing these strategies—staying passionate, hydrated, engaged through music,
                    taking breaks, and meditating—developers can maintain their energy, avoid burnout, and
                    continue to work efficiently while taking care of their mental well-being.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        "Take care of your body and mind—coding is a marathon, not a sprint!"
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