// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// motivate page component
export default function Motivation() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Motivation"
        >
            {/* Header */}
            <LogHeader
                title="Motivation"
                subtitle="The initial spark of adrenaline that transforms a quiet spark into a lifelong pursuit."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Motivation is the internal driving force that constantly pushes you to execute, create, and sustain
                    the things you do. Whenever you decide to build something new or alter the trajectory of your life,
                    motivation is the initial fuel that bridges the gap between idle wishing and true action.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        It is the mechanism that helps you kick off a brand new <LogLink to="/my-journey">journey</LogLink>, filling your system with raw adrenaline,
                        clarity, and an intense passion that makes you say, *“Yes, I want to conquer this.”*
                    </li>
                    <li>
                        Without that fundamental surge of inspiration, breaking out of old routines or stepping out of comfort zones becomes nearly impossible. It
                        is a necessary catalyst for baseline human ambition.
                    </li>
                </ul>

                <p>
                    However, my raw, honest take on motivation is that its long-term mechanics are heavily misunderstood.
                    While it is an incredibly useful tool to ignite your momentum, relying on it to finish the race is a trap.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Motivation is a highly volatile state of mind. It shows up in massive waves at the absolute beginning of your project, but naturally
                        fluctuates, drops, and deserts you over time when the initial novelty fades.
                    </li>
                    <li>
                        That is where true <LogLink to="/discipline">discipline</LogLink> takes over. Motivation gets you to the starting line, but discipline
                        is the unyielding framework that keeps you showing up with radical <LogLink to="/consistency">consistency</LogLink> when the adrenaline
                        runs dry. It is discipline, not mood, that locks in tangible results.
                    </li>
                </ul>

                <p>
                    Motivation does not exist in a vacuum; it is pulled and extracted from deeply personal, various sources.
                    Sometimes, it is your external limitations, your friction points, or an underlying desire to escape a current reality that forces you to build
                    something out of the box.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        For me, my deepest source of motivation didn't come from watching generic tech videos. It was extracted directly from my real-world
                        battles with <LogLink to="/mental-health">mental health</LogLink>, a highly restrictive home environment, and an aggressive,
                        insatiable <LogLink to="/curiosity">curiosity</LogLink> to master everything I touch.
                    </li>
                    <li>
                        Those intense constraints didn't break my momentum—they became the exact fire that pushed me to keep my head down, sit at the desk,
                        and maintain an untouchable coding streak across my engineering logs.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Use motivation for what it is: a brilliant, powerful spark to break inertia. But once the fire is lit,
                    consign your progress entirely to your daily discipline. Don't wait until you feel like coding to open the laptop—show up because it's who you are.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Action breeds motivation, not the other way around. Take the first step today.”
                    </p>
                }
            />
        </article>
    );
}