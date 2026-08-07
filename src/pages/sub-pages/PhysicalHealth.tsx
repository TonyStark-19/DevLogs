// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// physical health page component
export default function PhysicalHealth() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="PhysicalHealth"
        >
            {/* Header */}
            <LogHeader
                title="Physical health"
                subtitle="Honoring the structural foundation that powers your daily potential."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Physical health is one of the most crucial aspects of a balanced and fulfilling life. While learning <LogLink to="/skills">new skills</LogLink>,{" "}
                    growing in your career, and working towards your goals are important, none of it will be sustainable without good physical health.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Your body is the foundation that supports everything you do, and taking care of it ensures long-term success and{" "}
                        <LogLink to="/productivity">productivity</LogLink>. A healthy body enhances <LogLink to="/focus">focus</LogLink>, energy levels, and mental
                        clarity, allowing you to perform better in every area of life.
                    </li>
                    <li>
                        The small efforts you put into maintaining your physical health today will reward you in the future, helping you stay active, agile, and free
                        from preventable health issues.
                    </li>
                </ul>

                <p>
                    To maintain good physical health, regular exercise should be a part of your daily routine. Physical activity improves cardiovascular health,
                    strengthens muscles, boosts endurance, and enhances mood by releasing endorphins.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        There are various ways to stay active—whether it's working out at home, going to the gym, running, cycling, yoga, or even simple activities
                        like stretching and walking.
                    </li>
                    <li>
                        The key is <LogLink to="/consistency">consistency</LogLink>; even a short workout each day can have a significant impact over time. The more
                        you integrate movement into your daily life, the stronger and more resilient your body becomes.
                    </li>
                </ul>

                <p>
                    Apart from exercise, a nutritious diet plays an essential role in maintaining overall physical well-being. The food you consume serves as fuel
                    for your body, affecting everything from your energy levels to your immune system.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Eating a balanced diet rich in proteins, healthy fats, vitamins, and minerals helps in muscle recovery, brain function, and disease prevention.
                    </li>
                    <li>
                        Staying hydrated is equally important, as water regulates body temperature, aids digestion, and improves overall physical performance.
                        Avoiding excessive junk food, sugar, and processed items can help maintain optimal health and keep your body functioning at its best.
                    </li>
                </ul>

                <p>
                    Taking care of your physical health is not just about short-term fitness goals; it's about building habits that will sustain you for a lifetime.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Getting adequate sleep, managing stress, and maintaining a positive <LogLink to="/mindset">mindset</LogLink> also contribute to overall
                        well-being.
                    </li>
                    <li>
                        When your body is well-rested and properly taken care of, you feel more <LogLink to="/confidence">confident</LogLink>, productive, and{" "}
                        <LogLink to="/motivation">motivated</LogLink>.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Prioritizing physical health alongside personal and professional <LogLink to="/growth">growth</LogLink> creates a well-rounded and fulfilling
                    life, allowing you to achieve more while feeling your best every day.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        "Take care of your body. It's the only place you have to live." - Jim Rohn
                    </p>
                }
            />
        </article>
    );
}