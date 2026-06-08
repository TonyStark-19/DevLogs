// import react and hooks
import React, { useRef, useState } from "react";

// import routing components
import { Route, Routes } from "react-router-dom";

// import components
import { Sidebar } from "../sections/Sidebar";
import { ContentView } from "../sections/ContentView";
import ScrollToTop from "../components/utils/Scroltotop";

// import pages
import Intro from "./sub-pages/Intro";
import Consistency from "./sub-pages/Consistency";
import HowToStart from "./sub-pages/HowToStart";
import Procastination from "./sub-pages/Procrastination";
import TimeManagement from "./sub-pages/TimeManagement";
import Podcast from "./sub-pages/Podcast";
import YoutubeChannels from "./sub-pages/YoutubeChannels";
import Networking from "./sub-pages/Networking";
import ProjectBuilding from "./sub-pages/ProjectBuilding";
import ProblemSolving from "./sub-pages/ProblemSolving";
import Dedication from "./sub-pages/Dedication";
import Git from "./sub-pages/Git";
import MentalHealth from "./sub-pages/MentalHealth";
import PhysicalHealth from "./sub-pages/PhysicalHealth";
import Productivity from "./sub-pages/Productivity";
import Awareness from "./sub-pages/Awareness";

// main page component
export default function MainPage(): React.JSX.Element {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    // State management for responsive mobile drawer overlays
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    return (
        <div className="w-full h-screen flex flex-col md:flex-row transition-colors duration-300 dark:bg-zinc-950 bg-zinc-50 overflow-hidden">
            {/* Left Sidebar Layout */}
            <div
                className={`fixed inset-y-0 left-0 z-50 transform md:relative md:translate-x-0 transition-transform duration-300 ease-in-out 
                    ${isSidebarOpen ? "translate-x-0"
                        : "-translate-x-full"
                    }`}
            >
                <Sidebar />
            </div>

            {/* Backdrop overlay layer when mobile drawer layout is open/active */}
            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
                />
            )}

            {/* Main Fluid Content Container Area */}
            <div
                ref={scrollRef}
                className="flex-1 h-full overflow-y-auto flex flex-col relative scroll-smooth"
            >
                {/* Fixed reference utility hook passing to target scroll positions */}
                <ScrollToTop scrollRef={null} />

                {/* Routing Outlet for Diary Pages */}
                <ContentView>
                    <Routes>
                        <Route path="/" element={<Intro />} />
                        <Route path="/consistency" element={<Consistency />} />
                        <Route path="/how-to-start" element={<HowToStart />} />
                        <Route path="/procastination" element={<Procastination />} />
                        <Route path="/time-management" element={<TimeManagement />} />
                        <Route path="/podcast" element={<Podcast />} />
                        <Route path="/youtube-channels" element={<YoutubeChannels />} />
                        <Route path="/networking" element={<Networking />} />
                        <Route path="/project-building" element={<ProjectBuilding />} />
                        <Route path="/problem-solving" element={<ProblemSolving />} />
                        <Route path="/dedication" element={<Dedication />} />
                        <Route path="/git" element={<Git />} />
                        <Route path="/mental-health" element={<MentalHealth />} />
                        <Route path="/physical-health" element={<PhysicalHealth />} />
                        <Route path="/productivity" element={<Productivity />} />
                        <Route path="/awareness" element={<Awareness />} />
                    </Routes>
                </ContentView>
            </div>
        </div>
    );
}