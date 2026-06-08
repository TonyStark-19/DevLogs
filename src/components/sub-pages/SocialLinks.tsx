// import react
import React from 'react';

// link props
interface LinkProps {
    className?: string;
}

// Independent LinkedIn Anchor Component
export const LinkedInLink: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://linkedin.com/in/aditya-chandel-223bb3308"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            LinkedIn
        </a>
    );
};

// Independent Twitter Anchor Component
export const TwitterLink: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://twitter.com/iamaditya_3"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Twitter
        </a>
    );
};

// Combined Layout Component (Default Export)
export default function SocialLinks(): React.JSX.Element {
    return (
        <>
            <LinkedInLink />
            {' and '}
            <TwitterLink />
        </>
    );
}