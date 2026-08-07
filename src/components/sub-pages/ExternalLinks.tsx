// import react
import React from 'react';

// link props
interface LinkProps {
    className?: string;
}

// Independent Apna colege Anchor Component
export const ApnaCollege: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://www.youtube.com/@ApnaCollegeOfficial"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Apna College
        </a>
    );
};

// Independent C Tutorial Anchor Component
export const CTutorial: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://youtu.be/irqbmMNs2Bo?si=a9WCGm4v4D7SF7H8"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            a one-shot C language tutorial
        </a>
    );
};

// Independent C Coding website Anchor Component
export const CCoding: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://c-programming-six.vercel.app"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            C-Coding
        </a>
    );
};

// Independent Amazon Clone Anchor Component
export const AmazonClone: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://youtu.be/nGhKIC_7Mkk?si=1BoNbUGqxIpcZucm"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Amazon website clone
        </a>
    );
};

// Independent Coding lab Anchor Component
export const CodingLab: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://www.youtube.com/playlist?list=PLImJ3umGjxdD3ov2lwg0SM5rxz5v9FjOf"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Coding Lab
        </a>
    );
};

// Independent HTML CSS Website Anchor Component
export const HtmlCssWebiste: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://html-css-projects-phi.vercel.app"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            HTML-CSS-Projects
        </a>
    );
};

// Independent Js Tutorial Anchor Component
export const JSTutorial: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://youtu.be/VlPiVmYuoqw?si=NIHl5TO_KEATbSh_"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            JavaScript
        </a>
    );
};

// Independent Hacktoberfest Anchor Component
export const Hacktoberfest: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://hacktoberfest.com/"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Hacktoberfest
        </a>
    );
};

// Independent DSA Playlist Anchor Component
export const DSAPlaylist: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Data Structures and Algorithms (DSA) using Apna College's playlist.
        </a>
    );
};

// Independent OSCG Anchor Component
export const OSCG: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://www.osconnect.org"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Open Source Connect Global
        </a>
    );
};

// Independent Krutrim insights Anchor Component
export const KrutrimInsights: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://www.krutriminsights.com"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Krutrim insights
        </a>
    );
};

// Independent Shikhram-AI Anchor Component
export const ShikhramAI: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://www.shikhram.com"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Shikhram-AI
        </a>
    );
};

// Independent GSSOC Anchor Component
export const GSSOC: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://gssoc.girlscript.tech/"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            GirlScript Summer of Code
        </a>
    );
};

// Independent GSOC Anchor Component
export const GSOC: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://summerofcode.withgoogle.com/"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Google Summer of Code (GSoC)
        </a>
    );
};

// Independent Daksh Jindal podcast Anchor Component
export const DakshJindal: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://open.spotify.com/show/5NUTEH8N6zey7rjPth1lsy?si=2f209a61e27b4126"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            The Mindset show with Daksh Jindal
        </a>
    );
};

// Independent BeerBiceps podcast Anchor Component
export const BeerBiceps: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://www.youtube.com/@beerbiceps"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            YouTube podcasts by Ranveer Allahbadia aka BeerBiceps
        </a>
    );
};

// Independent Portfolio Anchor Component
export const Portfolio: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://aditya-devfolio-one.vercel.app"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Portfolio Website
        </a>
    );
};

// Independent MDN Docs Anchor Component
export const MDNDocs: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://developer.mozilla.org/en-US"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            MDN Web Docs
        </a>
    );
};

// Independent React Docs Anchor Component
export const ReactDocs: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            react.dev
        </a>
    );
};

// Independent Tailwind Docs Anchor Component
export const TailwindDocs: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://tailwindcss.com/docs/installation/using-vite"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Tailwind CSS Docs
        </a>
    );
};

// Independent Chai or Code Anchor Component
export const ChaiOrCode: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="www.youtube.com/@chaiaurcode"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Chai Or Code
        </a>
    );
};

// Independent Roadmap.sh Anchor Component
export const Roadmap: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://roadmap.sh/"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            roadmap.sh
        </a>
    );
};

// Independent medium Anchor Component
export const Medium: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://medium.com/"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            Medium
        </a>
    );
};

// Independent DevStash Anchor Component
export const DevStash: React.FC<LinkProps> = ({ className = '' }) => {
    return (
        <a
            href="https://devstash-nine.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 
            hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 ease-in-out ${className}`}
        >
            DevStash
        </a>
    );
};