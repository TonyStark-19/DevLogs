// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// best practices page component
export default function BestPractices() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="BestPractices"
        >
            {/* Header */}
            <LogHeader
                title="Engineering Best Practices"
                subtitle="Refining code architecture, repository hygiene, directory structure, and portfolio standards over time."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Best practices aren't learned overnight—they accumulate through months of hands-on building, trial, and error.
                    Revisiting past projects to apply newly acquired engineering standards is one of the most effective ways to accelerate technical{" "}
                    <LogLink to="/growth">growth</LogLink>.
                </p>

                <p>
                    Here is a curated list of non-negotiable best practices I follow to maintain clean code bases, professional GitHub repositories, and
                    production-grade applications:
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Repository Visibility & Detailed Documentation:</strong> Keep
                        GitHub repositories private until a project is genuinely complete and polished to make a strong impression. Every public repository
                        should include a comprehensive <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">README.md</code>{" "}
                        detailing setup instructions, features, and tech stacks.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Atomic & Descriptive Git Commits:</strong> Write meaningful
                        commit messages and avoid mega-commits that bundle frontend and backend changes together. Smaller, isolated commits make production
                        failures dramatically easier to <LogLink to="/debugging">debug</LogLink>.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Formatting & Code Cleanliness:</strong> Enforce standard tools
                        like Prettier for consistent code formatting. Break long lines of code to prevent horizontal scrolling, and purge default
                        boilerplates (e.g., unused Vite/React icons) before pushing.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Standardized Project Architecture:</strong>
                        <ul className="list-circle pl-5 mt-2 space-y-1 text-sm">
                            <li><em className="text-zinc-800 dark:text-zinc-200">Vanilla Web:</em> Separate concerns into{" "}
                                <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">/css</code>,{" "}
                                <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">/js</code>,{" "}
                                and <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">/html</code> directories,
                                keeping <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">index.html</code> at the root.
                            </li>
                            <li><em className="text-zinc-800 dark:text-zinc-200">Full-Stack Repositories:</em> Structure frontend and backend into
                                dedicated subdirectories while keeping global config files{" "}
                                (<code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">.gitignore</code>,
                                <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">LICENSE</code>,
                                <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">README.md</code>) at root level.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">React Component Standards:</strong> Modularize UI elements
                        into reusable components, eliminate redundant inline markup using high-order functions like{" "}
                        <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">.map()</code>, and always set custom favicons
                        for deployed sites.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Portfolio & Documentation Alignment:</strong> Continuously
                        update your developer portfolio as your <LogLink to="/skills">skills</LogLink> evolve. Building high-level projects while maintaining
                        an outdated portfolio creates a mismatch that hurts professional credibility.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Clean structure, disciplined git hygiene, and polished UI details separate amateur projects from professional-grade software.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Write clean code today so your future self—and your team—will thank you tomorrow.”
                    </p>
                }
            />
        </article>
    );
}