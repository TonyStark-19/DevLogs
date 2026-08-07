// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// import external links
import { TwitterLink } from '../../components/sub-pages/SocialLinks.tsx';
import { DakshJindal } from '../../components/sub-pages/ExternalLinks.tsx';
import { BeerBiceps } from '../../components/sub-pages/ExternalLinks.tsx';

// podcast page component
export default function Podcast() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Podcast"
        >
            {/* Header */}
            <LogHeader
                title="Podcast"
                subtitle="Tapping into a reservoir of shared wisdom and transformative insights."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Podcasts are a dynamic and enriching medium for personal development, offering an accessible way to learn, <LogLink to="/growth">grow</LogLink>,{" "}
                    and gain <LogLink to="/inspiration">inspiration</LogLink>.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        They cater to diverse needs, whether you aim to enhance your <LogLink to="/mental-health">mental health</LogLink>, advance your career, or
                        cultivate a success-oriented <LogLink to="/mindset">mindset</LogLink>.
                    </li>
                    <li>
                        Mindset-focused podcasts are particularly impactful, guiding listeners toward adopting <LogLink to="/productivity">productive</LogLink>{" "}
                        thinking patterns and fostering <LogLink to="/awareness">self-awareness</LogLink>.
                    </li>
                    <li>
                        On the other hand, interview-style podcasts provide profound insights into the lives of individuals, especially successful people, revealing
                        habits, strategies, and philosophies that contribute to their achievements.
                    </li>
                </ul>

                <p>
                    Listening to these life stories not only inspires but also uncovers recurring patterns—like meticulous planning, embracing challenges, and
                    finding joy in the <LogLink to="/my-journey">journey</LogLink>.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Such lessons can help you reflect on your own life, refine your decision-making, and develop a more thoughtful, growth-oriented perspective.
                    </li>
                    <li>
                        Moreover, podcasts encourage rational and intentional thinking, offering guidance in areas such as{" "}
                        <LogLink to="/time-management">time management</LogLink>, emotional resilience, and goal-setting.
                    </li>
                </ul>

                <p>
                    They are a reservoir of knowledge that can be tapped into anytime—during a walk, commute, or relaxation.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Whether you're exploring success stories, seeking practical tips, or simply looking for motivation, podcasts provide an immersive and
                        transformative experience.
                    </li>
                </ul>

                <p>Here are the podcasts which I listen to :</p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <DakshJindal /> to help build a mindset.
                    </li>
                    <li>
                        <BeerBiceps />. His channel is filled with numerous personal interviews of well-known and interesting people where you can learn from their
                        life experiences.
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p className='leading-7'>
                        "Have a favorite podcast which has helped you in your journey? <br /> You can share your recommendations in my <TwitterLink />"
                    </p>
                }
            />
        </article>
    );
}