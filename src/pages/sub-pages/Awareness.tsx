// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';
import SocialLinks from '../../components/sub-pages/SocialLinks.tsx';
import { LinkedInLink } from '../../components/sub-pages/SocialLinks.tsx';

// awareness page component
export default function Awareness() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Awareness"
        >
            {/* Header */}
            <LogHeader
                title="Awareness"
                subtitle="Developing an early understanding of reality to escape complacency."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Awareness is the foundation of <LogLink to="/growth">growth</LogLink>, success, and progress in any
                    field, especially in the fast-paced world of technology.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        It is not just about knowing something exists—it is about understanding the level of{" "}
                        <LogLink to="/competition">competition</LogLink>, the opportunities available, and the steps you need to take to stay ahead.
                    </li>
                    <li>
                        The earlier you develop this awareness, the better equipped you are to make informed
                        decisions, set clear goals, and take strategic action.
                    </li>
                </ul>

                <p>
                    Many people delay their <LogLink to="/my-journey">journey</LogLink> simply because they lack awareness
                    of what others are doing and how much effort is required to succeed.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        In tech, thousands of developers worldwide are constantly learning, coding,
                        contributing to <LogLink to="/open-source">open-source</LogLink>{' '}
                        <LogLink to="/project-building">projects</LogLink>, and improving their{' '}
                        <LogLink to="/problem-solving">problem-solving</LogLink> <LogLink to="/skills">skills.</LogLink>
                    </li>
                    <li>
                        Without realizing this, one might remain complacent, thinking that casual learning is enough.
                    </li>
                    <li>
                        However, the truth is that the top 1% of successful individuals in any domain
                        are those who recognized the competition early and made conscious efforts to stay ahead.
                    </li>
                </ul>

                <p>
                    Social media platforms like{' '}
                    <SocialLinks /> {" "}
                    are excellent sources of awareness. By following industry experts, engaging with coding communities, and
                    observing how others are making progress, you can gain insights into what is needed to grow.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Seeing others <LogLink to="/consistency">consistently</LogLink> learning, sharing their projects,
                        and contributing to open-source can serve as both motivation and a wake-up call to take your own journey more seriously.
                    </li>
                    <li>
                        And for me, I got the awareness of coding via <LinkedInLink /> and started learning coding extensively in my college's first year.
                    </li>
                </ul>

                <p>
                    Awareness also helps you build a strategic approach to learning. Instead of randomly
                    picking up skills, you can identify the most in-demand technologies, understand industry
                    trends, and tailor your learning path accordingly.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Moreover, it creates a sense of urgency—when you realize the pace at which the industry
                        is evolving, you understand the need to adapt quickly and stay relevant.
                    </li>
                </ul>

                <p>
                    The sooner you start, the greater your chances of standing out in the competitive landscape.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        If you delay too much, catching up becomes more difficult, and opportunities may slip
                        away. However, it is never too late to begin.
                    </li>
                    <li>
                        The key is to embrace awareness, take action immediately, and build consistency in your learning journey.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Awareness fuels motivation, motivation leads to <LogLink to="/discipline">discipline</LogLink>, and
                    discipline ultimately results in success. So, surround yourself with the right information, engage with
                    communities, and make sure you are always learning, growing, and staying ahead.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <div className="space-y-2">
                        <p className="font-medium text-sm text-zinc-400 dark:text-zinc-500">
                            "Stay aware, stay ahead. The more you learn, the more you grow!"
                        </p>
                    </div>
                }
            />
        </article>
    );
}