// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// confidence page component
export default function Confidence() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Confidence"
        >
            {/* Header */}
            <LogHeader
                title="Confidence & Self-Belief"
                subtitle="Transforming introversion into quiet authority through deep execution, public building, and genuine proof of work."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Confidence is a pivotal trait, both in life and across the technology landscape. It serves as your primary first impression—signaling how
                    effectively you communicate your domain knowledge, pitch clients, present technical architectures, or navigate high-stakes interviews.
                </p>

                <p>
                    Without confidence, people hesitate to trust your capabilities, regardless of your <LogLink to="/skills">skill</LogLink> set. True self-belief
                    is the key that translates raw ability into recognized authority.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Overcoming Introversion:</strong> Naturally, I am an introverted guy who
                        used to lack confidence, easily getting anxious and nervous in public or high-pressure situations. While those feelings still surface
                        occasionally, my ability to handle them has transformed entirely over time.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Public Accountability & Execution:</strong> The shift happened when I
                        committed to coding every single day and documenting my <LogLink to="/my-journey">journey</LogLink> publicly.{" "}
                        <LogLink to="/consistency">Consistently</LogLink> sharing my work built a tangible record of <LogLink to="/growth">growth</LogLink> that
                        gradually eroded <LogLink to="/self-doubt">self-doubt</LogLink>.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Discipline Outshining Doubt:</strong> When you maintain an unbroken streak
                        of <LogLink to="/consistency">consistency</LogLink> and <LogLink to="/discipline">discipline</LogLink> for hundreds of days, your domain
                        expertise compounds. The work speaks for itself, and your confidence increases organically.
                    </li>
                </ul>

                <p>
                    When you have genuinely put in the hours, overcome hundreds of <LogLink to="/debugging">debugging</LogLink> hurdles, and built complex projects
                    from scratch, you earn the right to own your craft. You no longer need to fake answers in client meetings or technical interviews—your confidence
                    rests on an unshakeable foundation of real proof of work.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Keep showing up every day, execute relentlessly, and become so competent that your personal experience naturally speaks for you.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Real confidence isn't manufactured—it is the natural byproduct of undeniable proof of work.”
                    </p>
                }
            />
        </article>
    );
}