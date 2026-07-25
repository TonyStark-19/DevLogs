// import link
import { Link } from 'react-router-dom';

// import icons
import { Link2, ArrowUpRight } from 'lucide-react';

// import types
import type { InternalMention } from '../../sections/ContentView';

// right sidebar component
export default function RightSidebar({ internalLinks }: { internalLinks: InternalMention[] }) {
    return (
        <aside
            className="w-64 h-screen flex flex-col shrink-0 border-l z-10 p-6
            dark:bg-zinc-950 dark:border-zinc-900 dark:text-zinc-400 bg-zinc-50 border-zinc-200 text-zinc-500
            overflow-y-auto scrollbar-none transition-colors duration-300 sticky top-0"
        >
            <div className="animate-fadeIn space-y-4">
                {/* Section header */}
                <h4
                    className="text-[11px] font-bold uppercase tracking-widest dark:text-zinc-500 text-zinc-400 flex items-center gap-2 select-none 
                    transition-colors duration-300 px-2"
                >
                    <Link2 size={13} className="dark:text-zinc-600 text-zinc-400 shrink-0" />
                    <span>Log Mentions</span>

                    {/* Minimalist total link counter pill */}
                    <span className="ml-auto text-[10px] font-mono px-1.5 py-0.5 rounded-md dark:bg-zinc-900 bg-zinc-200/60 dark:text-zinc-600 text-zinc-400">
                        {internalLinks.length}
                    </span>
                </h4>

                {/* Navigation list */}
                <nav className="space-y-0.75">
                    {internalLinks.map((mention) => (
                        <Link
                            key={mention.to}
                            to={mention.to}
                            className="flex items-center justify-between gap-2 text-xs font-medium px-2.5 py-2 rounded-lg transition-all duration-200 group truncate 
                            dark:text-zinc-400 text-zinc-600 dark:hover:text-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-900/40 
                            hover:bg-zinc-200/40 border border-transparent"
                        >
                            <div className="flex items-center gap-2.5">
                                {/* Smooth micro-sliding bullet indicator */}
                                <span
                                    className="w-1 h-1 rounded-full dark:bg-zinc-800 bg-zinc-300 
                                    group-hover:w-2 group-hover:bg-zinc-400 dark:group-hover:bg-zinc-500 
                                    transition-all shrink-0 duration-300 easy-in-out"
                                />

                                <span className="group-hover:translate-x-0.5 transition-transform duration-200 ease-out">
                                    {mention.label}
                                </span>
                            </div>

                            {/* Minimal context indicator that slips into view on hover */}
                            <ArrowUpRight
                                size={12}
                                className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 
                                group-hover:translate-x-0 transition-all duration-200 dark:text-zinc-600 text-zinc-400 shrink-0"
                            />
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}