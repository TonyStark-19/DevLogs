// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// passion page component
export default function Passion() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Passion"
        >
            {/* Header */}
            <LogHeader
                title="Passion & Drive"
                subtitle="Transforming passing interests into core callings and turning daily labor into effortless flow."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Passion is a vital aspect of a fulfilling life. When you approach any endeavor with genuine passion,
                    it produces real-world outcomes that you can tangibly see and measure.
                </p>

                <p>
                    Throughout our lives, we naturally cycle through various interests. An interest is simply an idea—a thought
                    about what you might enjoy or who you could become. But passion is the bridge that converts passing thoughts into deep, active engagement.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Being All In:</strong> Being passionate means immersing
                        yourself completely in your craft. You aren't just dipping your toes in or waiting for external motivation—you are genuinely
                        driven to master the domain.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Making the Grind Effortless:</strong> Passion makes the
                        journey feel effortless—not because the work is easy, but because you never feel bored or resentful while doing it. The hours
                        fly by because the labor itself is deeply rewarding.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Coding as a Core Anchor:</strong> While I have many
                        creative pursuits, coding is my core passion. Driven by <LogLink to="/curiosity">curiosity</LogLink> and inspired by technical
                        icons, I have built software engineering into the very foundation of my daily life. I genuinely cannot imagine a single day
                        without opening an editor and creating something new.
                    </li>
                </ul>

                <p>
                    When you align your daily effort with true passion, <LogLink to="/consistency">consistency</LogLink> stops being a struggle and
                    becomes your natural default state.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Find what excites your mind, immerse yourself in it with full energy, and let your passion turn hard work into an enjoyable journey.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “When passion drives your work, the line between labor and joy completely disappears.”
                    </p>
                }
            />
        </article>
    );
}