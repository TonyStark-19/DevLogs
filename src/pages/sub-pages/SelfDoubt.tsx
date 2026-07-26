// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// self doubt page component
export default function SelfDoubt() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="SelfDoubt"
        >
            {/* Header */}
            <LogHeader
                title="Overcoming Self-Doubt"
                subtitle="Navigating internal uncertainty, leveraging reflection, and sustaining compounding growth through low-energy days."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Self-doubt is a persistent feeling that periodically resurfaces on the journey toward self-improvement.
                    Whether you are striving to improve daily, <LogLink to="/upskilling">upskill</LogLink>, or push your limits,
                    facing moments of deep internal uncertainty is a universal human experience.
                </p>

                <p>
                    Even with an unbroken streak—having logged over 740+ consecutive days of public building across LinkedIn and Twitter,
                    and completing 7 full <LogLink to="/100days-of-code">#100DaysOfCode</LogLink> cycles—I still face days where self-doubt creeps in.
                </p>

                <p>
                    The triggers behind self-doubt are usually predictable:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Energy & Time Depletion:</strong> Days when physical
                        fatigue, life obligations, or <LogLink to="/mental-health">mental health</LogLink> slumps prevent you from executing at your peak volume.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Cognitive Overwhelm:</strong> Tackling complex,
                        unfamiliar system architectures or hitting stubborn <LogLink to="/debugging">debugging</LogLink> walls.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Existential Anxiety:</strong> Worries around
                        fast-evolving technology, market shifts, or AI automation.
                    </li>
                </ul>

                <p>
                    To dismantle self-doubt and keep moving forward, I rely on a few actionable mental frameworks:
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Absolute 1% Rule:</strong> True{" "}
                        <LogLink to="/consistency">consistency</LogLink> does not demand equal output or energy every single day. On
                        low-bandwidth days, doing just 1%—reading a single doc page or committing two lines of clean code—keeps the
                        momentum alive and neutralizes self-doubt.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Look Back at Day 1:</strong> When uncertainty
                        strikes, reflect on how far you've traveled compared to where you started. Comparing your current capabilities against
                        your day-one baseline instantly puts temporary slumps in perspective.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Deliberate Offloading & Reflection:</strong>{" "}
                        Step away for a break, take a breath, and <LogLink to="/writing">write things down</LogLink>. Journaling or logging
                        messy thoughts onto paper brings instant cognitive clarity.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Focusing on Adaptability:</strong> AI may be
                        reshaping industries, but it cannot replace relentless discipline, problem-solving intuition, and an active execution mindset.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    A single off-day or slow afternoon cannot erase months or years of relentless effort. Accept the low-energy days,
                    execute your 1%, and keep moving forward.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Self-doubt is a quiet visitor, not a permanent resident. Trust the trajectory you've built.”
                    </p>
                }
            />
        </article>
    );
}