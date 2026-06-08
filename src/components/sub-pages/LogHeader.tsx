// log header props
interface LogHeaderProps {
    title: string;
    subtitle?: string;
}

// log header component
export default function LogHeader({ title, subtitle }: LogHeaderProps) {
    return (
        <div className="mb-6 select-none">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight dark:text-white text-zinc-900 transition-colors duration-300">
                {title}
            </h1>

            {subtitle && (
                <p className="mt-2 text-sm font-medium dark:text-zinc-400 text-zinc-500 italic transition-colors duration-300">
                    {subtitle}
                </p>
            )}

            <hr className="mt-6 border-zinc-200 dark:border-zinc-900 transition-colors duration-300" />
        </div>
    );
}