// import icons
import { Terminal, Star, MessageSquare, Send } from 'lucide-react';

// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import ExternalCard from '../../components/sub-pages/ExternalCard';
import LogFooter from '../../components/sub-pages/LogFooter';

// intro page component
export default function Intro() {
    return (
        <article
            className="max-w-6xl mx-auto px-6 py-10"
            id="Dev-Diary"
        >
            {/* Dynamic Main Header */}
            <LogHeader
                title="What is DevLogs?"
                subtitle="Personal bits of learning, open for everyone :)"
            />

            {/* Feature Image */}
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-900 shadow-xl mb-8 bg-zinc-900">
                <img
                    src="/images/Intro.avif"
                    alt="Abstract dark development workstation illustration"
                    className="w-full h-full object-cover dark:opacity-80 transition-opacity"
                />

                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/20 to-transparent" />
            </div>

            {/* Main Core Text Content Description */}
            <div className="space-y-6 mb-8">
                <p className="text-base leading-relaxed dark:text-zinc-300 text-zinc-700">
                    Welcome to <span className="font-bold dark:text-white text-zinc-900">DevLogs</span>!
                    This is a clean, intentional space where I document my technical journey—breaking down complex projects, architecture lessons, personal
                    code hurdles, and minor insights picked up along the way.
                </p>

                <p className="text-base leading-relaxed dark:text-zinc-300 text-zinc-700">
                    Whether you are a beginner exploring your first state hooks or an experienced engineer organizing microservices, I hope you locate a
                    piece of engineering insight that helps your workflow.
                </p>
            </div>

            {/* Grid of Interactive External Navigation Cards */}
            <div className="grid grid-cols-1 gap-3.5">
                <ExternalCard
                    href="https://github.com/TonyStark-19/DevLogs"
                    icon={Terminal}
                    text="Explore the codebase or check revisions directly on"
                    highlightText="GitHub."
                />

                <ExternalCard
                    href="https://github.com/TonyStark-19/DevLogs"
                    icon={Star}
                    text="Find the content or setup valuable? Help it grow by leaving a"
                    highlightText="Star on the Repo!"
                />

                <ExternalCard
                    href="https://aditya-devfolio-one.vercel.app"
                    icon={Send}
                    text="Want to trade notes, give general advice, or chat? Let's"
                    highlightText="Reach out and connect."
                />

                <ExternalCard
                    href="https://github.com/TonyStark-19/DevLogs/issues"
                    icon={MessageSquare}
                    text="Have unique ideas or spotted structural issues? Feel free to"
                    highlightText="Create an Issue."
                />
            </div>

            {/* Bottom Footer Component */}
            <LogFooter
                text="Thanks for stopping by! I appreciate your support and would love to hear your thoughts."
                credits={
                    <>
                        <p>
                            Inspiration:{' '}
                            <a
                                href="https://davidgasquez.com"
                                target="_blank"
                                rel="noreferrer"
                                className="underline hover:text-zinc-900 dark:hover:text-white"
                            >
                                Handbook
                            </a>{" "}
                            by David Gasquez
                        </p>
                    </>
                }
            />
        </article>
    );
};