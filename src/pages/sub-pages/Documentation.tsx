// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// documentation page component
export default function Documentation() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Documentation"
        >
            {/* Header */}
            <LogHeader
                title="Documentation"
                subtitle="Unlocking deep domain knowledge through official docs, hands-on experimentation, and active execution."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Gaining true expertise in software engineering requires moving beyond surface-level video tutorials
                    and diving directly into extensive technical documentation. Official docs serve as the primary source of truth,
                    offering the depth required to truly master any technology or framework.
                </p>

                <p>
                    For me, documentation has been an invaluable asset for upskilling and expanding my technical{" "}
                    <LogLink to="/skills">skills</LogLink>. However, my core methodology for processing docs relies on
                    one non-negotiable rule: **learning by doing**.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Pitfall of Passive Reading:</strong> It is easy to skim
                        through documentation and feel like you understand everything. But passively reading docs can be dry and misleading—it creates a
                        false sense of competence until you actually open an editor.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Hands-On Execution:</strong> Sitting down and manually typing
                        out code alongside official documentation is the only way concepts truly stick. When you actively write, test, and break things, the
                        knowledge transfers from abstract theory into permanent muscle memory.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Experimentation over Memorization:</strong> Official docs are an
                        abundant repository of edge cases and core APIs. When you combine documentation with real-world <LogLink to="/project-building">project
                            building</LogLink> and experimentation, the knowledge remains with you forever.
                    </li>
                </ul>

                <p>
                    Industry-standard resources like the **MDN Web Docs** for HTML, CSS, and JavaScript, **react.dev** for modern React patterns,
                    and the **Tailwind CSS docs** are prime examples of world-class documentation that streamline the learning curve when paired with practical execution.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Don't just read the documentation to passively consume information—open your editor, run the code, experiment with edge cases, and build as you read.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Documentation provides the blueprint, but execution builds the mastery.”
                    </p>
                }
            />
        </article>
    );
}