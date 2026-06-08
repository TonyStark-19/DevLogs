// import link
import { Link } from 'react-router-dom';

// log link props
interface LogLinkProps {
    to: string;
    children: React.ReactNode;
}

// log link component
export default function LogLink({ to, children }: LogLinkProps) {
    return (
        <Link
            to={to}
            className="font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 decoration-1 
            underline-offset-4 hover:text-indigo-500 dark:hover:text-indigo-400 hover:decoration-indigo-400 dark:hover:decoration-indigo-500
            transition-all duration-300 ease-in-out"
        >
            {children}
        </Link>
    );
}