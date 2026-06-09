// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// journey page component
export default function Journey() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Journey"
        >
            {/* Header */}
            <LogHeader
                title="Journey"
                subtitle="Trusting the process and celebrating compounding daily victories."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    The journey of becoming a great developer is not just about writing code; it's about
                    resilience, patience, and continuous <LogLink to="/growth">growth.</LogLink>
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Once you take that first step with <LogLink to="/consistency">consistency</LogLink> and{' '}
                        <LogLink to="/discipline">discipline</LogLink>, coding starts becoming an
                        integral part of your life. However, along this path, doubts and challenges are inevitable.
                    </li>
                    <li>
                        You might question whether you can make an impact in the tech field or compete with
                        others in this highly <LogLink to="/competition">competitive</LogLink> space.
                    </li>
                    <li>
                        There will be days when you struggle to grasp new concepts, when progress feels slow, or
                        when your motivation fades. But these moments of self-doubt are a natural part of any
                        learning journey.
                    </li>
                </ul>

                <p>
                    The key to overcoming these challenges is to trust the process and remind yourself of how
                    far you've already come.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Growth doesn't happen overnight—it happens through small, consistent efforts every single day.
                    </li>
                    <li>
                        Even when progress feels invisible, your <LogLink to="/dedication">dedication</LogLink> is shaping
                        you into a better developer. Whenever you feel stuck, look back at your early{' '}
                        <LogLink to="/project-building">projects</LogLink>, reflect on the
                        knowledge you've gained, and take pride in your journey.
                    </li>
                </ul>

                <p>
                    Success in coding, as in life, is not about sprinting to the finish line; it's about
                    showing up daily and improving bit by bit.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Instead of being overwhelmed by the bigger picture, focus on daily progress—writing even
                        one line of code, <LogLink to="/problem-solving">solving one problem</LogLink>, or learning one
                        new concept is a step forward.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Stay committed, push through self-doubt, and embrace the process. Keep refining your
                    skills, keep sharing your progress, and keep building. With persistence, consistency,
                    and belief in yourself, you won't just be a developer—you'll be a great one, capable of
                    making a real impact in the tech world.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        "Start your own journey today by coding at least 1% daily!"
                    </p>
                }
            />
        </article>
    );
}