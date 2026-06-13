// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';
import { Portfolio } from '../../components/sub-pages/ExternalLinks.tsx';
import { GitHubLink } from '../../components/sub-pages/SocialLinks.tsx';
import { HtmlCssWebiste } from '../../components/sub-pages/ExternalLinks.tsx';

// project building page component
export default function ProjectBuilding() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="ProjectBuilding"
        >
            {/* Header */}
            <LogHeader
                title="Project building"
                subtitle="Transforming abstract concepts into tangible, real-world applications."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Project building is a vital process for transforming abstract ideas into practical,
                    real-world applications. It plays a key role in showcasing your <LogLink to="/skills">skills</LogLink>,
                    deepening your understanding of the technology, and contributing value to society.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        For beginners, starting with small and straightforward projects, such as mini HTML and
                        CSS designs, is essential.
                    </li>
                    <li>
                        These initial projects, like creating static web pages or simple UI components, help you
                        build confidence and establish a strong foundation.
                    </li>
                    <li>
                        For me, my personal mantra has always been centered around building more and more projects. I find that constantly
                        shipping software is the best way to directly channel my creativity, sharpen my practical problem-solving skills,
                        and bring community-driven project ideas to life.
                    </li>
                </ul>

                <p>
                    As you progress, working on slightly more complex projects, such as cloning popular
                    websites or applications, allows you to mimic professional-level features while learning
                    best practices.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        For instance, replicating platforms like Amazon, Netflix, or Zomato can provide insight
                        into responsive design, animations, and efficient code structuring.
                    </li>
                    <li>
                        Through this process, you also develop <LogLink to="/problem-solving">problem-solving</LogLink> skills
                        by addressing challenges like layout responsiveness, cross-browser compatibility, and UI/UX refinements.
                    </li>
                </ul>

                <p>
                    Once you've gained proficiency, brainstorming unique ideas is the next step. These ideas
                    can tackle real-world problems or address gaps in the current market.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Examples include creating tools for <LogLink to="/mental-health">mental health</LogLink> tracking,
                        community-building platforms, or budget management applications. By doing so, you demonstrate creativity
                        and the ability to innovate.
                    </li>
                    <li>
                        I fully intend to continue building and launching more unique ideas along my journey. You can track my live setups
                        and explore the systems I design directly on my <Portfolio /> or inspect the code repositories over on my <GitHubLink /> Profile.
                    </li>
                </ul>

                <p>
                    Moreover, engaging in collaborative projects or contributing to <LogLink to="/open-source">open-source</LogLink> platforms
                    helps you gain teamwork experience and exposure to diverse coding practices.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Constantly refining your code, exploring emerging technologies, and incorporating user
                        feedback make your projects even more robust.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Ultimately, the continuous cycle of ideating, creating, and refining projects is how you
                    master new technologies, build a strong portfolio, and make meaningful contributions to
                    the tech community.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <div className="space-y-2">
                        <p className='leading-7'>
                            “Ready to start your first project? <br /> Check out my <HtmlCssWebiste /> Website.” <br /> This website is filled with numerous
                            HTML-CSS mini projects to begin your web dev journey.
                        </p>
                        <p className="text-xs text-zinc-400 dark:text-zinc-500 italic">
                            You can star it if you find it useful!
                        </p>
                    </div>
                }
            />
        </article>
    );
}