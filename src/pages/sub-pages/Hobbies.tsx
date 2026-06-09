// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// hobbies page component
export default function Hobbies() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Hobbies"
        >
            {/* Header */}
            <LogHeader
                title="Hobbies"
                subtitle="Nurturing creative outlets to reset the mind and sustain your drive."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Hobbies play a crucial role in maintaining balance, <LogLink to="/burnout">preventing burnout</LogLink>,
                    and enhancing overall well-being.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        In a fast-paced and <LogLink to="/competition">competitive</LogLink> world, constantly working
                        without a break can lead to exhaustion and decreased <LogLink to="/productivity">productivity.</LogLink>
                    </li>
                    <li>
                        Hobbies act as a reset button, allowing the mind to relax and recharge. They provide a
                        sense of joy, creativity, and self-expression, which is essential for long-term motivation.
                    </li>
                </ul>

                <p>
                    Engaging in activities like listening to <LogLink to="/music">music</LogLink>, singing, watching
                    movies, reading books, or even playing games has worked for me. It helped me in creating a healthy balance
                    between work and relaxation.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        For many, coding itself becomes a hobby—something they genuinely enjoy beyond just being
                        a professional <LogLink to="/skills">skill.</LogLink> As for me, it turned out to be a hobby.
                    </li>
                    <li>
                        However, relying solely on work-related activities can still lead to fatigue, which is
                        why having diverse hobbies is important.
                    </li>
                </ul>

                <p>
                    Hobbies not only provide entertainment but also enhance <LogLink to="/problem-solving">problem-solving</LogLink> skills,
                    creativity, and mental agility.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        For example, reading books expands knowledge and perspective, while playing games
                        sharpens reflexes and strategic thinking.
                    </li>
                    <li>
                        Music and movies serve as emotional outlets, reducing stress and enhancing mood.
                    </li>
                </ul>

                <p>
                    The key to sustaining long-term growth and consistency in any field is to incorporate
                    enjoyable activities into daily life.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        When work and hobbies are balanced effectively, it becomes easier to stay motivated,
                        avoid burnout, and maintain a fresh perspective.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Therefore, finding and nurturing hobbies is not just a luxury but a necessity for a
                    fulfilling and productive <LogLink to="/my-journey">journey.</LogLink>
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <div className="space-y-2">
                        <p>What are your hobbies? Take some time to think about what makes you happy and helps you stay productive.</p>
                        <p className="font-medium">“Hobbies are great distractions from the worries and troubles that plague daily living.” - Bill Malone</p>
                    </div>
                }
            />
        </article>
    );
}