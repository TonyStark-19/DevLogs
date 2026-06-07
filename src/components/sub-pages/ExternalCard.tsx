// import icond
import { ArrowUpRight } from 'lucide-react';

// external card props
interface ExternalCardProps {
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    text: string;
    highlightText?: string;
}

// external card component
export default function ExternalCard({ href, icon: Icon, text, highlightText }: ExternalCardProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between gap-4 p-4 rounded-xl border transition-all duration-200 group bg-zinc-900/20 
            dark:bg-zinc-900/20 border-zinc-200 dark:border-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-100/50 
            dark:hover:bg-zinc-900/50"
        >
            <div className="flex items-start gap-3 text-sm">
                {/* Dynamic Lucide Vector Wrapper */}
                <div
                    className="mt-0.5 shrink-0 dark:text-zinc-400 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 
                    transition-colors duration-200"
                >
                    <Icon className="h-5 w-5 stroke-[1.75]" />
                </div>

                <p className="dark:text-zinc-300 text-zinc-600 leading-relaxed">
                    {text}{' '}
                    {highlightText && (
                        <span
                            className="font-semibold text-zinc-900 dark:text-white underline decoration-zinc-300 dark:decoration-zinc-800 
                            underline-offset-4 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:decoration-current 
                            transition-all duration-200"
                        >
                            {highlightText}
                        </span>
                    )}
                </p>
            </div>

            {/* Right Indicator Arrow Link */}
            <ArrowUpRight
                size={16}
                className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors shrink-0 mt-0.5"
            />
        </a>
    );
};