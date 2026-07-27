// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// work life balance page component
export default function WorkLifeBalance() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="WorkLifeBalance"
        >
            {/* Header */}
            <LogHeader
                title="Work-Life Balance"
                subtitle="Harmonizing professional execution with personal living, physical health, and long-term vitality."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Work-life balance is an essential topic once you transition into the full-time workforce.
                    While our careers provide purpose, structure, and professional growth, preserving a healthy equilibrium
                    between the work we do and the life we live is vital for long-term sustainability.
                </p>

                <p>
                    Work gives meaning to our days, but spending quality time with family, friends, and—most importantly—ourselves
                    is just as crucial. True balance comes from treating both spheres with equal respect.
                </p>

                <p>
                    Starting my first full-time role in May 2026 marked a major transition. While I thoroughly enjoy the work, company culture,
                    and industrial exposure, navigating time management amidst real-world constraints has been a learning curve.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Navigating Daily Energy:</strong> Combining daily
                        commutes with full office hours naturally taxes both physical and mental batteries, making evening{" "}
                        <LogLink to="/exhaustion">exhaustion</LogLink> real.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Protecting Physical Anchors:</strong> To recharge
                        and maintain balance, I make time for the <LogLink to="/physical-health">gym</LogLink>, keeping my physical baseline
                        strong despite busy work schedules.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Post-Office Building:</strong> Balancing personal
                        side-projects and maintaining my <LogLink to="/100days-of-code">coding streak</LogLink> after office hours takes deliberate
                        effort. Even on days when energy is low, pushing forward iteratively helps squeeze maximum value out of every 24 hours.
                    </li>
                </ul>

                <p>
                    Beyond your desk, terminal, and office hours lies a rich life waiting to be lived. Eat good food, travel, watch movies, explore
                    new hobbies, and spend time with people who ground you.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Your career is a significant chapter of your life, but it is not the entire book. Execute with excellence at work, but live the
                    rest of your life to the fullest.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Work hard when you're working, but remember: your life is far bigger than your job title.”
                    </p>
                }
            />
        </article>
    );
}