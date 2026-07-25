// import react and hooks
import { useState, useMemo, useEffect } from 'react';

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

// sidebar props
export interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
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
    { id: 'Motivation', title: 'Motivation', path: '/motivation' },
    { id: 'Communities', title: 'Communities', path: '/communities' },
    { id: 'Exhaustion', title: 'Exhaustion', path: '/exhaustion' },
    { id: 'Meditation', title: 'Meditation', path: '/meditation' },
    { id: 'Freelance', title: 'Freelance', path: '/freelance' },
    { id: 'HundredDaysOfCode', title: '#100DaysOfCode', path: '/100DaysOfCode' },
    { id: 'ComfortZone', title: 'Comfort Zone', path: '/comfort-zone' },
    { id: 'Tutorials', title: 'Tutorials', path: '/tutorials' },
    { id: 'Documentation', title: 'Documentation', path: '/documentation' },
    { id: 'Upskilling', title: 'Upskilling', path: '/upskilling' },
    { id: 'Debugging', title: 'Debugging', path: '/debugging' },
    { id: 'Writing', title: 'Writing', path: '/writing' },
];

// Sidebar component definition
export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
    const [searchQuery, setSearchQuery] = useState('');

    // Lazy initializing state from localStorage so it persists on page reloads
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });

    const navigate = useNavigate();
    const location = useLocation();

    // Auto-collapse sidebar on mobile screen configurations once a path route executes
    useEffect(() => {
        if (onClose) {
            onClose();
        }
    }, [location.pathname]);

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

    // filter search
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
            className={`fixed top-14 left-0 z-40 w-full h-[calc(100vh-3.5rem)] flex flex-col overflow-hidden transition-transform duration-300 ease-in-out
            dark:bg-zinc-950 bg-zinc-50

            ${isOpen
                    ? "translate-x-0"
                    : "-translate-x-full"
                } 
            xl:relative xl:top-0 xl:left-0 xl:z-auto xl:w-80 xl:h-screen xl:translate-x-0 xl:border-r xl:dark:border-zinc-900 xl:border-zinc-200`}
        >
            {/* Background Dot Layer Grid */}
            <div
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] 
                bg-size-[16px_16px]"
            />

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