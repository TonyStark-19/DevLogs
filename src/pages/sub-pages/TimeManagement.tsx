// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// time management page component
export default function TimeManagement() {
    const currentYear = new Date().getFullYear();

    return (
        <article className="max-w-3xl mx-auto px-2 py-10" id="TimeManagement">
            {/* Header */}
            <LogHeader
                title="Time management"
                subtitle="Designing a life that aligns with your highest aspirations."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Time management is an essential <LogLink to="/skills">skill</LogLink> that plays a vital role in
                    achieving success, especially when embarking on a new endeavor or working on a long-term{' '}
                    <LogLink to="/project-building">project.</LogLink>
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        It is a common misconception that there is never enough time to accomplish everything.
                        However, the real challenge often lies in the inability to set clear priorities and establish firm boundaries.
                    </li>
                    <li>
                        By dedicating just 30 minutes a day to focused, undistracted work, you can lay the
                        foundation for a <LogLink to="/productivity">productive</LogLink> habit. Small,{' '}
                        <LogLink to="/consistency">consistent</LogLink> efforts are often underestimated, yet they have
                        the potential to yield significant results over time.
                    </li>
                    <li>
                        Consistency is key, as it fosters <LogLink to="/discipline">discipline</LogLink> and allows
                        you to make progress steadily without feeling overwhelmed.
                    </li>
                </ul>

                <p>
                    It is important to recognize that leisure activities, such as browsing social media,
                    watching entertainment, or relaxing with friends, are not inherently bad.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        In fact, they are necessary for <LogLink to="/mental-health">mental</LogLink> rejuvenation and
                        maintaining a healthy balance. The key is to ensure that these activities do not take
                        precedence over your goals or consume more time than intended.
                    </li>
                    <li>
                        Allocating specific blocks of time for such activities while prioritizing your
                        commitments ensures that you remain productive without sacrificing relaxation or enjoyment.
                    </li>
                    <li>
                        Starting small, such as dedicating a short period daily to focused work, can gradually
                        build your endurance for longer, more intensive sessions. This incremental approach
                        reduces the risk of <LogLink to="/burnout">burnout</LogLink> and makes the{' '}
                        <LogLink to="/my-journey">journey</LogLink> less daunting.
                    </li>
                </ul>

                <p>
                    Over time, what begins as a modest effort transforms into a powerful habit that enhances
                    both your skills and overall productivity. It instills a sense of achievement and
                    momentum that motivates you to tackle more complex tasks with confidence.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        The discipline developed through consistent time management spills over into other areas
                        of life, creating a ripple effect that improves decision-making, reduces stress, and boosts overall efficiency.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Ultimately, managing your time effectively is not just about getting things done but
                    about designing a life that aligns with your aspirations, ensuring that every moment
                    spent contributes meaningfully to your <LogLink to="/growth">growth</LogLink> and happiness.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <div className="space-y-2">
                        <p className="font-medium">"Studies show that people who plan their days are 20-25% more productive."</p>
                        <p>“Take five minutes now to plan your next 24 hours. Note down your priorities!”</p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            And if you're wondering how to start? Read{' '}
                            <LogLink to="/how-to-start">
                                this page.
                            </LogLink>
                        </p>
                    </div>
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