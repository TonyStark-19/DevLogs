// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';
import SocialLinks from '../../components/sub-pages/SocialLinks.tsx';
import useDaysStreak from '../../components/utils/useDaysStreak.tsx';

// streak start data constant
const STREAK_START = Date.UTC(2024, 6, 9); // July 9, 2024

// growth page component
export default function Growth() {
    const daysStreak = useDaysStreak(STREAK_START);

    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Growth"
        >
            {/* Header */}
            <LogHeader
                title="Growth"
                subtitle="Nurturing an evolving intersection of deep technical skill and personal evolution."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Growth is an essential aspect of a <LogLink to="/my-journey">developer's journey</LogLink>,
                    encompassing both technical and personal development. In a constantly evolving industry, developers must strive to
                    improve their coding <LogLink to="/skills">skills</LogLink>, <LogLink to="/problem-solving">problem-solving</LogLink> abilities,
                    and adaptability.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Growth is not just about mastering new programming languages or
                        frameworks but also about developing a <LogLink to="/mindset">mindset</LogLink> that embraces challenges, continuous
                        learning, and innovation.
                    </li>
                    <li>
                        A growth-oriented developer seeks opportunities to refine their craft and stay relevant
                        in the ever-changing tech landscape.
                    </li>
                    <li>
                        For me, real growth has been a compounding timeline that I have witnessed firsthand as I coded consistently and shared my
                        progress publicly on <SocialLinks /> for more than{" "}
                        <span
                            className="font-semibold text-zinc-950 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.5 rounded border 
                            border-zinc-200 dark:border-zinc-800"
                        >
                            {daysStreak} days
                        </span>{" "} days straight.
                    </li>
                </ul>

                <p>
                    One of the key drivers of growth is continuous learning. The tech industry is fast-paced,
                    with new tools, methodologies, and best practices emerging regularly.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Developers who actively seek knowledge by reading documentation, taking courses,
                        contributing to <LogLink to="/open-source">open-source</LogLink> projects, or engaging in coding
                        communities accelerate their progress.
                    </li>
                    <li>
                        Learning from mistakes and feedback is also crucial—every bug, error, or failure is an
                        opportunity to gain deeper insights and enhance problem-solving skills.
                    </li>
                    <li>
                        With each consecutive #100DaysOfCode challenge I completed, I noticed a dramatic evolution in my raw expertise—especially across
                        frontend development. Over time, I naturally trained a sharp developer's eye capable of catching alignment errors, layout drops,
                        or design inconsistencies in a single second, while simultaneously building an intuition for cleaner syntax and production best practices.
                    </li>
                </ul>

                <p>
                    Beyond technical expertise, personal growth plays a significant role in a developer's
                    success. <LogLink to="/soft-skills">Soft skills</LogLink> such as communication, teamwork, and{' '}
                    <LogLink to="/time-management">time management</LogLink> are just as important as writing efficient code.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Developers must learn to collaborate effectively with colleagues, present their ideas
                        clearly, and manage workloads efficiently.
                    </li>
                    <li>
                        Embracing a growth mindset—one that views challenges as opportunities rather than
                        obstacles—allows developers to remain motivated, resilient, and open to new possibilities.
                    </li>
                    <li>
                        The overall goal throughout this entire journey has been remarkably simple: showing up to improve by just 1% each and every day.
                        By focusing strictly on that daily marginal gain, real structural growth has naturally followed over time.
                    </li>
                </ul>

                <p>
                    Lastly, growth in a developer's career is often shaped by their
                    willingness to step out of their comfort zone.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Taking on complex <LogLink to="/project-building">projects</LogLink>, exploring different domains,
                        and experimenting with new technologies foster both skill enhancement and confidence.
                    </li>
                    <li>
                        <LogLink to="/networking">Networking</LogLink>, mentorship, and contributing to the tech community
                        further expand opportunities for learning and career advancement.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    A developer who actively seeks growth not only improves their own abilities but also
                    contributes to innovation and positive change in the tech industry.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Stay curious and continue to grow your skills! Check out our resources and start your journey today.”
                    </p>
                }
            />
        </article>
    );
}