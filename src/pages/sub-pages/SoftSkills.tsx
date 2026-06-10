// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// soft skills page component
export default function SoftSkills() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="SoftSkills"
        >
            {/* Header */}
            <LogHeader
                title="Soft Skills"
                subtitle="Unlocking the power of empathy, communication, and adaptability in a collaborative ecosystem."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Soft skills are just as crucial as <LogLink to="/skills">technical skills</LogLink> for a
                    developer, as they determine how effectively one can collaborate, communicate, and adapt in a professional setting.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        While coding expertise and <LogLink to="/problem-solving">problem-solving</LogLink> abilities are
                        essential, developers must also be able to work in teams, interact with clients, and understand{' '}
                        <LogLink to="/project-building">project</LogLink> requirements.
                    </li>
                    <li>
                        Strong communication skills enable developers to articulate their ideas clearly, explain
                        complex technical concepts to non-technical stakeholders, and contribute meaningfully in discussions.
                    </li>
                    <li>
                        Without effective communication, even the most skilled developers may struggle to work
                        efficiently within a team.
                    </li>
                </ul>

                <p>
                    Another key soft skill is adaptability. The tech industry is constantly evolving, with
                    new frameworks, languages, and methodologies emerging regularly.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Developers who can quickly learn new technologies and adapt to changing project needs
                        stay ahead in their careers.
                    </li>
                    <li>
                        Flexibility in problem-solving is also crucial, as developers often encounter unexpected
                        challenges that require creative solutions. Being open to feedback and continuously
                        improving one's approach ensures long-term success in the field.
                    </li>
                </ul>

                <p>
                    Teamwork and collaboration play a major role in software development, especially in
                    environments that use Agile or DevOps methodologies.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Developers often work in cross-functional teams, requiring them to coordinate with
                        designers, product managers, and other engineers. The ability to listen, respect
                        different perspectives, and contribute constructively helps create a positive work environment.
                    </li>
                    <li>
                        Developers who build strong professional relationships and practice empathy foster
                        better teamwork, leading to more efficient and successful projects.
                    </li>
                </ul>

                <p>
                    Lastly, <LogLink to="/time-management">time management</LogLink> and{' '}
                    <LogLink to="/discipline">discipline</LogLink> are essential soft skills for developers.
                    Balancing multiple tasks, meeting deadlines, and prioritizing work efficiently can make
                    a significant difference in <LogLink to="/productivity">productivity.</LogLink>
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Developers must also manage their learning curve while handling daily responsibilities.
                        Setting realistic goals, avoiding <LogLink to="/burnout">burnout</LogLink>, and maintaining a
                        healthy work-life balance contribute to sustained performance and <LogLink to="/growth">growth.</LogLink>
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    In the long run, mastering soft skills alongside technical abilities makes a developer
                    more valuable and well-rounded in the industry.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        "Your technical skills may get you the job, but your soft skills will help you keep it and grow."
                    </p>
                }
            />
        </article>
    );
}