// import link
import { Link } from 'react-router-dom';

// import icons
import { Link2 } from 'lucide-react';

// import tpyes
import type { InternalMention } from '../../sections/ContentView';

// right sidebar component
export default function RightSidebar({ internalLinks }: { internalLinks: InternalMention[] }) {
    return (
        <aside
            className="w-64 h-full hidden xl:flex flex-col shrink-0 border-l relative z-10 p-8 
            dark:bg-zinc-950 dark:border-zinc-900 dark:text-zinc-400 bg-zinc-50 border-zinc-200 text-zinc-500
            overflow-y-auto scrollbar-none transition-colors duration-300"
        >
            <div className="animate-fadeIn">
                <h4
                    className="text-xs font-bold uppercase tracking-wider dark:text-zinc-500 text-zinc-400 mb-4 flex items-center gap-2 select-none 
                    transition-colors duration-300"
                >
                    <Link2 size={12} className="dark:text-zinc-600 text-zinc-400" />
                    Log Mentions
                </h4>

                <nav className="space-y-1">
                    {internalLinks.map((mention) => (
                        <Link
                            key={mention.to}
                            to={mention.to}
                            className="flex items-center gap-2.5 text-xs font-medium px-2.5 py-2 rounded-lg transition-all duration-200 group truncate 
                            dark:text-zinc-400 text-zinc-600 dark:hover:text-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-900/60 
                            hover:bg-zinc-200/50 border border-transparent dark:hover:border-zinc-900/40 hover:border-zinc-200"
                        >
                            {/* Adaptive status dot indicator */}
                            <span
                                className="w-1.5 h-1.5 rounded-full dark:bg-zinc-800 bg-zinc-300 group-hover:bg-indigo-500 
                                dark:group-hover:bg-indigo-400 transition-colors shrink-0 duration-200"
                            />
                            <span className="truncate">{mention.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}