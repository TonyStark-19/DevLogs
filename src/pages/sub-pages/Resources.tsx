// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// import external links
import { ApnaCollege } from '../../components/sub-pages/ExternalLinks.tsx';
import { ChaiOrCode } from '../../components/sub-pages/ExternalLinks.tsx';
import { Roadmap } from '../../components/sub-pages/ExternalLinks.tsx';
import { Medium } from '../../components/sub-pages/ExternalLinks.tsx';
import { DevStash } from '../../components/sub-pages/ExternalLinks.tsx';

// resources page component
export default function Resources() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Resources"
        >
            {/* Header */}
            <LogHeader
                title="Resources & Learning Hubs"
                subtitle="Curated platforms, official documentation, channel recommendations, and community repositories."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Whether you are starting out as a beginner or levelling up as an experienced developer, finding top-tier learning resources can feel overwhelming.
                    Having a reliable, highly curated collection of tools and references accelerates the learning curve and provides clear direction.
                </p>

                <p>
                    Here are the essential resources that I rely on heavily throughout my engineering journey:
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">YouTube Channels:</strong> For structured video explanations, high-quality
                        course walkthroughs, and practical breakdowns, channels like <ApnaCollege /> and <ChaiOrCode /> have been invaluable.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Official Technical Documentation:</strong> Cleanly maintained official{" "}
                        <LogLink to="/documentation">documentation</LogLink> remains the single best source of truth for deep architectural understanding and API nuances.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Roadmaps & Upskilling:</strong> I use <Roadmap /> for structured learning
                        paths. It offers detailed step-by-step visual tracks across various domains to keep your <LogLink to="/upskilling">upskilling</LogLink> goals
                        organized.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Medium & Technical Blogs:</strong> Reading real-world experiences and
                        engineering breakdowns on <Medium /> helps clarify complex concepts through practical, developer-driven perspectives.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">GitHub Repositories:</strong> Open-source repositories holding curated
                        resource lists, code samples, and <LogLink to='/communities'>community</LogLink> guides are goldmines for discovering{" "}
                        <LogLink to="/best-practices">best practices</LogLink>.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">DevStash (Personal Resource Hub):</strong> To organize all of these assets
                        in one place, I built <DevStash /> — my personal, community-driven resource hub. It categorizes verified documentation and{" "}
                        <LogLink to="/tutorials">tutorials</LogLink> across different tech stacks.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Having great resources is only half the equation—combining them with active execution and hands-on building is what completes the learning process.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Gather the best tools, follow structured roadmaps, and build continuously.”
                    </p>
                }
            />
        </article>
    );
}