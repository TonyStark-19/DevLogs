// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// tutorials page component
export default function Tutorials() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Tutorials"
        >
            {/* Header */}
            <LogHeader
                title="Tutorials & Tutorial Hell"
                subtitle="Navigating video-based learning, escaping passive consumption, and utilizing tutorials as strategic overviews."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Watching tutorials is easily the most common and popular entry point for learning any technical <LogLink to="/skills">skill</LogLink>.{" "}
                    Platforms like YouTube offer an abundant, free repository of high-quality courses designed to teach virtually any language, framework, or tool you
                    want to master.
                </p>

                <p>
                    However, relying solely on video content introduces a notorious trap that traps thousands of aspiring developers:
                    <strong className="text-zinc-900 dark:text-zinc-100 font-medium"> Tutorial Hell</strong>.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Passive Watching vs. Active Learning:</strong> Tutorial hell occurs when
                        you passively binge video after video, convincing yourself that you are making progress simply because you understand what the instructor is
                        typing on screen. But watching code is not writing code.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Escaping the Loop with Hands-On Execution:</strong> Just as with official
                        {" "}<LogLink to="/documentation">documentation</LogLink>, the only way to escape tutorial hell is through parallel hands-on practice. You must
                        open your code editor, write along, modify the instructor's code, and deliberately introduce errors to see how the system behaves.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Strategic High-Level Overviews:</strong> Lately, I use tutorials primarily
                        as a high-level orientation tool—a quick way to grasp the core concepts and mental model of a new technology. Once I get the big picture, I
                        pivot immediately to official docs and real-world <LogLink to="/project-building">project building</LogLink>.
                    </li>
                </ul>

                <p>
                    With thousands of world-class tutorials literally just a click away completely free of cost, high-quality education is more accessible than ever.
                    The barrier to entry isn't access to knowledge—it's having the <LogLink to="/discipline">discipline</LogLink> to stop watching and start building.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Use tutorials to light the path, but don't stay in the spectator seat. Pause the video, open the terminal, and build something of your own.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Tutorials show you what is possible; hands-on execution makes it yours.”
                    </p>
                }
            />
        </article>
    );
}