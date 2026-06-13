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

// Independent GitHub Anchor Component
export const GitHubLink: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://github.com/TonyStark-19"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            GitHub
        </a>
    );
};

// Independent Spotify profile Anchor Component
export const SpotifyLink: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://open.spotify.com/user/3144dse2ga5ij26naaky2x3xml7a?si=52e8ae4e5ea74526"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Spotify Profile
        </a>
    );
};

// Independent LeetCode Anchor Component
export const LeetCodeLink: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://leetcode.com/u/TonyStark19"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            LeetCode
        </a>
    );
};

// Independent HackerRank Anchor Component
export const HackerRankLink: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://www.hackerrank.com/profile/adityachandel371"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            HackerRank
        </a>
    );
};

// Independent Codeforces Anchor Component
export const CodeforcesLink: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://codeforces.com/"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Codeforces
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