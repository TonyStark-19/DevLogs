// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// exhaustion page component
export default function Exhaustion() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Exhaustion"
        >
            {/* Header */}
            <LogHeader
                title="Exhaustion"
                subtitle="Deconstructing the mental drain of infinite debugging blocks and building baseline defensive habits."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Writing software is a highly intense intellectual activity. It demands an immense amount of deep <LogLink to="/focus">focus</LogLink>, unbroken
                    {" "}<LogLink to="/dedication">dedication</LogLink>, and sheer hours behind the screen. Because your brain is constantly parsing state machines,
                    handling data structures, and calculating edge cases, it inevitably leads to heavy mental exhaustion.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Sitting in the exact same spot for hours straight silently drains your mental batteries. You might not be moving physically, but your brain
                        is running a marathon, leaving you completely spent by evening.
                    </li>
                    <li>
                        And that is just during regular, smooth feature development. When you get hit by an elusive, breaking production error—god save you, literally.
                    </li>
                    <li>
                        Deep-dive debugging sessions can stretch for hours or days, completely destroying your energy. Yet, you cannot run away from it; tracking down
                        bugs is the absolute core of what it means to be a software engineer.
                    </li>
                </ul>

                <p>
                    You cannot eliminate exhaustion entirely—it is a natural byproduct of doing hard intellectual work. However, you can ruthlessly minimize it by
                    practicing smart defensive strategies. Here are the personal pillars and perspectives I use to protect my flow state:
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Leveraging Multilingual Flow:</strong> I almost always isten to{" "}
                        <LogLink to="/music">music</LogLink> while building. It acts as an anchor for my focus and pushes me into a hyper-efficient flow state. While
                        I can code in total silence, music makes the long hours highly sustainable. If silence works better for your brain, stick to that completely.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Intuitive Break Cadence:</strong> The moment I feel a wave of exhaustion
                        or oncoming <LogLink to="/burnout">burnout</LogLink> creeping in, I step away. I take a quick walk to change my physical environment and let
                        my mind wander.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Physical Hydration:</strong> It sounds incredibly basic, but dehydration
                        directly impairs cognitive function. Keeping a water bottle on the desk and staying hydrated prevents baseline fatigue.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Iterative Project Slicing:</strong> I break complex features into tiny,
                        manageable segments. Coding iteratively allows me to log small wins, lowering the cognitive load required to build out massive systems.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Next-Day Debugging Rule:</strong> If a tough bug has eaten up hours of
                        my day and my focus is completely shot, I stop. I refuse to stare at code with a fried brain. I close the editor and attack the issue the next
                        morning with a fresh slate—more often than not, the solution appears within five minutes.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    The secret to maintaining a long-term <LogLink to="/consistency">consistency</LogLink> streak isn't grinding until you collapse. It's knowing
                    exactly when to step back, recharge your system, and use healthy development guardrails to keep your mind sharp for the next day's build.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Protect your energy. Writing clean code requires a clear, rested mind.”
                    </p>
                }
            />
        </article>
    );
}