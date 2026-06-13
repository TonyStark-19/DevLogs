// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';
import SocialLinks from '../../components/sub-pages/SocialLinks.tsx';

// competition page component
export default function Competition() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Competition"
        >
            {/* Header */}
            <LogHeader
                title="Competition"
                subtitle="Reframing the global playing field into a mechanism for self-motivation."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Competition is a driving force that pushes individuals to enhance their <LogLink to="/skills">skills</LogLink>,
                    improve their work ethic, and stay <LogLink to="/consistency">consistent</LogLink> in their{' '}
                    <LogLink to="/my-journey">journey</LogLink>.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        In the tech field, competition is everywhere, and being <LogLink to="/awareness">aware</LogLink> of
                        it can make a significant difference in one's career.
                    </li>
                    <li>
                        Many people underestimate the importance of competition, thinking that their personal
                        progress is enough. However, in a world where thousands of developers are constantly
                        learning, <LogLink to="/project-building">building projects</LogLink>, and improving their skills,
                        staying unaware of this competitive landscape can lead to stagnation.
                    </li>
                    <li>
                        The key is not to fear competition but to embrace it as a motivation to keep moving forward.
                    </li>
                </ul>

                <p>
                    One of the biggest mistakes people make is neglecting platforms like{' '}
                    <SocialLinks />
                    . These are not just social media apps but powerful tools to connect with like-minded individuals,
                    learn from industry experts, and stay updated with the latest trends.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Engaging on these platforms helps in realizing how many people are actively working on
                        challenges like #100DaysOfCode, consistently improving their skills and sharing their progress.
                    </li>
                    <li>
                        This awareness creates a sense of urgency—if others are working hard every day, skipping
                        a day means falling behind. The <LogLink to="/mindset">mindset</LogLink> should be that every
                        single day of effort contributes to long-term success.
                    </li>
                </ul>

                <p>
                    The tech industry is highly competitive because many people are working towards similar
                    goals. Whether it's learning a new programming language, building projects, or mastering
                    algorithms, there are countless others doing the same.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        This should not be discouraging but rather a source of motivation. Instead of comparing
                        progress negatively, one should focus on personal <LogLink to="/growth">growth</LogLink> while
                        using competition as a benchmark.
                    </li>
                    <li>
                        It's natural to feel overwhelmed at times, especially when it seems like others are
                        advancing faster. However, rather than feeling discouraged, one should reflect on their
                        own journey—how much they have grown since they started and how small, consistent
                        efforts accumulate into significant achievements over time.
                    </li>
                </ul>

                <p>
                    The key to navigating competition effectively is consistency, <LogLink to="/discipline">discipline</LogLink>,
                    and a commitment to self-improvement.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Instead of worrying about how far others have come, the focus should be on steady progress.
                    </li>
                    <li>
                        Even <LogLink to="/dedication">dedicating</LogLink> just one percent of effort each day can lead
                        to remarkable improvements over time. The fear of competition fades when one builds a habit of working consistently.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Success in tech—or any field—is not about sprinting ahead in one day but about staying in
                    the race for the long haul. With patience, perseverance, and a growth-oriented mindset,
                    competition becomes less of a burden and more of a tool for self-motivation.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        "Are you making progress today? Start by sharing your journey on{' '}
                        <a
                            target="_blank"
                            href="https://linkedin.com/in/aditya-chandel-223bb3308"
                            rel="noreferrer"
                            className="underline underline-offset-4 decoration-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors font-medium"
                        >
                            LinkedIn
                        </a>
                        !"
                    </p>
                }
            />
        </article>
    );
}