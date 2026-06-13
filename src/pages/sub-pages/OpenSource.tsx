// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';
import { Hacktoberfest } from '../../components/sub-pages/ExternalLinks.tsx';
import { OSCG } from '../../components/sub-pages/ExternalLinks.tsx';
import { GSSOC } from '../../components/sub-pages/ExternalLinks.tsx';
import { GSOC } from '../../components/sub-pages/ExternalLinks.tsx';
import { GitHubLink } from '../../components/sub-pages/SocialLinks.tsx';

// open source page component
export default function OpenSource() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="OpenSource"
        >
            {/* Header */}
            <LogHeader
                title="Open source"
                subtitle="Collaborating with a global community to write the transparent future of software."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Open-source contributions are crucial for both developers and the tech community,
                    offering a platform for collaboration, learning, and innovation.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        They allow developers to sharpen their <LogLink to="/skills">skills</LogLink>, work on real-world{' '}
                        <LogLink to="/project-building">projects</LogLink>, and gain practical experience in coding,
                        debugging, and <LogLink to="/problem-solving">problem-solving</LogLink>.
                    </li>
                    <li>
                        By contributing to open-source projects, developers get exposure to diverse codebases,
                        which helps them understand different coding styles, architectures, and best practices.
                    </li>
                    <li>
                        To share a breakdown of my own open-source path: I am a proud 2X <Hacktoberfest /> contributor spanning the 2024 and 2025
                        seasonal blocks, and I am actively eyeing this upcoming year's milestone to extend that track record.
                    </li>
                </ul>

                <p>
                    Many big companies like Google, Microsoft, and Meta maintain open-source repositories,
                    encouraging global contributions to enhance project efficiency, scalability, and user experience.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Open source fosters a culture of knowledge-sharing and community-driven development,
                        where developers from different backgrounds and expertise levels can collaborate, review
                        each other's work, and improve software collectively.
                    </li>
                    <li>
                        This year, I scaled my engagement via <OSCG />, climbing to a rank among the top 20 contributors out of more
                        than 4,000 global participants. That momentum pushed me straight into structural project shipping.
                    </li>
                </ul>

                <p>
                    Additionally, open-source contributions are highly beneficial for a developer's resume,
                    as they demonstrate hands-on experience, technical proficiency, and the ability to work in teams.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Participating in open-source programs like <Hacktoberfest />, <GSSOC />, and <GSOC />{" "}
                        can provide structured mentorship, <LogLink to="/networking">networking</LogLink> opportunities, and even job prospects.
                    </li>
                    <li>
                        Beyond structured, high-profile milestones, I make it a point to routinely dive into random open repositories or ship
                        updates to codebases built by developers I know. Dropping unexpected pull requests to fix an issue or improve a feature is
                        exactly how I keep my open-source engine active between major events.
                    </li>
                </ul>

                <p>
                    Moreover, open source empowers developers to solve real-world problems, create impactful
                    software, and give back to the community.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        It encourages continuous learning and <LogLink to="/growth">growth</LogLink> while promoting the
                        the idea that technology should be accessible, transparent, and collaborative.
                    </li>
                    <li>
                        Whether fixing bugs, adding features, writing documentation, or optimizing performance,
                        every contribution matters.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    By actively engaging in open source, developers not only improve their coding skills but
                    also become part of a global movement that shapes the future of technology.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        "Start contributing today! Check out some open-source projects on my <GitHubLink /> and begin your journey."
                    </p>
                }
            />
        </article>
    );
}