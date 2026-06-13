// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';
import { ApnaCollege } from '../../components/sub-pages/ExternalLinks.tsx';
import { CTutorial } from '../../components/sub-pages/ExternalLinks.tsx';
import { CCoding } from '../../components/sub-pages/ExternalLinks.tsx';
import { AmazonClone } from '../../components/sub-pages/ExternalLinks.tsx';
import { CodingLab } from '../../components/sub-pages/ExternalLinks.tsx';
import { HtmlCssWebiste } from '../../components/sub-pages/ExternalLinks.tsx';
import { LinkedInLink } from '../../components/sub-pages/SocialLinks.tsx';
import { JSTutorial } from '../../components/sub-pages/ExternalLinks.tsx';
import { GitHubLink } from '../../components/sub-pages/SocialLinks.tsx';
import { Hacktoberfest } from '../../components/sub-pages/ExternalLinks.tsx';
import { DSAPlaylist } from '../../components/sub-pages/ExternalLinks.tsx';
import { LeetCodeLink } from '../../components/sub-pages/SocialLinks.tsx';
import { HackerRankLink } from '../../components/sub-pages/SocialLinks.tsx';
import { OSCG } from '../../components/sub-pages/ExternalLinks.tsx';
import { KrutrimInsights } from '../../components/sub-pages/ExternalLinks.tsx';
import { ShikhramAI } from '../../components/sub-pages/ExternalLinks.tsx';
import { TwitterLink } from '../../components/sub-pages/SocialLinks.tsx';

// my journey page component
export default function MyJourney() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="MyJourney"
        >
            {/* Header */}
            <LogHeader
                title="My coding journey"
                subtitle="From a classroom introduction to building habits and pipelines."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    My coding journey began when I joined a BCA course, driven by my
                    deep <LogLink to="/curiosity">curiosity</LogLink> about how technology works and how it shapes the world.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        In my first year of college, C language was introduced in the curriculum, marking my
                        first step into the world of programming. Eager to explore further, I turned to the{' '}
                        <ApnaCollege /> YouTube channel and started learning C programming with <CTutorial />
                    </li>
                    <li>
                        My approach was simple yet powerful: I asked myself, “What can be converted into a program?” This{" "}
                        <LogLink to="/mindset">mindset</LogLink> led me to build over 79 C programs, including a 928-line{" "}
                        <LogLink to="/project-building">project</LogLink> on number system conversion, where I applied functions extensively. You can check that
                        in my <CCoding /> website. This progress caused my logic-building{" "}
                        <LogLink to="/skills">skills</LogLink> to <LogLink to="/growth">grow</LogLink>.
                    </li>
                </ul>

                <p>
                    As my interest in coding grew, I decided to explore web development. I started learning
                    HTML and CSS through Apna College's YouTube channel.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        However, I faced a major obstacle—I didn't have a laptop, which made hands-on practice
                        difficult. But that didn't stop me. In June, I finally got my first laptop, and that was
                        a turning point in my <LogLink to="/journey">journey</LogLink>.
                    </li>
                    <li>
                        I immediately dived into web development, where I first created an <AmazonClone /> from Apna College's tutorial.
                        Then I followed <CodingLab />'s YouTube tutorials, and began building numerous HTML-CSS mini-projects, which I integrated into my{' '}
                        <HtmlCssWebiste /> Website.
                    </li>
                    <li>
                        To stay accountable and motivated, I started sharing my coding journey on <LinkedInLink /> as part of the #100DaysOfCode challenge.
                    </li>
                </ul>

                <p>
                    My <LogLink to="/dedication">dedication</LogLink> and <LogLink to="/consistency">consistency</LogLink> led to
                    bigger projects. I successfully cloned two more websites—Netflix and Zomato—applying my growing knowledge of HTML and CSS.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        As I progressed, I realized the need for more functionality in my web projects, which led me to learn <JSTutorial /> from the same Apna
                        College YouTube channel. With JavaScript in my toolkit, I expanded my projects, creating a travel website, a coffee website, and many more.
                    </li>
                    <li>
                        You can check out all my work on <GitHubLink />, where I document my progress and showcase my repositories.
                    </li>
                </ul>

                <p>
                    Also, in October, I participated in <Hacktoberfest />2024 and completed it successfully, making my presence felt in{' '}
                    <LogLink to="/open-source">open-source contributions</LogLink>.
                </p>

                <p>
                    Then, I also started learning C++ and am currently diving into <DSAPlaylist /> Learning DSA has been a new and exciting challenge, helping me
                    build strong <LogLink to="/problem-solving">problem-solving skills</LogLink> and preparing me for
                    future opportunities in tech while solving questions on platforms like <LeetCodeLink /> and <HackerRankLink />
                </p>

                <p>
                    Building on that algorithmic foundation, my focus shifted toward shipping production-grade systems and expanding real-world experience.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Alongside my personal builds, I continuously took on and executed freelance projects, bridging client requirements with scalable
                        clean code layouts.
                    </li>
                    <li>
                        I scaled my community impact via <OSCG />, where I was selected as a top contributor out of more than 4,000 global
                        participants. This selection pushed me into Phase 2, where I spent valuable hours collaborating directly on a massive full-stack architecture.
                    </li>
                    <li>
                        Shortly after, I took on an engineering internship at <KrutrimInsights />. There, I was responsible for developing their core company
                        website alongside an incredibly complex administrative, mentor, and student portal infrastructure entirely backed by AWS cloud services.
                    </li>
                    <li>
                        Today, all of those compounding daily layers have culminated in my first full-time role, where I am working as an AI Product Developer
                        at <ShikhramAI /> to build next-generation applications.
                    </li>
                </ul>

                <p>Now, coding has become an integral part of my life.</p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        I am continuously showing up to update my tracking, maintaining streaks across platforms.
                    </li>
                    <li>
                        Alongside coding, I have expanded my online presence to <TwitterLink />, where I share my learnings and connect with like-minded developers.
                    </li>
                    <li>
                        <LogLink to="/networking">Networking</LogLink>, collaborations, and open-source contributions have
                        significantly enriched my experience, allowing me to learn from others and contribute to the tech community.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    To document my learning experiences, I started this project called DevLogs, where I
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
            />
        </article>
    );
}