// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// productivity page component
export default function Productivity() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Productivity"
        >
            {/* Header */}
            <LogHeader
                title="Productivity"
                subtitle="Maximizing output by substituting erratic motivation with deliberate systems."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Productivity is a key element in achieving success, both professionally and personally.
                    It is not just about working hard but working efficiently, ensuring that the effort you
                    put in translates into meaningful results.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Productivity is built through <LogLink to="/consistency">consistency</LogLink>,{' '}
                        <LogLink to="/discipline">discipline</LogLink>, and a structured approach to your daily tasks.
                    </li>
                    <li>
                        It is the ability to manage time effectively, prioritize essential tasks, and maintain
                        focus without unnecessary distractions.
                    </li>
                </ul>

                <p>
                    One of the biggest misconceptions about productivity is that it relies on motivation alone.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        In reality, motivation fluctuates, but discipline and commitment keep you moving
                        forward. Setting daily goals, breaking tasks into manageable chunks, and staying
                        dedicated to your craft are what truly drive productivity.
                    </li>
                    <li>
                        It is not about being busy all the time but about making the most of the time you have.
                    </li>
                </ul>

                <p>
                    My own experience of coding daily and sharing progress demonstrates that productivity is a direct result of consistency.
                    Starting back in June 2024, showing up day after day to build a habit pipeline proves how compounding values emerge
                    when you stick to a schedule.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        The more disciplined and committed you are, the higher your output and efficiency become.
                    </li>
                    <li>
                        By setting clear priorities—such as <LogLink to="/dedication">dedicating</LogLink> a few hours
                        each day to coding, learning, or improving a <LogLink to="/skills">skill</LogLink>—you can continuously{' '}
                        <LogLink to="/growth">grow</LogLink> and refine your expertise.
                    </li>
                </ul>

                <p>
                    Moreover, productivity is not just about completing tasks; it also enhances your
                    confidence, <LogLink to="/problem-solving">problem-solving</LogLink> abilities, and professional growth.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        When you actively track your progress, whether through journaling, sharing updates, or
                        reviewing your accomplishments, you develop a growth <LogLink to="/mindset">mindset</LogLink> that
                        keeps pushing you forward.
                    </li>
                </ul>

                <p>
                    Incorporating productivity into your lifestyle ensures long-term benefits. It helps you
                    stay ahead in your career, adapt to new challenges, and make continuous improvements.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Whether you are learning to code, working on a <LogLink to="/project-building">project</LogLink>,
                    or striving towards personal goals, making productivity a habit will lead to greater efficiency, career success, and
                    overall fulfillment.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        "Success is the sum of small efforts, repeated day in and day out." - Robert Collier
                    </p>
                }
            />
        </article>
    );
}