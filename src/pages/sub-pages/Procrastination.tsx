// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// procastination page component
export default function Procastination() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Procrastination"
        >
            {/* Header */}
            <LogHeader
                title="Procrastination"
                subtitle="Breaking the loop of delay and reclaiming your potential."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Procrastination is often seen as a harmless habit, but its impact on <LogLink to="/productivity">productivity</LogLink>, learning, and{' '}
                    <LogLink to="/growth">personal growth</LogLink> can be significant. It is the tendency to delay tasks despite knowing that doing so might lead
                    to stress, poor performance, or missed opportunities.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        At its core, procrastination is fueled by a mix of fear, perfectionism, or even a false sense of comfort in having more time than is
                        actually available.
                    </li>
                    <li>
                        However, this habit can trap individuals in a cycle of unpreparedness and mediocrity, as last-minute efforts rarely match the quality of
                        work achieved through <LogLink to="/consistency">consistent</LogLink>, deliberate action.
                    </li>
                </ul>

                <p>
                    The danger of procrastination lies not just in missed deadlines but also in the diminished opportunities for learning and reflection.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Rushing to complete tasks at the eleventh hour often results in work that lacks depth and creativity.
                    </li>
                    <li>
                        Moreover, the stress caused by procrastination can have a ripple effect, reducing <LogLink to="/confidence">confidence</LogLink> and{" "}
                        <LogLink to="/motivation">motivation</LogLink> for future endeavors. It's a self-sabotaging loop that feeds on itself, making it harder
                        to break free.
                    </li>
                </ul>

                <p>
                    Overcoming procrastination begins with understanding its root causes. Sometimes, the task may seem overwhelming, leading to avoidance.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        In such cases, breaking the task into smaller, manageable chunks can make it feel less daunting. Starting small builds momentum, which is
                        often all that's needed to keep going.
                    </li>
                    <li>
                        Additionally, setting realistic deadlines and celebrating progress along the way can transform the act of starting into a rewarding experience.
                    </li>
                </ul>

                <p>
                    A key strategy to combat procrastination is reframing how you view time. Instead of seeing deadlines as distant targets, treat every day as an
                    opportunity to make incremental progress.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Adopting the <LogLink to="/mindset">mindset</LogLink> of “<LogLink to="/how-to-start">starting now</LogLink>” rather than “someday” shifts the
                        focus from waiting to acting.
                    </li>
                    <li>
                        This approach not only improves the quality of the work but also reduces stress, as tasks are completed at a steady and thoughtful pace.
                    </li>
                </ul>

                <p>
                    In my own experience, the realization that procrastination led to subpar results was a wake-up call.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        I learned that starting early not only provided me with enough time to refine my work but also allowed me to explore ideas and approaches
                        that I would have missed if I had rushed.
                    </li>
                    <li>
                        The output was not just better—it was more meaningful, and the process itself became a learning <LogLink to="/my-journey">journey</LogLink>.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    By choosing to act today rather than waiting for tomorrow, you take the first step toward breaking free from procrastination and achieving
                    your fullest potential.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text="Start today! What task will you tackle now?"
            />
        </article>
    );
}