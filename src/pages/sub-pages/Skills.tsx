// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// skills page component
export default function Skills() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Skills"
        >
            {/* Header */}
            <LogHeader
                title="Skills"
                subtitle="Nurturing real-world capability as the ultimate equity in a modern workforce."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Skills are the backbone of success in today's fast-paced and ever-evolving tech industry.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Unlike in the past, where degrees played a major role in securing jobs, the modern
                        workforce values hands-on expertise and <LogLink to="/problem-solving">problem-solving</LogLink> abilities over mere qualifications.
                    </li>
                    <li>
                        Without strong technical skills, landing a job or sustaining a career in the tech field
                        becomes challenging, as companies seek professionals who can contribute effectively from day one.
                    </li>
                </ul>

                <p>
                    The key to skill development lies in daily, <LogLink to="/discipline">disciplined</LogLink> effort.
                    Even dedicating just one percent of your time each day to improving a skill can lead to significant progress over time.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Mastery doesn't come overnight—it requires continuous learning, regular practice, and
                        hands-on <LogLink to="/project-building">project building</LogLink>. Working on real-world projects helps reinforce concepts,
                        improve efficiency, and boost confidence in applying knowledge practically.
                    </li>
                    <li>
                        Beyond solo efforts, engaging in <LogLink to="/open-source">open-source contributions</LogLink> is
                        one of the best ways to refine skills, gain industry exposure, and collaborate with like-minded individuals.
                    </li>
                </ul>

                <p>
                    <LogLink to="/consistency">Consistency</LogLink>, <LogLink to="/dedication">dedication</LogLink>, and
                    ambition play a crucial role in skill enhancement.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        The willingness to step out of your comfort zone, take on challenges, and embrace
                        lifelong learning is what separates skilled professionals from the rest.
                    </li>
                    <li>
                        It's also important to stay updated with industry trends, explore new technologies, and
                        learn from experienced professionals. Collaboration, <LogLink to="/networking">networking</LogLink>, and seeking mentorship
                        can accelerate skill development by providing fresh perspectives and insights.
                    </li>
                </ul>

                <p>
                    Additionally, learning from failures is just as important as learning from successes.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Every mistake or roadblock is an opportunity for <LogLink to="/growth">growth</LogLink>, making
                        perseverance and problem-solving essential traits for mastering any skill.
                    </li>
                    <li>
                        The reality is that there is always room for improvement, and the best professionals
                        never stop learning. By consistently refining your skills, staying motivated, and
                        pushing your limits, you increase your chances of getting hired by top companies and excelling in your career.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Ultimately, success in tech isn't just about what you know—it's about how well you apply
                    what you know. The <LogLink to="/journey">journey</LogLink> of skill development is ongoing, and those who commit to
                    continuous learning and self-improvement will always stay ahead in the game.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Building skills is a continuous journey, and every small step counts. Stay consistent and keep pushing forward!”
                    </p>
                }
            />
        </article>
    );
}