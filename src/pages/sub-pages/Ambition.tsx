// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// ambition page component
export default function Ambition() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Ambition"
        >
            {/* Header */}
            <LogHeader
                title="Ambition & Purpose"
                subtitle="Finding your Ikigai, aiming for technical revolution, and driving multidisciplinary growth."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Ambition is the fundamental driver of human life. Having a clear ambition grounds you with a profound
                    sense of purpose. The Japanese concept of <em>Ikigai</em>—the reason that gets you out of bed every morning—captures
                    this truth perfectly: having a clear, actionable purpose transforms everything you do.
                </p>

                <p>
                    For me, coding has evolved into that core ambition. What started with learning the fundamentals of C quickly
                    ignited a deep drive for perfectionism—a constant desire to write cleaner logic, design better architectures,
                    and level up continuously.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Software as the Core Engine:</strong> While
                        I have a wide range of interests—music, <LogLink to="/writing">writing</LogLink>, cosmos research, ancient civilizations,
                        content creation, and podcasting—software engineering remains my baseline anchor. It gives me the perfect platform to
                        express my creativity, channel my <LogLink to="/curiosity">curiosity</LogLink>, and satisfy my drive for perfection.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Aiming for Technical Revolution:</strong> My
                        ambition in software goes far beyond just getting a job or passively participating in the tech industry. My ultimate
                        goal is to spark a real revolution in this field—building transformative systems and leaving a lasting mark on technology.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Winning Mindset:</strong> Competition is
                        everywhere, but someone has to win. Rather than feeling intimidated by the crowded space, I cultivate the mindset
                        to be among those who break through and succeed. Progress might feel slow step-by-step, but that is how true mastery begins.
                    </li>
                </ul>

                <p>
                    Coding serves as my launchpad, but as a creative person, I plan to explore all my passions over time—playing music,
                    sharing stories, and creating content. Having an overarching ambition keeps every piece aligned.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Discover your ambition, lock in with relentless <LogLink to="/consistency">consistency</LogLink> and{" "}
                    <LogLink to="/discipline">discipline</LogLink>, and let your compounding <LogLink to="/growth">growth</LogLink> take care of the rest.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Find what ignites your mind, aim for excellence, and let your ambition shape the future.”
                    </p>
                }
            />
        </article>
    );
}