// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// comfort zone page component
export default function ComfortZone() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="ComfortZone"
        >
            {/* Header */}
            <LogHeader
                title="Comfort Zone"
                subtitle="Why safe spaces stall progress, and how embracing discomfort unlocks exponential technical and personal growth."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Your comfort zone is a safe harbor. Inside it, everything feels predictable and completely under your control—there is
                    no fear, no anxiety, and no unexpected friction. It is a space where you feel secure because you are executing only on
                    the things you already know inside out.
                </p>

                <p>
                    However, comfort is the enemy of <LogLink to="/growth">growth</LogLink>. Staying strictly within what is comfortable creates a
                    false sense of mastery while silently stalling your evolution.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Coding Bubble:</strong> In software engineering, writing
                        code only within your familiar frameworks and small side-projects limits your potential. True technical leaps happen when you step
                        directly into large, intimidating environments like <LogLink to="/open-source">open source</LogLink>.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Navigating Unfamiliar Codebases:</strong> Diving into a massive,
                        messy, unfamiliar codebase that doesn't follow your personal conventions forces your brain to adapt. Debugging and contributing to
                        architecture built by strangers is where senior-level engineering instincts are forged.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Collaborative Perspective Shifts:</strong> Working within teams
                        exposes you to new paradigms, code reviews, and industry-standard practices that you would never encounter in isolation.
                    </li>
                </ul>

                <p>
                    This dynamic isn't exclusive to code—it applies to life. We naturally crave comfort because it gives us an illusion of total control.
                    Yet, taking a single uncomfortable step is often all it takes to completely alter the course of your life.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Physical Health & Discipline:</strong> For me, walking into
                        the <LogLink to="/physical-health">gym</LogLink> was initially uncomfortable, but it became a pivotal decision for my physical and
                        mental resilience.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Networking & Confidence:</strong> Pushing myself to attend
                        public events and tech meetups felt daunting, but stepping out of my shell unlocked deep <LogLink to="/networking">networking</LogLink>{" "}
                        channels and built real self-confidence.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Growth and comfort cannot coexist. To expand your possibilities, you must intentionally lean into the friction of the unknown.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Step out of the safe harbor. Real progress lives on the other side of discomfort.”
                    </p>
                }
            />
        </article>
    );
}