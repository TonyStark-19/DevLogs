// import react and hooks
import React, { useState, useMemo, useEffect } from 'react';

// import routing tools
import { useNavigate, useLocation } from 'react-router-dom';

// import component
import ProfileBanner from '../components/sidebar/ProfileBanner';
import FilterSearch from '../components/sidebar/FilterSearch';
import Navlinks from '../components/sidebar/Navlinks';

// log item type definition
export interface LogItem {
    id: string;
    title: string;
    path: string;
}

// log page data
const rawLogs: LogItem[] = [
    { id: 'DevLogs', title: 'What is DevLogs?', path: '/' },
    { id: 'Consistency', title: 'Consistency', path: '/consistency' },
    { id: 'How-to-start', title: 'How to start?', path: '/how-to-start' },
    { id: 'Procastination', title: 'Procastination', path: '/procastination' },
    { id: 'Time-management', title: 'Time management', path: '/time-management' },
    { id: 'Podcast', title: 'Podcast', path: '/podcast' },
    { id: 'Youtube-channels', title: 'Youtube channels', path: '/youtube-channels' },
    { id: 'Networking', title: 'Networking', path: '/networking' },
    { id: 'Project-building', title: 'Project building', path: '/project-building' },
    { id: 'Problem-solving', title: 'Problem solving', path: '/problem-solving' },
    { id: 'Dedication', title: 'Dedication', path: '/dedication' },
    { id: 'Git', title: 'Git & Github', path: '/git' },
    { id: 'Mental-health', title: 'Mental health', path: '/mental-health' },
    { id: 'Physical-health', title: 'Physical health', path: '/physical-health' },
    { id: 'Productivity', title: 'Productivity', path: '/productivity' },
    { id: 'Awareness', title: 'Awareness', path: '/awareness' },
    { id: 'Competition', title: 'Competition', path: '/competition' },
    { id: 'Chatgpt', title: 'Chatgpt', path: '/chatgpt' },
    { id: 'Hobbies', title: 'Hobbies', path: '/hobbies' },
    { id: 'Music', title: 'Music', path: '/music' },
    { id: 'My-journey', title: 'My coding journey', path: '/my-journey' },
    { id: 'Mindset', title: 'Mindset', path: '/mindset' },
    { id: 'Curiosity', title: 'Curiosity', path: '/curiosity' },
    { id: 'Journey', title: 'Journey', path: '/journey' },
    { id: 'Skills', title: 'Skills', path: '/skills' },
    { id: 'Soft-skills', title: 'Soft Skills', path: '/soft-skills' },
    { id: 'Burnout', title: 'Burnout', path: '/burnout' },
    { id: 'Growth', title: 'Growth', path: '/growth' },
    { id: 'Discipline', title: 'Discipline', path: '/discipline' },
    { id: 'Open-source', title: 'Open source', path: '/open-source' },
];

// Sidebar component definition
export const Sidebar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // Lazy initializing state from localStorage so it persists on page reloads
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true; // default to dark mode
    });

    const navigate = useNavigate();
    const location = useLocation();

    // Sync theme adjustments with both DOM token classes and localStorage caches
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const sortedAndFilteredLogs = useMemo(() => {
        return rawLogs
            .filter((log) => log.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => {
                if (a.id === 'DevLogs') return -1;
                if (b.id === 'DevLogs') return 1;
                return a.title.localeCompare(b.title);
            });
    }, [searchQuery]);

    return (
        <aside
            className="w-80 h-screen flex flex-col relative overflow-hidden border-r transition-colors duration-300 dark:bg-zinc-950 dark:border-zinc-900 
            dark:text-zinc-100 bg-zinc-50 border-zinc-200 text-zinc-900"
        >
            {/* Background Dot Layer Grid */}
            <div
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] 
                bg-size-[16px_16px]"
            ></div>

            {/* Profile Banner */}
            <ProfileBanner
                setIsDarkMode={setIsDarkMode}
                isDarkMode={isDarkMode}
            />

            {/* Filter search box */}
            <FilterSearch
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {/* Navigation links */}
            <Navlinks
                sortedAndFilteredLogs={sortedAndFilteredLogs}
                navigate={navigate}
                location={location}
            />
        </aside>
    );
};