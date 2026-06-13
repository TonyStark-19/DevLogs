// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';
import SocialLinks from '../../components/sub-pages/SocialLinks.tsx';
import { GitHubLink } from '../../components/sub-pages/SocialLinks.tsx';

// git page component
export default function Git() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Git"
        >
            {/* Header */}
            <LogHeader
                title="Git & GitHub"
                subtitle="Mastering version control, team collaboration, and the open-source ecosystem."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Git and GitHub are powerful tools that play a crucial role in modern software
                    development, offering version control, collaboration, and{' '}
                    <LogLink to="/open-source">open-source contribution</LogLink> opportunities.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Git is a distributed version control system that allows developers to track changes in
                        their code, revert to previous versions, and collaborate seamlessly.
                    </li>
                    <li>
                        GitHub, built on Git, provides a cloud-based platform where developers can store,
                        manage, and share their code in a structured and secure manner. It is widely used by
                        individuals, teams, and large companies to maintain{' '}
                        <LogLink to="/project-building">projects</LogLink> efficiently.
                    </li>
                    <li>
                        For me, <GitHubLink /> has been far more than just a tool—it is a space I use literally every single day. Because I build daily, I have
                        been actively shipping and iterating directly on my profile, turning code management into a muscle memory habit.
                    </li>
                </ul>

                <p>
                    One of GitHub's most significant advantages is its role in collaboration and open-source
                    development. Many major tech companies and organizations host their repositories on
                    GitHub, allowing developers worldwide to contribute to their projects.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        This ecosystem fosters innovation, as developers can review existing codebases, identify
                        bugs, create issues, and submit pull requests to suggest improvements or add new features.
                    </li>
                    <li>
                        Contributing to open-source projects not only helps enhance software quality but also
                        enables developers to improve their <LogLink to="/skills">coding skills</LogLink>, understand
                        real-world codebases, and build a strong <LogLink to="/networking">professional network</LogLink>.
                    </li>
                    <li>
                        Given my core mantra is continuous upskilling—building projects, improving them with time, and contributing to open source—GitHub
                        serves as the exact foundation that enables me to bring all three together.
                    </li>
                </ul>

                <p>
                    Beyond open-source, GitHub is invaluable for teamwork in software development. It
                    provides features like branches, pull requests, and code reviews, making collaboration seamless.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Teams can work on different features simultaneously without interfering with each
                        other's progress, ensuring a smooth development workflow.
                    </li>
                    <li>
                        Additionally, GitHub Actions and CI/CD integrations automate testing and deployment,
                        streamlining the development process.
                    </li>
                    <li>
                        On top of that, each single commit functions as a detailed log, which is an absolute life saver when production environments break.
                        With version control operations like detailed commit histories, git blame, revert actions, and branch structures, you can pinpoint
                        exactly what line introduced a critical error and revert breaking changes in seconds.
                    </li>
                </ul>

                <p>
                    Understanding a codebase is an essential skill for any developer, and GitHub provides an
                    excellent environment to practice this.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        By exploring repositories, analyzing structured code, and making contributions,
                        developers can gain practical experience and upskill themselves.
                    </li>
                    <li>
                        Whether you're working on web development, mobile applications, AI/ML projects, or any
                        other programming-related field, GitHub serves as a hub where developers connect,
                        collaborate, and build impactful projects together.
                    </li>
                    <li>
                        Over time, my personal contribution graph has grown extensively greener and more <LogLink to="/consistency">consistent</LogLink>.{" "}
                        I continuously loop back to older repos to refine code architectures, implement best practices as I pick them up, and improve the
                        documentation of each project so it remains highly accessible for both my future self and anyone else visiting the repository.
                    </li>
                </ul>

                <p>
                    I also want to address a common hypocrisy prevalent in the tech community. When your profile lacks a solid green commit chart,
                    people often warn you that it leaves an unfavorable impression on recruiters. Yet, when you actively build a multi-year streak of
                    daily consistency—mine has passed 550+ days as of June 9, 2026—the narrative shifts, and others claim it doesn't matter, arguing that
                    cloud hosts are just an insurance baseline against local crashes.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Let me share my honest take on this: when you document your progress across public networks like <SocialLinks />, and ship code
                        to GitHub daily, you are not doing it for external approval. You are doing it for your own personal{" "}
                        <LogLink to="/growth">growth</LogLink>.
                    </li>
                    <li>
                        The deeper you dive into committing code, the more naturally you begin to think in code. You learn how architectures behave in production,
                        carve out an authentic profile in open source, learn directly from collective community codebases, and learn how to collaborate better.
                        Block out the outside noise, focus on your craft, and keep building for yourself.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    By actively using GitHub, you not only improve your coding and collaboration skills but
                    also increase your visibility in the developer community. It acts as a portfolio
                    showcase of your projects, contributions, and expertise when applying for jobs or internships.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        Here is my{' '}
                        <GitHubLink />
                        . Let's connect here :)
                    </p>
                }
            />
        </article>
    );
}