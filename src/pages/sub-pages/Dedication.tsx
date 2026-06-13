// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// dedication page component
export default function Dedication() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Dedication"
        >
            {/* Header */}
            <LogHeader
                title="Dedication"
                subtitle="Commitment that bridges fluctuating motivation and long-term triumph."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Dedication is the cornerstone of success in any area of life. It's the ability to commit
                    yourself fully to a task, <LogLink to="/project-building">project</LogLink>, or goal and stick
                    with it, even when faced with challenges or distractions.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Dedication goes beyond interest or motivation—it's about <LogLink to="/discipline">discipline</LogLink> and
                        perseverance. It means showing up <LogLink to="/consistency">consistently</LogLink>, putting in the effort, and
                        focusing on progress, no matter how small, every single day.
                    </li>
                    <li>
                        For me, dedication has been something very important. Even when I used to fall sick, I would tell myself that if I have the energy to
                        scroll through my phone or watch TV, then I can definitely manage at least 30 minutes or an hour of coding.
                    </li>
                </ul>

                <p>
                    One of the most significant benefits of dedication is its power to build momentum.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        When you commit time and energy to learning a <LogLink to="/skills">new skill</LogLink>, working
                        on a project, or improving yourself, the consistent effort leads to tangible <LogLink to="/growth">growth</LogLink>.
                    </li>
                    <li>
                        This steady progress not only increases your confidence but also fuels your passion for
                        the task at hand, creating a positive feedback loop.
                    </li>
                    <li>
                        My own dedication has grown to the point where wherever I go, I take my laptop with me, because I know I will always find pockets of
                        time in between tasks to get some coding done.
                    </li>
                </ul>

                <p>
                    Many people make the mistake of relying solely on motivation, which can fluctuate.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Dedication, on the other hand, is what keeps you moving forward when motivation runs
                        low. It teaches you the value of discipline—sitting down to work on your goals even when
                        you don't feel like it.
                    </li>
                    <li>
                        This habit of persistence is what separates those who achieve their dreams from those
                        who merely wish for them.
                    </li>
                    <li>
                        Even during my college exams, I made sure to code. I firmly believe that you cannot spend an entire day staring blankly at a exam syllabus,
                        so I chose to spend that extra time doing what I love. Coding has completely transformed from a task into a core daily habit now.
                    </li>
                </ul>

                <p>
                    Dedication is not about working endlessly; it's about working intentionally and consistently.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        By dedicating yourself to your goals, you can overcome obstacles, develop valuable
                        skills, and achieve results that might have seemed impossible.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    The key is to take action now—don't just plan or dream, but start doing. Over time, your
                    dedication will compound into meaningful success.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <div className="space-y-2">
                        <p className="font-medium">"Dedication is doing what needs to be done, even when you don't feel like doing it."</p>
                        <p>Ready to apply dedication to your goals? Start Now!</p>
                    </div>
                }
            />
        </article>
    );
}