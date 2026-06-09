// import react and hooks
import React, { useEffect, useState } from 'react';

// import uselocation
import { useLocation } from 'react-router-dom';

// import components
import useDaysStreak from '../components/utils/useDaysStreak';
import Footer from '../components/contentView/Footer';
import RightSidebar from '../components/contentView/RightSidebar';
import ScrollToTop from '../components/utils/Scroltotop';

// internal mention props
export interface InternalMention {
    label: string;
    to: string;
}

// content view props
interface ContentViewProps {
    children: React.ReactNode;
}

// streak start data constant
const STREAK_START = Date.UTC(2024, 6, 9); // July 9, 2024

// content view component
export const ContentView: React.FC<ContentViewProps> = ({ children }) => {
    const [internalLinks, setInternalLinks] = useState<InternalMention[]>([]);
    const location = useLocation();
    const daysStreak = useDaysStreak(STREAK_START);

    const hasMentions = internalLinks.length > 0;

    useEffect(() => {
        const timer = setTimeout(() => {
            /* SCRAPE LOG LINKS MENTIONED IN ACTIVE PAGE CONTENT */
            const contentLinks = document.querySelectorAll('article a[href^="/"]');
            const extractedMentions: InternalMention[] = [];
            const trackingSet = new Set<string>();

            contentLinks.forEach((link) => {
                const toPath = link.getAttribute('href') || '';
                const labelText = link.textContent || '';

                if (toPath && !trackingSet.has(toPath) && labelText.trim() !== '') {
                    trackingSet.add(toPath);
                    extractedMentions.push({
                        label: labelText,
                        to: toPath,
                    });
                }
            });
            setInternalLinks(extractedMentions);
        }, 100);

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <div
            className="flex flex-1 w-full h-full relative transition-colors duration-300 bg-zinc-50 dark:bg-zinc-950"
            style={{
                backgroundImage: `
                    radial-gradient(circle at 25% 25%, var(--dot-color-1) 0.5px, transparent 1px),
                    radial-gradient(circle at 75% 75%, var(--dot-color-2) 0.5px, transparent 1px)
                `,
                backgroundSize: '10px 10px',
                imageRendering: 'pixelated',
            } as React.CSSProperties}
        >

            {/* Scroll to top on route change */}
            <ScrollToTop />

            {/* Dynamic Background Grid Layer */}
            <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[24px_24px]"></div>

            {/* Middle Workspace Layout */}
            <main
                id="main-scroll-wrapper"
                className="flex-1 overflow-y-auto px-1 flex flex-col min-h-full relative z-10 scrollbar-thin 
                dark:scrollbar-thumb-zinc-900 scrollbar-thumb-zinc-200 scroll-smooth"
            >
                {/* Core Content Box */}
                <div
                    className={`w-full max-w-5xl px-6 py-10 md:px-12 lg:px-16 flex-1 transition-all duration-300 
                    ${hasMentions ? 'mx-auto'
                            : 'mx-0'
                        }`}
                >
                    {children}
                </div>

                {/* Global Footer */}
                <Footer daysStreak={daysStreak} />
            </main>

            {/* Right Sidebar Section */}
            {hasMentions && (
                <RightSidebar internalLinks={internalLinks} />
            )}
        </div>
    );
};