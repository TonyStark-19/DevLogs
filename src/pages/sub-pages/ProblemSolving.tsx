// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// import external links
import { LeetCodeLink } from '../../components/sub-pages/SocialLinks.tsx';
import { HackerRankLink } from '../../components/sub-pages/SocialLinks.tsx';
import { CodeforcesLink } from '../../components/sub-pages/SocialLinks.tsx';
import { DSAPlaylist } from '../../components/sub-pages/ExternalLinks.tsx';

// problem solving page component
export default function ProblemSolving() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="ProblemSolving"
        >
            {/* Header */}
            <LogHeader
                title="Problem solving"
                subtitle="Deconstructing complex challenges into efficient, logical systems."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Problem-solving is the backbone of programming, essential for tackling real-world challenges and <LogLink to="/project-building">building</LogLink>
                    {" "}impactful solutions.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        It's a <LogLink to="/skills">skill</LogLink> that allows developers to analyze problems, devise efficient solutions, and write code that
                        addresses complex scenarios.
                    </li>
                    <li>
                        Whether it's designing a robust system, optimizing code for better performance, or <LogLink to="/debugging">debugging</LogLink> an issue,
                        problem-solving remains a core competency.
                    </li>
                    <li>
                        Beyond just technical ability, it enhances logical thinking, creativity, and adaptability, making programmers more effective in their roles.
                    </li>
                </ul>

                <p>
                    For aspiring professionals aiming to join top tech companies like Google, Microsoft, or Amazon, problem-solving becomes even more critical.
                    These companies place a strong emphasis on data structures and algorithms (DSA) in their interview processes.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Being proficient in DSA not only improves one's chances of cracking these interviews but also sharpens the ability to write efficient,
                        scalable, and optimized code.
                    </li>
                    <li>
                        Mastery of DSA concepts, such as sorting algorithms, dynamic programming, and graph traversal, equips programmers to think systematically
                        and approach problems from different angles.
                    </li>
                </ul>

                <p>
                    To develop strong problem-solving skills, <LogLink to="/consistency">consistency</LogLink> is key. Platforms like <LeetCodeLink />,{" "}
                    <HackerRankLink />, and <CodeforcesLink /> provide a structured way to practice.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        LeetCode, in particular, offers company-specific problems that mimic real-world coding challenges, helping learners prepare for interviews.
                    </li>
                    <li>
                        HackerRank, on the other hand, is excellent for sharpening proficiency in specific programming languages and understanding their nuances.
                    </li>
                    <li>
                        Regular practice on such platforms allows programmers to identify their weaknesses and gradually improve through perseverance and{" "}
                        <LogLink to="/focus">focus</LogLink>.
                    </li>
                </ul>

                <p>
                    Rather than focusing on solving a large volume of problems, it is more beneficial to prioritize quality over quantity. Deeply understanding a
                    few problems and their solutions builds a stronger foundation than solving many problems superficially.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Taking time to analyze why a solution works and considering alternative approaches fosters critical thinking.
                    </li>
                    <li>
                        Additionally, engaging with <LogLink to="/communities">community</LogLink> discussions and code reviews can provide valuable insights,
                        encouraging collaborative learning and  exposure to diverse perspectives.
                    </li>
                </ul>

                <p>
                    Ultimately, problem-solving is not just a technical skill but a <LogLink to="/mindset">mindset</LogLink>. By committing to regular practice,
                    breaking down challenges, and continuously learning, programmers can develop the <LogLink to="/confidence">confidence</LogLink> and resilience
                    needed to tackle even the most daunting tasks.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Here is the <DSAPlaylist /> which I am following as part of my DSA journey. I highly recommend this channel for everything from  learning DSA
                    to Web Development.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p className='leading-7'>
                        "Bill Gates once said, 'I choose a lazy person to do a hard job because they will find an easy way to do it.' This reflects the power
                        of creative problem-solving in programming."
                    </p>
                }
            />
        </article>
    );
}