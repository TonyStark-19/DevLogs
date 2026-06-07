// import icons
import { Search } from 'lucide-react';

// filter search props
interface FilterSearchProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

// filter search component
export default function FilterSearch({ searchQuery, setSearchQuery }: FilterSearchProps) {
    return (
        <div className="p-4 relative z-20">
            <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 dark:text-zinc-500 text-zinc-400" />

                <input
                    type="text"
                    placeholder="Filter logs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border outline-none transition-all duration-200 bg-zinc-900/50 dark:bg-zinc-900/50 
                    border-zinc-800 dark:border-zinc-800 dark:text-zinc-200 text-zinc-800"
                />
            </div>
        </div>
    )
}