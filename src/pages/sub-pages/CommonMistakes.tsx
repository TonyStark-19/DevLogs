// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// common mistakes page component
export default function CommonMistakes() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="CommonMistakes"
        >
            {/* Header */}
            <LogHeader
                title="Common Mistakes to Avoid"
                subtitle="Deconstructing early traps, overcoming superficial metrics, and setting the groundwork for long-term mastery."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    When starting any ambitious journey—whether in personal growth or software engineering—falling into predictable traps
                    can quietly derail your momentum. Recognizing these common pitfalls early is key to accelerating progress and staying on track.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Relying on Motivation Over Discipline:</strong> Motivation is
                        fickle; relying on it guarantees inconsistency. Shift from waiting for inspiration to building{" "}
                        <LogLink to="/discipline">discipline</LogLink> and focusing on 1% daily compounding progress.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Searching for the "Perfect" Roadmap:</strong> Waiting for the
                        ideal resources or "stars to align" is pure procrastination. Shift your mental model from <em>"One Day"</em> to <em>"Day One"</em>—start
                        immediately with whatever tools you have.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Comparing Journeys & Ignoring Your Pace:</strong> External
                        comparison is toxic. Everyone operates at a unique pace. Measure yourself strictly against who you were yesterday, not someone
                        else's highlight reel.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Passive Bingeing Without Intentional Building:</strong> Watching
                        endless <LogLink to="/tutorials">tutorials</LogLink> without building active projects leads directly to tutorial hell. When copying
                        code—even with AI assistance—always understand line-by-line what is changing and why.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Hiding Progress & Missing Out on Networking:</strong> Don't
                        feel self-conscious about sharing small daily wins online. Public updates on LinkedIn and Twitter build accountability and expand
                        your professional <LogLink to="/networking">network</LogLink> for future referrals.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Chasing External Validation & Likes:</strong> Social metrics
                        shouldn't dictate your worth. Treat public posts as a personal digital log of proof-of-work. Execute for your own growth, accepting
                        feedback only from experienced mentors who matter.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Fearing Competition & Neglecting Refactoring:</strong> Competition
                        simply proves demand—adopt the mindset to stand out among top performers. Make coding a non-negotiable habit (even bringing a laptop on
                        trips), and continually revisit old codebases to apply clean code principles.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Failing to Protect Time:</strong> Wasting time on short-form
                        feeds is effortless, but dedicating an hour to deep work takes intentional effort. Guard your calendar from{" "}
                        <LogLink to="/distraction">distractions</LogLink> fiercely.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Avoid waiting for perfection. Start where you are, build with intent, refactor your past work, and treat your journey as an
                    unbroken daily commitment to growth.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Stop waiting for Day One. Start now, refine as you build, and outwork your past self.”
                    </p>
                }
            />
        </article>
    );
}