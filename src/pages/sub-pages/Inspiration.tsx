// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// inspiration page component
export default function Inspiration() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Inspiration"
        >
            {/* Header */}
            <LogHeader
                title="Inspiration"
                subtitle="From real-world hustle stories to engineering icons—finding the sparks that ignite lifelong ambition."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Everything we aspire to achieve in life is influenced by people who inspire us—whether we know them personally
                    or follow them from afar. Inspirations act as catalysts, igniting an internal fire that pushes us to put in
                    the hard work, strive for excellence, and give profound purpose to our lives.
                </p>

                <p>
                    They don't just motivate us to excel professionally; they teach us how to navigate life with resilience,{" "}
                    <LogLink to="/dedication">dedication</LogLink>, and character.
                </p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Real-World Mentors:</strong> Hearing real struggle
                        stories from people I know personally—learning about the sheer grit behind their present success—grounds my mindset.
                        Their journeys prove that quiet, persistent effort always compounds over time.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Ultimate Technical Icon:</strong> My single
                        greatest inspiration isn't a historical figure, but a fictional one—**Tony Stark (Iron Man)**. Like many tech enthusiasts,
                        I've been a massive Marvel and sci-fi fan for years, but Tony's relentless genius, engineering discipline, and technological
                        mastery stand in a class of their own.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The JARVIS Dream:</strong> Iron Man heavily defines my
                        developer identity. My GitHub username (<strong className="text-zinc-800 dark:text-zinc-200">TonyStark-19</strong>,{" "}
                        created when I was 19), my wallpapers, and my digital setup all pay homage to him. My ultimate lifetime engineering goal
                        is to build my own fully functional J.A.R.V.I.S. AI—if I don't build that, my coding journey feels incomplete.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Curiosity as the Captain:</strong> While external
                        figures ignite the spark, my inner <LogLink to="/curiosity">curiosity</LogLink> remains the true captain of my ship, steering
                        me to continuously explore new tools, frameworks, and futuristic ideas.
                    </li>
                </ul>

                <p>
                    Surrounding yourself with inspiring people and absorbing their journeys is one of the best things you can do. Reach out to mentors
                    in the real world, read biographies of visionary builders, or let fictional tech icons push your imagination to its absolute limits.
                </p>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    Find what sparks your ambition, hold onto it tightly, and build relentless systems until your own work becomes someone else's inspiration.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Sometimes you gotta run before you can walk. Dream big, engineer harder.”
                    </p>
                }
            />
        </article>
    );
}