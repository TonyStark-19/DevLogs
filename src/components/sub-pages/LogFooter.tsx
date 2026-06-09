import React from 'react';

// log footer props
interface LogFooterProps {
    text: string | React.ReactNode;
    credits?: React.ReactNode;
}

// log footer component
export default function LogFooter({ text, credits }: LogFooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <div className="mt-12 space-y-6">
            {credits && (
                <div
                    className="text-xs dark:text-zinc-500 text-zinc-400 border-t border-zinc-200 dark:border-zinc-900 pt-6 flex flex-col sm:flex-row 
                    gap-2 sm:justify-between transition-colors duration-300 text-right"
                >
                    {credits}
                    <div className="flex gap-3">
                        <a
                            href="https://linkedin.com/in/aditya-chandel-223bb3308"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://twitter.com/iamaditya_3"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            Twitter
                        </a>

                        <a
                            href="https://github.com/TonyStark-19"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            )}

            {!credits &&
                <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
                    <p>© {currentYear} DevLogs — Aditya Chandel</p>

                    <div className="flex gap-3">
                        <a
                            href="https://linkedin.com/in/aditya-chandel-223bb3308"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://twitter.com/iamaditya_3"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            Twitter
                        </a>

                        <a
                            href="https://github.com/TonyStark-19"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            }

            <div
                className="p-4 rounded-xl text-center border dark:bg-zinc-950/40 bg-zinc-100/50 border-zinc-200 dark:border-zinc-900 
                transition-colors duration-300 text-sm font-medium dark:text-zinc-400 text-zinc-500"
            >
                {text}
            </div>
        </div>
    );
}