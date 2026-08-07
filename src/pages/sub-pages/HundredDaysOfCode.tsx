// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// import external links
import { LinkedInLink } from '../../components/sub-pages/SocialLinks.tsx';
import SocialLinks from '../../components/sub-pages/SocialLinks.tsx';

// import day streak helper
import useDaysStreak from '../../components/utils/useDaysStreak.tsx';

// streak start data constant
const STREAK_START = Date.UTC(2024, 6, 9); // July 9, 2024

// 100daysOfCode page component
export default function HundredDaysOfCode() {
    const daysStreak = useDaysStreak(STREAK_START);

    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="100daysOfCode"
        >
            {/* Header */}
            <LogHeader
                title="#100DaysOfCode"
                subtitle="The foundational pillar that transformed a simple daily challenge into an unbroken multi-year streak."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    The <strong className="text-zinc-900 dark:text-zinc-100 font-medium">#100DaysOfCode</strong> challenge
                    has been the core pillar of my <LogLink to="/100DaysOfCode">developer journey</LogLink>. Back in 2024, when I
                    first created my <LinkedInLink /> profile, I used to scroll past engineers posting their daily progress under the challenge tag. I
                    constantly wondered when I would finally step up, enter the arena, and start documenting my own builds like that.
                </p>

                <p>
                    On <strong className="text-zinc-900 dark:text-zinc-100 font-medium">July 8, 2024</strong>, everything shifted—I got my very
                    first laptop. Knowing the financial sacrifices my parents made to buy it for me, I took a quiet oath that exact day: I would launch
                    my coding journey and document every single step publicly using the #100DaysOfCode framework.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Since taking that oath, it has grown into <strong className="text-zinc-900 dark:text-zinc-100 font-medium">{daysStreak} consecutive
                            days</strong> of uninterrupted <LogLink to="/consistency">consistency</LogLink>.
                    </li>
                    <li>
                        That means I have completed over {daysStreak.toString()[0]} full, back-to-back #100DaysOfCode cycles without skipping a single
                        day—writing code, <LogLink to="/debugging">debugging</LogLink> systems, and logging progress every 24 hours.
                    </li>
                </ul>

                <p>
                    Doing something daily for 100 days straight is not as simple as it sounds. It shapes and sharpens your technical{" "}
                    <LogLink to="/skills">skills</LogLink> in a way that people who <LogLink to="/upskilling">upskill</LogLink> intermittently on random
                    weekends simply cannot grasp.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The 1% Rule:</strong> My objective was never to build a
                        massive enterprise system overnight. It was simply to <LogLink to="/focus">focus</LogLink> on improving by 1% each day—learning
                        a concept, <LogLink to="/project-building"> building a project</LogLink>, or delivering <LogLink to="/open-source">open-source
                            contributions</LogLink>.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Public Accountability:</strong> Sharing every update with my{" "}
                        <SocialLinks /> networks created a feedback loop that turned <LogLink to="/discipline">discipline</LogLink> into default behavior.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Automatic Habit Loops:</strong> Over time, the challenge
                        stopped feeling like an obligation. Nowadays, when I wrap up day 100 of a cycle, I simply write a reflection log and instantly
                        launch Day 1 of the next block.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    If you want to achieve mastery in any discipline, structured public challenges like #100DaysOfCode are the ultimate forcing function.
                    They take a massive, overwhelming goal and break it down into simple, compounding daily wins.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “{daysStreak} days and counting. Don't break the chain.”
                    </p>
                }
            />
        </article>
    );
}