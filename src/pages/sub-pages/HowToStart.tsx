// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// how to start page component
export default function HowToStart() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="HowToStart"
        >
            {/* Header */}
            <LogHeader
                title="How to start?"
                subtitle="Bridging the gap between dreaming and doing."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Starting something new, whether it's learning to code, picking up a{' '}
                    <LogLink to="/skills">skill</LogLink>, or making a significant life change,
                    is often the hardest step—but it's also the most crucial.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Many people fall into the trap of endlessly manifesting or dreaming about their goals,
                        thinking that the perfect moment will come to begin.
                    </li>
                    <li>
                        While visualization and planning can provide clarity and motivation, they are only the
                        starting blocks, not the race itself. Action is what bridges the gap between dreams and reality.
                    </li>
                    <li>
                        Sitting on the sidelines, overthinking and waiting, can be mentally exhausting because
                        all the energy goes into imagining instead of doing.
                    </li>
                </ul>

                <p>
                    The power lies in simply starting. It's not about having everything figured out from the
                    beginning; it's about taking that first imperfect step.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>Progress and clarity come with time and experience, not before it.</li>
                    <li>
                        Once you take the leap, you'll realize that what once felt overwhelming slowly
                        integrates into your routine, becoming a natural and fulfilling part of your life.
                    </li>
                    <li>
                        My own journey started exactly like this in my first year of college when the C language was first
                        introduced. Driven by pure curiosity, I started learning C extensively through the <a
                            href="https://www.youtube.com/@ApnaCollegeOfficial"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline 
                            underline-offset-4 decoration-zinc-400"
                        >
                            Apna College
                        </a> YouTube
                        channel and ended up building 79 separate programs entirely on my own.
                    </li>
                    <li>
                        You don't have to be perfect or even particularly skilled when you start—you just have to begin.
                    </li>
                </ul>

                <p>
                    A powerful <LogLink to="/mindset">mindset</LogLink> shift is to turn "one day" into "day one." This
                    transformation allows you to stop postponing and start creating.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        The first day might be messy, challenging, or uncertain, but it sets you on a path of
                        progress and builds momentum.
                    </li>
                    <li>
                        I officially started documenting and sharing my engineering progress publicly on LinkedIn on July 9,

                        2024. Just the day before, I had received my laptop and taken a strict oath to show up every single
                        day—and that consistency has remained a permanent part of my life ever since.
                    </li>
                    <li>
                        As you continue, you'll not only learn and <LogLink to="/growth">grow</LogLink>, but you'll also
                        develop resilience, <LogLink to="/discipline">discipline</LogLink>, and confidence.
                    </li>
                    <li>
                        The journey of starting is less about perfection and more about persistence, and before
                        you know it, you'll look back and see how far you've come.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    So stop waiting for the stars to align, and make today the day you begin. Success comes
                    not from waiting for the perfect moment, but from taking the moment and making it perfect.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text="What will your 'Day One' look like? Start now and take the first step!"
            />
        </article>
    );
}