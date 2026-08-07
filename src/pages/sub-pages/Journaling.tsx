// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// journaling page component
export default function Journaling() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Journaling"
        >
            {/* Header */}
            <LogHeader
                title="Journaling"
                subtitle="Clearing mental clouds, processing unsaid emotions, and giving purpose to everyday experiences."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Journaling is a powerful practice that allows us to organize the chaotic thoughts accumulating in our minds over time. It gives us a structured
                    outlet to give voice to unspoken emotions, process fatigue, and navigate daily stress.
                </p>

                <p>
                    In day-to-day life, unexpressed thoughts quickly form heavy mental clouds. Demanding schedules and constant cognitive load add friction to your
                    mind. Putting pen to paper—or fingers to keyboard—acts as a valve to release that built-up tension and bring clarity to your experiences.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Navigating Mental Health:</strong> Given my ongoing history with{" "}
                        <LogLink to="/mental-health">mental health</LogLink> struggles, journaling has been a grounding practice. While{" "}
                        <LogLink to="/exhaustion">exhaustion</LogLink> or <LogLink to="/procrastination">procrastination</LogLink> sometimes stops me from writing every
                        single day, whenever I do sit down to log my thoughts, it brings immediate mental relief.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Documenting the Engineering Journey:</strong>{" "}
                        <LogLink to="/writing">Writing</LogLink> about my daily coding experiences adds deep meaning to <LogLink to="/my-journey">my journey</LogLink>.
                        {" "}It transforms raw technical labor into an authentic narrative worth reflecting on and sharing with others.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">DevLogs as a Public Journal:</strong> The very platform you are reading
                        this on—**DevLogs**—functions as my personal open journal. It is a dedicated space where I break down my perspectives on engineering,
                        personal <LogLink to="/growth">growth</LogLink>, and life.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    You don't need perfect prose or daily perfection to journal. Simply sitting down to externalize your thoughts is enough to clear the mental noise
                    and restore peace of mind.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Write to clear the noise inside. A journal isn't for perfection—it's for perspective.”
                    </p>
                }
            />
        </article>
    );
}