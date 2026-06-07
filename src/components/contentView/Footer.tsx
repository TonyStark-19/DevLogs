// import icons
import { Heart, Flame } from 'lucide-react';

// footer component
export default function Footer({ daysStreak }: { daysStreak: number }) {
    return (
        <footer
            className={`w-full py-6 px-6 md:px-12 lg:px-16 border-t dark:border-zinc-900 border-zinc-200 
            bg-zinc-950/20 dark:bg-zinc-950/20 text-xs dark:text-zinc-500 text-zinc-400 flex flex-col sm:flex-row 
            justify-between items-center gap-3 select-none mt-6`}
        >
            <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
                <span>by</span>
                <span className="font-semibold dark:text-zinc-400 text-zinc-600">Aditya Chandel</span>
            </div>

            <div
                className="flex items-center gap-1.5 dark:text-zinc-400 text-zinc-600 bg-zinc-900/40 dark:bg-zinc-900/40
                px-2.5 py-1 rounded-full border dark:border-zinc-800 border-zinc-300"
            >
                <Flame size={12} className="text-amber-500 fill-amber-500" />
                <span>Streak: <strong className="font-bold">{daysStreak} Days</strong></span>
            </div>
        </footer>
    )
}