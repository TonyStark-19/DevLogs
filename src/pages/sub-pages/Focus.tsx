// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// focus page component
export default function Focus() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Focus"
        >
            {/* Header */}
            <LogHeader
                title="Focus & Attention"
                subtitle="Understanding digital stimuli, protecting deep attention spans, and mastering time boundaries."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Focus is the primary engine behind deep productivity. Whether you are building complex software, reading a technical book,
                    or mastering a new framework, remaining focused ensures that you complete your work efficiently while truly retaining what you learn.
                </p>

                <p>
                    In the modern tech ecosystem, human attention spans are shrinking dramatically. While technology unlocks unprecedented leverage,
                    it also bombards us with constant external **stimuli**—triggers that force our brains to react, breaking concentration and scattering focus.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Stimulus Trap:</strong> The single biggest factor
                        in focus deviation is the external notification ping. Seeing a screen light up or hearing an alert triggers an instant urge
                        to engage—and before you know it, an hour of deep work is lost to context-switching.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Structured Break Intervals:</strong> Realistically,
                        nobody can maintain unbroken intense focus for endless hours unless the task is deeply engaging. Using structured focus
                        cycles—like a 20/20 or 30/30 minute split—prevents mental fatigue and avoids sudden <LogLink to="/burnout">burnout</LogLink>.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Defending Flow States:</strong> To stay locked in,
                        eliminate digital friction: turn off mobile data, mute non-critical calls, use ambient audio or <LogLink to="/music">music</LogLink>{" "}
                        to block environmental noise, and eliminate <LogLink to="/distraction">distractions</LogLink> before starting a session.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Setting Strict Time Boundaries:</strong> As you mature,
                        you realize how precious time truly is. How you spend every single hour compounds over the years. This doesn't mean skipping
                        recreation—it means being intentional about engaging in activities that add real value to your life.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Protect your attention span as fiercely as you protect your code base. Control your environment, manage incoming stimuli,
                    and respect your time boundaries.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Where your attention goes, your growth follows. Guard your focus fiercely.”
                    </p>
                }
            />
        </article>
    );
}