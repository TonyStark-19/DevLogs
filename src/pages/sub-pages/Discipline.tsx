// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// discipline page component
export default function Discipline() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Discipline"
        >
            {/* Header */}
            <LogHeader
                title="Discipline"
                subtitle="The structural quietude that bridges fluctuating motivation and continuous execution."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Discipline is a cornerstone of success for any developer. It involves the ability to <LogLink to="/focus">focus</LogLink>, stay{" "}
                    <LogLink to="/consistency">consistent</LogLink>, and stick to a routine, even when faced with <LogLink to="/distraction">distractions</LogLink>{" "}
                    or challenges.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        For developers, maintaining discipline means adhering to deadlines, following coding standards, and consistently putting in the effort to
                        improve their <LogLink to="/skills">skills</LogLink>.
                    </li>
                    <li>
                        It requires a strong sense of responsibility, not only to complete tasks but to ensure they are done well. Discipline ensures that
                        developers remain committed to their personal and professional <LogLink to="/growth">growth</LogLink> even when the work gets tough or monotonous.
                    </li>
                </ul>

                <p>
                    For a developer, discipline is essential when <LogLink to="/time-management">managing time</LogLink> and priorities. With complex{' '}
                    <LogLink to="/project-building">projects</LogLink>, multiple tasks, and deadlines to meet, developers must be able to plan their work efficiently.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        They need to balance coding with testing, <LogLink to="/debugging">debugging</LogLink>, and <LogLink to="/documentation">documentation</LogLink>.
                        {" "}Effective time management allows developers to meet project requirements and deadlines without feeling overwhelmed.
                    </li>
                    <li>
                        By staying disciplined in organizing their tasks and avoiding <LogLink to="/procastination">procastination</LogLink>, developers can work with
                        greater <LogLink to="/productivity">productivity</LogLink> and focus, leading to higher-quality results.
                    </li>
                </ul>

                <p>
                    Discipline also plays a major role in learning and improving coding skills. The tech field is vast, with endless languages, frameworks, and
                    tools to master.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Without discipline, a developer may lose focus or jump between too many topics without making significant progress. By committing to daily
                        learning and practice, developers can steadily grow their knowledge base.
                    </li>
                    <li>
                        Whether it's consistently working on coding challenges, reading documentation, or experimenting with new technologies, disciplined learning
                        ensures long-term improvement and mastery of new concepts.
                    </li>
                </ul>

                <p>
                    Lastly, discipline helps developers handle setbacks and maintain resilience. The <LogLink to="/journey">journey</LogLink> of coding is often filled
                    with bugs, errors, and moments of frustration.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        However, a disciplined <LogLink to="/mindset">mindset</LogLink> helps developers approach <LogLink to="/problem-solving">problems</LogLink>{" "}
                        with patience and persistence, enabling them to troubleshoot, debug, and solve issues methodically.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    This disciplined approach to problem-solving builds confidence and strengthens a developer's ability to adapt to new challenges, ultimately leading
                    to greater success in their career.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        "By continuously refining their discipline, developers build habits that allow them to thrive in
                        the long run, becoming not just proficient coders, but leaders in the tech industry."
                    </p>
                }
            />
        </article>
    );
}