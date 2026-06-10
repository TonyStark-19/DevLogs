// import react
import React from 'react';

// import lucide icons
import { Menu, Layers, Link2, X, Link2Off } from 'lucide-react';

// import Link
import { Link } from 'react-router-dom';

// navbar props
interface NavbarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isLinksOpen?: boolean;
    setIsRightSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

// navbar component
export default function Navbar({ isSidebarOpen, setIsSidebarOpen, isLinksOpen, setIsRightSidebarOpen }: NavbarProps) {
    // handle links click
    const handleQuickLinksClick = () => {
        if (setIsRightSidebarOpen) {
            setIsRightSidebarOpen(prev => !prev);
        }
    };

    return (
        <header
            className="w-full h-14 xl:hidden fixed top-0 left-0 flex items-center justify-between px-4 border-b shrink-0 z-50 transition-colors 
            duration-300 dark:bg-zinc-950 dark:border-zinc-900 bg-zinc-50 border-zinc-200 text-zinc-900 dark:text-zinc-100"
        >
            {/* Left Section */}
            <Link to="/">
                <div className="flex items-center gap-2.5 select-none">
                    <div
                        className="p-1.5 rounded-lg border flex items-center justify-center transition-colors duration-300
                        bg-zinc-100 border-zinc-200 text-zinc-800
                        dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-zinc-200"
                    >
                        <Layers size={16} className="animate-pulse" />
                    </div>

                    <span
                        className="text-sm font-bold tracking-tight font-mono bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 
                        dark:to-zinc-400 bg-clip-text text-transparent"
                    >
                        DevLogs
                    </span>
                </div>
            </Link>

            {/* Right Section: Mobile Interaction Triggers */}
            <div className="flex items-center gap-1.5">
                {/* Quick Link Mentions Right Sidebar Button */}
                <button
                    onClick={handleQuickLinksClick}
                    className="p-2 rounded-lg transition-all duration-200 text-zinc-500 dark:text-zinc-400 
                    hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-900/60"
                    title="Open Page Mentions"
                >
                    {isLinksOpen ? (
                        <Link2Off size={18} />
                    ) : (
                        <Link2 size={18} />
                    )}
                </button>

                {/* Main Navigation Left Sidebar Toggle */}
                <button
                    onClick={() => setIsSidebarOpen(prev => !prev)}
                    className="p-2 rounded-lg transition-all duration-200 text-zinc-500 dark:text-zinc-400 
                    hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-900/60"
                    title="Open Navigation"
                >
                    {isSidebarOpen ? (
                        <X size={18} />
                    ) : (
                        <Menu size={18} />
                    )}
                </button>
            </div>
        </header>
    );
}