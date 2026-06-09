// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// my journey page component
export default function MyJourney() {
    const currentYear = new Date().getFullYear();

    return (
        <article className="max-w-3xl mx-auto px-2 py-10" id="MyJourney">
            {/* Header */}
            <LogHeader
                title="My coding journey"
                subtitle="From a classroom introduction to building habits and pipelines."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    My coding journey began when I joined a BCA course, driven by my
                    deep curiosity about how technology works and how it shapes the world.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        In my first year of college, C language was introduced in the curriculum, marking my
                        first step into the world of programming. Eager to explore further, I turned to the{' '}
                        <a
                            href="https://www.youtube.com/@ApnaCollegeOfficial"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            Apna College YouTube channel
                        </a>{' '}
                        and started learning C programming with{' '}
                        <a
                            href="https://youtu.be/irqbmMNs2Bo?si=a9WCGm4v4D7SF7H8"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            a one-shot C language tutorial.
                        </a>
                    </li>
                    <li>
                        My approach was simple yet powerful: I asked myself, “What can be converted into a
                        program?” This <LogLink to="/mindset">mindset</LogLink> led me to build over 80 C programs,
                        including a 928-line <LogLink to="/project-building">project</LogLink> on number system conversion, where I applied
                        functions extensively. This progress caused my logic-building <LogLink to="/skills">skills</LogLink> to <LogLink to="/growth">grow.</LogLink>
                    </li>
                </ul>

                <p>
                    As my interest in coding grew, I decided to explore web development. I started learning
                    HTML and CSS through Apna College’s YouTube channel.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        However, I faced a major obstacle—I didn’t have a laptop, which made hands-on practice
                        difficult. But that didn’t stop me. In June, I finally got my first laptop, and that was
                        a turning point in my journey.
                    </li>
                    <li>
                        I immediately dived into web development, where I first created an{' '}
                        <a
                            href="https://youtu.be/nGhKIC_7Mkk?si=1BoNbUGqxIpcZucm"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            Amazon website clone from Apna College’s tutorial.
                        </a>{' '}
                        Then I followed{' '}
                        <a
                            href="https://www.youtube.com/playlist?list=PLImJ3umGjxdD3ov2lwg0SM5rxz5v9FjOf"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            Coding Lab’s YouTube tutorials
                        </a>
                        , and began building numerous HTML-CSS mini-projects, which I integrated into my{' '}
                        <a
                            href="https://html-css-projects-phi.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            HTML-CSS-Projects Website.
                        </a>
                    </li>
                    <li>
                        To stay accountable and motivated, I started sharing my coding journey on{' '}
                        <a
                            href="https://linkedin.com/in/aditya-chandel-223bb3308"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            LinkedIn
                        </a>{' '}
                        as part of the #100DaysOfCode challenge.
                    </li>
                </ul>

                <p>
                    My <LogLink to="/dedication">dedication</LogLink> and <LogLink to="/consistency">consistency</LogLink> led to
                    bigger projects. I successfully cloned two more websites—Netflix and Zomato—applying my growing knowledge of HTML and CSS.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        As I progressed, I realized the need for more functionality in my web projects, which
                        led me to learn{' '}
                        <a
                            href="https://youtu.be/VlPiVmYuoqw?si=NIHl5TO_KEATbSh_"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            JavaScript from the same Apna College YouTube channel.
                        </a>{' '}
                        With JavaScript in my toolkit, I expanded my projects, creating a travel website, a coffee website, and many more.
                    </li>
                    <li>
                        You can check out all{' '}
                        <a
                            href="https://github.com/TonyStark-19"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            my work on GitHub
                        </a>
                        , where I document my progress and showcase my repositories.
                    </li>
                </ul>

                <p>
                    Also, in October, I participated in{' '}
                    <a
                        href="https://hacktoberfest.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                    >
                        Hacktoberfest 2024
                    </a>{' '}
                    and completed it successfully, making my presence felt in{' '}
                    <LogLink to="/open-source">open-source contributions.</LogLink>
                </p>

                <p>
                    Recently, I also started learning C++ and am currently diving into{' '}
                    <a
                        href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                    >
                        Data Structures and Algorithms (DSA) using Apna College’s playlist.
                    </a>{' '}
                    Learning DSA has been a new and exciting challenge, helping me build strong{' '}
                    <LogLink to="/problem-solving">problem-solving skills</LogLink> and preparing me for
                    future opportunities in tech while solving questions on platforms like{' '}
                    <a
                        href="https://leetcode.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                    >
                        LeetCode
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://www.hackerrank.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                    >
                        HackerRank.
                    </a>
                </p>

                <p>Now, coding has become an integral part of my life.</p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        I am continuously showing up to update my tracking, maintaining streaks across platforms.
                    </li>
                    <li>
                        Alongside coding, I have expanded my online presence to{' '}
                        <a
                            href="https://twitter.com/iamaditya_3"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-zinc-400"
                        >
                            Twitter
                        </a>
                        , where I share my learnings and connect with like-minded developers.
                    </li>
                    <li>
                        <LogLink to="/networking">Networking</LogLink>, collaborations, and open-source contributions have
                        significantly enriched my experience, allowing me to learn from others and contribute to the tech community.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    To document my learning experiences, I started a project called Dev Diary, where I
                    summarize everything I have learned so far. As I continue exploring deeper aspects of coding, I will keep
                    adding more insights to it. My journey is far from over—this is just the beginning, and I am excited to see
                    where it takes me next!
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “The only way to do great work is to love what you do.” — Steve Jobs
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