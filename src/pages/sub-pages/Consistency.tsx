// import compoenents
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';
import useDaysStreak from '../../components/utils/useDaysStreak.tsx';
import SocialLinks from '../../components/sub-pages/SocialLinks.tsx';

// streak start data constant
const STREAK_START = Date.UTC(2024, 6, 9); // July 9, 2024

// consistency page component
export default function Consistency() {
    const currentYear = new Date().getFullYear();
    const daysStreak = useDaysStreak(STREAK_START);

    return (
        <article className="max-w-3xl mx-auto px-2 py-10" id="Consistency">
            {/* Header */}
            <LogHeader
                title="Consistency"
                subtitle="Small, disciplined efforts compounding daily."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Consistency is a cornerstone of success, and{' '}
                    <LogLink to="/my-journey">my coding journey</LogLink> has been a testament to this principle.
                    Taking on the <strong>#100DaysOfCode</strong> challenge was one of the best decisions
                    I've made—it gave me the structure and accountability to stay on track.
                </p>

                <p>
                    By coding every single day and sharing my progress daily on{' '}
                    <SocialLinks />
                    , the habit became second nature. Currently, I have maintained an active consistency streak of{' '}
                    <span
                        className="font-semibold text-zinc-950 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.5 rounded border 
                        border-zinc-200 dark:border-zinc-800"
                    >
                        {daysStreak} days
                    </span>{" "}
                    sharing updates across social platforms. At first, it required
                    effort and <LogLink to="/discipline">discipline</LogLink>, but over time, it evolved into something I genuinely looked forward to, like a
                    positive addiction. Each day, as I posted my updates and saw my <LogLink to="/growth">growth</LogLink>, I felt motivated to keep going.
                </p>

                <p>
                    Consistency is not just about showing up; it's about showing up with intent and focus. When you commit to improving, even by just one
                    percent every day, you set yourself apart.
                </p>

                <p>
                    Over time, these small, consistent efforts compound, placing you in the top one percent of achievers in your field. It's easy to
                    be motivated on day one, but it's consistency on days 50, 75, or 100 that truly builds expertise and confidence.
                </p>

                <p>
                    For anyone struggling with consistency, my advice is simple: don't overthink it, and don't wait for the “perfect moment.”{" "}
                    <LogLink to="/how-to-start">Start</LogLink> where you are with what you have.
                </p>

                <p>
                    Challenges like <strong>#100DaysOfCode</strong> are invaluable because they create an environment of accountability and progress.
                    The trick is to make it a part of your daily routine—whether it's coding, writing, learning, or any <LogLink to="/skills">skill</LogLink>{" "}
                    you want to improve.
                </p>

                <p>
                    The beauty of consistency is that it rewires your <LogLink to="/mindset">mindset</LogLink>. Over time, it stops being a chore and becomes a
                    lifestyle. With each step forward, you're not just improving your skills; you're also building resilience, self-discipline, and a sense of
                    achievement. It's a powerful cycle—progress fuels motivation, and motivation sustains consistency.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Remember, you don't need to be perfect; you just need to keep moving. Success isn't built on monumental leaps but on the steady and persistent
                    steps you take every single day.
                </p>

            </div>

            {/* Footer */}
            <LogFooter
                text="Inspired to stay consistent? Join the #100DaysOfCode challenge today!"
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
};