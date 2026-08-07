// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';
import { Portfolio } from '../../components/sub-pages/ExternalLinks.tsx';

// communities page component
export default function Communities() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Communities"
        >
            {/* Header */}
            <LogHeader
                title="Communities"
                subtitle="Stepping into shared environments where collective momentum compounds individual growth."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    A community is fundamentally about building an ecosystem that accelerates the growth of everyone who is part of it. It functions as a shared
                    space where you don't just progress in isolation, but find like-minded people and grind in an environment where{" "}
                    <LogLink to="/consistency">consistency</LogLink> and real-time <LogLink to="/growth">growth</LogLink> flow naturally.
                </p>

                <p>
                    In the modern tech and engineering landscape, different platforms serve unique roles in bringing people together to learn and collaborate:
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The LinkedIn Ecosystem:</strong> Acts as your primary professional node,
                        helping you map out a powerful professional <LogLink to="/networking">network</LogLink>, uncover hidden job opportunities, and showcase your
                        daily shipping cadence.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Twitter (X) Dev-Community:</strong> Delivers the same high-value
                        connectivity but at a much more casual, raw, and public level. While some noise or toxic trends can occasionally pollute the space, it remains
                        unmatched for unfiltered technical discourse.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The GitHub Graph:</strong> The ultimate foundation for global development.
                        It drives <LogLink to="/open-source">open-source contributions</LogLink>, enables distributed cross-border collaboration, and provides the
                        transparent ledger where true engineering authority is verified.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The YouTube Classroom:</strong> Democratizes education globally, acting
                        as an open university where you can master complex distributed architectures, frameworks, or new languages from your bedroom completely free
                        of cost.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Discord Hubs:</strong> Real-time coordination centers that allow you
                        to instantly <LogLink to="/debugging">debug</LogLink> problems with peers, exchange deep domain knowledge, collaborate on active builds, and
                        learn something new every single day.
                    </li>
                </ul>

                <p>
                    But simply absorbing value as a passive participant within a community is only one half of the equation. The real shift happens when you actively
                    choose to give back. Sharing what you know not only clears the path for beginners stepping onto 'Day One', but it anchors your own{" "}
                    <LogLink to="/my-journey">journey</LogLink> with a profound sense of purpose.
                </p>

                <p>
                    For me, this philosophy dictates exactly how I write code. The majority of the application architectures I architect are intentionally
                    **community-centered**. I am deeply <LogLink to="/passion">passionate</LogLink> about engineering tools, open platforms, and responsive websites
                    designed specifically to lift beginners and provide experienced engineers with clear, executable <LogLink to="/inspiration">inspiration</LogLink>.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    You can explore the breakdown, codebase layouts, and full executions of my community-focused builds directly over on my <Portfolio />. Don't
                    just exist inside a network—build the infrastructure that helps it thrive.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “We lift by climbing, but we ensure the path stays clear by reaching back down.”
                    </p>
                }
            />
        </article>
    );
}