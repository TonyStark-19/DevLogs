// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// upskilling page component
export default function Upskilling() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Upskilling"
        >
            {/* Header */}
            <LogHeader
                title="Upskilling in the AI Era"
                subtitle="Leveraging AI tools, broadening your stack, and cultivating continuous curiosity to remain irreplaceable."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Upskilling in the era of Artificial Intelligence is no longer just a good habit—it is the single most critical{" "}
                    <LogLink to="/mindset">mindset</LogLink> a developer can adopt. The tech landscape has undergone a seismic shift, fundamentally altering how we
                    learn, engineer systems, and build software.
                </p>

                <p>
                    On one hand, AI has made upskilling exponentially easier. You are literally a single prompt away from breaking down complex architectural patterns,
                    generating step-by-step implementation roadmaps, or getting instant explanations for unfamiliar concepts.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Death of Siloed Roles:</strong> The industry no longer rewards
                        developers who isolate themselves inside a single niche—like only doing frontend, only writing backend routes, or only designing database
                        schemas. In an environment shaped by automation and industry shifts, companies demand versatile, highly adaptable engineers who understand
                        the full end-to-end lifecycle.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Expanding Your Technical Stack:</strong> The most logical strategy is
                        to continuously broaden your capabilities. Filling your toolkit with full-stack skills, cloud architecture, AI workflows, and system design
                        ensures you remain deeply valuable and resilient against market fluctuations.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Curiosity as the Core Driver:</strong> AI tools provide the leverage,
                        but your inner <LogLink to="/curiosity">curiosity</LogLink> provides the direction. True growth comes from an innate drive to explore new
                        frameworks, test emerging tools, and build projects through hands-on execution.
                    </li>
                </ul>

                <p>
                    For me, upskilling isn't a chore or a defensive chore—it's an exhilarating process. Exploring new technologies and pushing my limits keeps the
                    engineering journey deeply rewarding.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    We live in an era of unprecedented access to knowledge. When the barriers to learning have collapsed, the only remaining limit is how curious
                    and disciplined you choose to be.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “AI won't replace curious engineers—it will amplify the ones who never stop upskilling.”
                    </p>
                }
            />
        </article>
    );
}