// log header props
interface LogHeaderProps {
    title: string;
    subtitle?: string;
}

// log header component
export default function LogHeader({ title, subtitle }: LogHeaderProps) {
    return (
        <div className="mb-10 select-none group relative max-xl:pt-7">
            <div className="flex items-start gap-4">
                {/* Decorative left accent line that pops on hover */}
                <div
                    className="w-1 h-10 rounded-full bg-zinc-300 dark:bg-zinc-800 group-hover:bg-zinc-500 dark:group-hover:bg-zinc-400 
                    transition-colors duration-300 mt-1 shrink-0"
                />

                <div className="space-y-2 flex-1">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-zinc-50 text-zinc-900 transition-colors duration-300">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-sm md:text-base font-normal dark:text-zinc-400 text-zinc-600 transition-colors duration-300 max-w-3xl leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* Fading border line instead of a harsh flat hr rule */}
            <div
                className="mt-8 h-px w-full bg-linear-to-r from-zinc-200 via-zinc-100 to-transparent dark:from-zinc-800 dark:via-zinc-900 
                dark:to-transparent transition-colors duration-300"
            />
        </div>
    );
}