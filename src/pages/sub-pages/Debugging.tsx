// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// debugging page component
export default function Debugging() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Debugging"
        >
            {/* Header */}
            <LogHeader
                title="Debugging & Errors"
                subtitle="Why breaking production, solving obscure exceptions, and riding out the frustration cycle is the ultimate teacher."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Debugging is easily the most essential core skill a software engineer must possess. Whenever you write code at scale,
                    errors, unexpected edge cases, and runtime exceptions are guaranteed to show up. In the beginning, this constant resistance
                    can feel intensely frustrating—draining your mental battery, triggering <LogLink to="/burnout">burnout</LogLink>, and making you
                    question whether you should quit coding altogether.
                </p>

                <p>
                    However, the underlying truth is simple: **the more errors you solve, the more software engineering you actually learn**.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Bicycle Analogy:</strong> Debugging is exactly like
                        learning to ride a bicycle for the first time. You fall over repeatedly in the beginning because you haven't developed the muscle
                        memory to balance or handle the frame. Falling early on is completely expected—and with time and persistence, you eventually ride
                        seamlessly without thinking.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Errors as Primary Teachers:</strong> Bugs teach you deeper
                        system mechanics than any polished video <LogLink to="/tutorials">tutorial</LogLink> or static{" "}
                        <LogLink to="/documentation">documentation</LogLink> ever could. They force you to inspect state flows,
                        read stack traces, and understand how systems actually function under failure.
                    </li>
                </ul>

                <p>
                    A real example from my own journey happened while I was learning AWS during my internship at Krutrim Insights. Building a multi-portal
                    architecture introduced hundreds of cryptic cloud errors and configuration bugs.
                </p>

                <p>
                    Navigating through those late-night debugging marathons forced me to master AWS services faster than any passive course ever could.
                    Because I manually resolved every broken boundary, I gained deep operational expertise—now, when something breaks in production, I
                    know precisely which logs, IAM policies, or route handlers to check.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Don't fear broken builds or cryptic error logs. Every resolved stack trace is direct proof that your technical intuition is levelling up.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Errors aren't obstacles in the way of development—resolving them IS the development.”
                    </p>
                }
            />
        </article>
    );
}