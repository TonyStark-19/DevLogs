// log header props
interface LogHeaderProps {
    title: string;
    subtitle?: string;
}

// log header component
export default function LogHeader({ title, subtitle }: LogHeaderProps) {
    return (
        <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight dark:text-white text-zinc-900 transition-colors">
                {title}
            </h1>

            {subtitle && (
                <p className="mt-2 text-sm font-medium dark:text-zinc-400 text-zinc-500 italic">
                    {subtitle}
                </p>
            )}

            <hr className="mt-6 border-zinc-200 dark:border-zinc-900 transition-colors" />
        </div>
    );
};