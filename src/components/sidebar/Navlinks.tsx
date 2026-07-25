// import icons
import { BookOpen } from 'lucide-react';

// import type
import type { LogItem } from '../../sections/Sidebar';
import type { useLocation } from 'react-router-dom';

// navlinks props
interface NavlinksProps {
    sortedAndFilteredLogs: LogItem[];
    navigate: (path: string) => void;
    location: ReturnType<typeof useLocation>;
}

// navlinks component
export default function Navlinks({ sortedAndFilteredLogs, navigate, location }: NavlinksProps) {
    return (
        <nav className="flex-1 overflow-y-auto px-3 pb-4 space-y-1 relative z-20 scrollbar-thin dark:scrollbar-thumb-zinc-900 scrollbar-thumb-zinc-200">
            {sortedAndFilteredLogs.length > 0 ? (
                sortedAndFilteredLogs.map((log) => {
                    const isActive = location.pathname === log.path;

                    return (
                        <button
                            key={log.id}
                            onClick={() => navigate(log.path)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group text-left
                            cursor-pointer 
                                ${isActive
                                    ? 'dark:bg-zinc-100 dark:text-zinc-950 bg-zinc-900 text-white shadow-lg font-semibold'
                                    : 'dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-900/60 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
                                }`}
                        >
                            <BookOpen
                                size={15}
                                className={`transition-colors duration-200 
                                    ${isActive
                                        ? 'dark:text-zinc-950 text-white'
                                        : 'dark:text-zinc-600 text-zinc-400 dark:group-hover:text-zinc-400 group-hover:text-zinc-900'
                                    }`}
                            />

                            <span className="truncate">{log.title}</span>
                        </button>
                    );
                })
            ) : (
                <div className="py-8 text-center">
                    <p className="text-xs dark:text-zinc-600 text-zinc-400">No matching logs</p>
                </div>
            )}
        </nav>
    );
}