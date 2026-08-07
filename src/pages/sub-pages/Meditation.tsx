// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// meditation page component
export default function Meditation() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Meditation"
        >
            {/* Header */}
            <LogHeader
                title="Meditation"
                subtitle="Calming a racing mind, regulating deep emotions, and protecting inner peace amidst a fast-paced world."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Meditation has been present here and there in my life. Even though I haven't been as strictly <LogLink to="/consistency">consistent</LogLink>{" "}
                    with it lately, it remains hands-down the single <LogLink to="/best-practice">best practice</LogLink> anyone can adopt to silence mental noise and
                    calm an overactive mind.
                </p>

                <p>
                    Given my personal history with <LogLink to="/mental-health">mental health</LogLink> struggles, meditation has acted as a vital anchor. It gives me
                    the space to regulate intense emotions, quiet a mind that is constantly racing with thousands of thoughts, and re-center my{" "}
                    <LogLink to="/awareness">awareness</LogLink> back onto my breath.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Catalyst:</strong> My interest in meditation was unexpectedly sparked
                        while listening to a horror podcast. The speakers began breaking down the core benefits of sitting in silence—explaining human aura, positive
                        energy frequencies, and entering a true flow state. Something about that conversation clicked deeply, and I started practicing right away.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">My Routine:</strong> I practice breath-focused meditation. I set a timer,
                        play soothing *bhajans* softly in the background, and sit in absolute stillness. My personal record so far is holding that state of deep
                        stillness for 14 continuous minutes.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Morning Anchor:</strong> In today's hyper-connected, high-stress
                        environment, weaving meditation into your morning routine sets an unbeatable tone. It allows you to tackle demanding engineering tasks from a
                        grounded, proactive mental state rather than a reactive one.
                    </li>
                </ul>

                <p>
                    Whether you are debugging complex codebases, navigating daily life stressors, or managing cognitive <LogLink to="/exhaustion">exhaustion</LogLink>,
                    protecting your mental well-being must always be a top priority.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Your mind is the engine behind everything you create. Taking even ten minutes a day to sit in stillness isn't a luxury—it's essential maintenance
                    for your mental peace.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Silence the noise outside, focus on the breath, and guard your mental peace above all else.”
                    </p>
                }
            />
        </article>
    );
}