import React from 'react';

// log footer props
interface LogFooterProps {
    text: string | React.ReactNode;
    credits?: React.ReactNode;
}

// log footer component
export default function LogFooter({ text, credits }: LogFooterProps) {
    return (
        <div className="mt-12 space-y-6">
            {credits && (
                <div
                    className="text-xs dark:text-zinc-500 text-zinc-400 border-t border-zinc-200 dark:border-zinc-900 pt-6 flex flex-col sm:flex-row 
                    gap-2 sm:justify-between transition-colors duration-300"
                >
                    {credits}
                </div>
            )}

            <div
                className="p-4 rounded-xl text-center border dark:bg-zinc-950/40 bg-zinc-100/50 border-zinc-200 dark:border-zinc-900 
                transition-colors duration-300 text-sm font-medium dark:text-zinc-400 text-zinc-500"
            >
                {text}
            </div>
        </div>
    );
}