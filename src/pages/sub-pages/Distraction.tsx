// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// distraction page component
export default function Distraction() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Distraction"
        >
            {/* Header */}
            <LogHeader
                title="Distractions & Focus"
                subtitle="Identifying productivity leaks, protecting flow states, and building practical defensive systems."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Distraction is the ultimate disruptor of deep focus. Whether you are architecting a feature, debugging an edge case,
                    or studying a complex system, a single unexpected distraction can instantly shatter your flow state and derail hours of potential output.
                </p>

                <p>
                    What often starts as a "quick one-minute check" inevitably spirals into ten, twenty, or thirty wasted minutes.
                    One hard lesson I've learned is that **wasting time is effortless, but investing time intentionally is one of the hardest things to do**.
                </p>

                <p>
                    Protecting your focus requires observing what triggers your distractions and building deliberate countermeasures to neutralize them:
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Digital Notifications:</strong> I disable mobile data/Wi-Fi
                        on my phone and disconnect system notifications on my laptop during deep work sessions to eliminate incoming pings.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Phone Calls:</strong> I keep my phone on silent mode during
                        focus blocks, picking up only if a call is critical or urgent.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Environmental Noise:</strong> I isolate my workspace, set
                        strict Pomodoro-style timers, and pair my work with ambient sounds or <LogLink to="/music">music</LogLink> to lock in concentration.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Mental Fatigue & Burnout:</strong> Sometimes the distraction
                        isn't external—it's your mind protesting from overwork. Recognizing oncoming <LogLink to="/burnout">burnout</LogLink> or{" "}
                        <LogLink to="/exhaustion">exhaustion</LogLink> is vital. We are humans, not robots; stepping away for a real break recharges
                        your baseline cognitive output.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Sustaining long-term productivity isn't about relying on willpower—it's about designing an environment where distractions simply cannot reach you.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Guard your focus fiercely. Environment beats willpower every single time.”
                    </p>
                }
            />
        </article>
    );
}