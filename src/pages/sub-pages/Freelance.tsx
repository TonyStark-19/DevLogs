// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// freelance page component
export default function Freelance() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Freelance"
        >
            {/* Header */}
            <LogHeader
                title="Freelancing"
                subtitle="Turning practical web engineering skills into client value, real-world income, and standard-setting websites."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    In any <LogLink to="/skills">skill</LogLink>-based field, freelancing naturally enters the picture as your craft matures. As you spend time
                    learning, <LogLink to="/project-building">building projects</LogLink>, and constantly <LogLink to="/upskilling">upskilling</LogLink>, your technical
                    capabilities grow until you become fully capable of solving high-stakes <LogLink to="/problem-solving">problems</LogLink> for real-world clients.
                </p>

                <p>
                    In my journey, freelancing became a reality as I honed my web development skills and leveraged my <LogLink to="/networking">networking</LogLink>{" "}
                    channels. Landing that first freelance gig is an incredible feeling—and receiving your first payout from a client for software you built from
                    scratch is an unmatched milestone.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Power of Strategic Networking:</strong> You must constantly nurture
                        your network to offer services to individuals, businesses, and early-stage startups. There is always a high demand for developers who can
                        reliably ship modern web infrastructure.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The AI Misconception Window:</strong> Despite the rapid rise of AI tools,
                        many clients still struggle to get production-grade websites that meet fundamental engineering standards. Companies often pay massive sums yet
                        end up with poorly structured, generic platforms.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Developer's Eye:</strong> This gap creates a huge window of opportunity
                        for developers who work closely with code. Having a sharp "developer's eye" means understanding layout responsiveness, clean performance,
                        dynamic state management, and real user experience—something AI prompt outputs cannot replace.
                    </li>
                </ul>

                <p>
                    Over time, delivering real value builds deep <LogLink to="/confidence">confidence</LogLink>. You learn how to approach clients professionally,
                    negotiate scope, and establish a reliable side income doing what you love.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Freelancing isn't just about the extra income—it's about testing your skills in high-stakes client environments, building practical solutions that
                    solve real business problems, and taking pride in craftsmanship.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Build with a developer's eye, deliver real client value, and let your network do the rest.”
                    </p>
                }
            />
        </article>
    );
}