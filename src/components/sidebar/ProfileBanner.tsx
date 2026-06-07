// import icons
import { Sun, Moon } from 'lucide-react';

// profile banner props
interface ProfileBannerProps {
    setIsDarkMode: (isDark: boolean) => void;
    isDarkMode: boolean;
}

// profile banner component
export default function ProfileBanner({ setIsDarkMode, isDarkMode }: ProfileBannerProps) {
    return (
        <div
            className="relative w-full h-48 group overflow-hidden flex flex-col justify-end p-5 bg-linear-to-t from-zinc-950 via-zinc-900/40 to-transparent 
                dark:from-zinc-950"
        >
            <img
                src="/images/profile.jpg"
                alt="Aditya Chandel"
                className="absolute inset-0 w-full h-full object-cover z-0 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all 
                duration-700 ease-out"
            />

            <div
                className="absolute inset-0 z-10 bg-linear-to-t dark:from-zinc-950 dark:via-zinc-950/50 dark:to-transparent 
                from-zinc-50 via-zinc-50/60 to-transparent"
            />

            <div className="relative z-20 flex justify-between items-end w-full">
                <div>
                    <h2 className="text-xl font-black tracking-tight dark:text-white text-zinc-900">Aditya Chandel</h2>
                    <p className="text-xs font-medium dark:text-zinc-400 text-zinc-500 mt-0.5">DevLogs & Reflections</p>
                </div>

                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-2 rounded-lg border backdrop-blur-md transition-all duration-300 dark:bg-zinc-900/80 dark:border-zinc-800 cursor-pointer
                    dark:text-zinc-400 dark:hover:text-amber-400 bg-white/80 border-zinc-200 text-zinc-600 hover:text-indigo-600 shadow-sm"
                >
                    {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                </button>
            </div>
        </div>
    )
}