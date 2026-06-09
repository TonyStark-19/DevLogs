// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// mindset page component
export default function Mindset() {
    const currentYear = new Date().getFullYear();

    return (
        <article className="max-w-3xl mx-auto px-2 py-10" id="Mindset">
            {/* Header */}
            <LogHeader
                title="Mindset"
                subtitle="The ultimate separator that transforms raw potential into systemic impact."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Mindset is a defining trait that sets individuals apart and plays a crucial role in
                    achieving success.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        It is the foundation upon which great innovators like Steve Jobs, Elon Musk, and Mark
                        Zuckerberg built their legacies.
                    </li>
                    <li>
                        These visionaries didn’t just follow conventional paths; they had a revolutionary
                        mindset that pushed them to think beyond limits and change the world.
                    </li>
                    <li>
                        Having the right mindset is especially important in the tech field, where progress is
                        driven by those who dare to innovate.
                    </li>
                    <li>
                        While starting with a nine-to-five job can be a stepping stone, true impact comes from
                        going beyond routine work and actively contributing to technological advancements.
                    </li>
                </ul>

                <p>
                    A strong mindset fuels creativity, resilience, and <LogLink to="/problem-solving">problem-solving</LogLink> abilities.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        It helps individuals see challenges as opportunities and failures as learning
                        experiences. Your mindset is centered on using technology and <LogLink to="/skills">skills</LogLink> to
                        create something groundbreaking—something that doesn’t just exist within the field but transforms it entirely.
                    </li>
                    <li>
                        Whether it's developing revolutionary software, designing impactful websites, or
                        creating applications that solve real-world problems, every step taken with the right
                        mindset contributes to progress.
                    </li>
                </ul>

                <p>
                    Technology has the power to shape societies, improve lives, and redefine industries, and
                    those who adopt a problem-solving, innovation-driven mindset will lead this
                    transformation.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    A person with this mindset does not just follow trends but creates them. They don’t just
                    work within a system but aim to redefine it. In essence, mindset is the key to unlocking
                    one’s full potential, driving meaningful change, and leaving a lasting mark on the world of technology.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        What is your mindset? How do you plan to shape the future of technology? Share it with me on my{' '}
                        <a
                            target="_blank"
                            href="https://twitter.com/iamaditya_3"
                            rel="noreferrer"
                            className="underline underline-offset-4 decoration-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors font-medium"
                        >
                            Twitter.
                        </a>
                    </p>
                }
                credits={
                    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
                        <p>© {currentYear} DevLogs — Aditya Chandel</p>

                        <div className="flex gap-3">
                            <a
                                href="https://linkedin.com/in/aditya-chandel-223bb3308"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="https://twitter.com/iamaditya_3"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                }
            />
        </article>
    );
}