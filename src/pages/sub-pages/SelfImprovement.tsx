// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// self improvement page component
export default function SelfImprovement() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="SelfImprovement"
        >
            {/* Header */}
            <LogHeader
                title="Self-Improvement & Evolution"
                subtitle="Listening to your inner truth, conquering daily friction, and building the absolute best version of yourself."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Self-improvement is one of the most vital aspects of human life. As the days roll on, committing to continuous,
                    incremental personal evolution is the single best way to live with purpose and fulfillment.
                </p>

                <p>
                    I find immense excitement in the fact that you can level up in virtually any domain simply by applying
                    unwavering <LogLink to="/consistency">consistency</LogLink> and <LogLink to="/discipline">discipline</LogLink>.
                    My focus is entirely on the 1% rule—aiming to compound daily growth while measuring myself against only one benchmark: **the person I was yesterday**.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Listening to the First Voice:</strong> I strongly
                        believe in trusting your primary internal voice—it acts as an uncorrupted source of truth. It instantly knows what is right,
                        what needs fixing, and where you are falling short.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Conquering the Friction Voice:</strong> Whenever your
                        core voice tells you to go to the <LogLink to="/physical-health">gym</LogLink> or open your editor, a secondary voice creeps
                        in telling you to procrastinate and rest. That second voice is pure resistance and laziness—victory comes from immediately
                        executing on the first voice.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Authentic Self-Love vs. Real Action:</strong> While
                        self-love and self-acceptance are essential, they should never become excuses to accept unhealthy habits. True self-love
                        means taking radical responsibility for your physical health, mental baseline, and technical capabilities.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Multidisciplinary Curiosity:</strong> My ultimate
                        goal is to become the absolute best version of myself. Backed by intense <LogLink to="/curiosity">curiosity</LogLink>,
                        I have a deep urge to learn everything—from complex computer science and distributed engineering to ancient history,
                        music, and physical fitness.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Listen to your inner truth, ignore the excuses, take it one day at a time, and actively build the exact person you always
                    envisioned becoming.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Compete with no one except yesterday's version of yourself. Improve by 1% daily.”
                    </p>
                }
            />
        </article>
    );
}