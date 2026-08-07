// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// import external links
import { Medium } from '../../components/sub-pages/ExternalLinks.tsx';

// writing page component
export default function Writing() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Writing"
        >
            {/* Header */}
            <LogHeader
                title="Writing & Reflection"
                subtitle="Expressing the unsaid, structuring messy thoughts, and documenting life through prose and code."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Writing is a deeply personal medium that I absolutely love. Even though laziness sometimes gets the best of me, whenever I actually sit down and
                    put pen to paper or fingers to the keyboard, my real-world experiences flow out effortlessly.
                </p>

                <p>
                    Writing gives you an incredible vehicle to convey the unsaid—taking chaotic internal feelings and translating them into clear words that someone on
                    the other side of the screen can instantly relate to.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Shaping Chaos into Clarity:</strong> Writing forces your brain to make
                        sense of vague ideas. Whether you are drafting technical <LogLink to="/articles">articles</LogLink> on <Medium />, writing poetry, or keeping
                        a private daily <LogLink to="/journal">journal</LogLink>, it brings structure to your internal world.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Origin of DevLogs:</strong> My <LogLink to="/passion">passion</LogLink>
                        {" "}for writing and self-expression is the exact reason I engineered **DevLogs**—the digital system you are reading right now. It stands as an
                        authentic, living reflection of my coding <LogLink to="/journey">journey</LogLink> and personal life perspectives, spanning roughly 50
                        interconnected log entries.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Creative Outlets:</strong> Beyond engineering documentation, I express my
                        thoughts through poetry and long-form writing. While I've only published a couple of Medium pieces so far due to{" "}
                        <LogLink to="/procrastination">procrastination</LogLink>, I am actively pushing myself to write and publish more{" "}
                        <LogLink to="/consistency">consistently</LogLink>.
                    </li>
                </ul>

                <p>
                    Everyone should build the habit of writing in some form or another. It doesn't matter if it's a technical post, a poem, or a private diary
                    entry—writing helps you unravel life's problems and make sense of your own mind.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Write to clarify your thoughts, document your journey, and leave behind an authentic blueprint of how you navigated the world.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Write to make sense of your own mind—the clarity you give to others is just a byproduct.”
                    </p>
                }
            />
        </article>
    );
}