// import react and hooks
import React, { useState } from "react";

// import routing components
import { Route, Routes } from "react-router-dom";

// import navbar
import Navbar from "../components/navbar/Navbar";

// import components
import Sidebar from "../sections/Sidebar";
import ContentView from "../sections/ContentView";

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
import Competition from "./sub-pages/Competition";
import ChatGPT from "./sub-pages/ChatGPT";
import Hobbies from "./sub-pages/Hobbies";
import Music from "./sub-pages/Music";
import MyJourney from "./sub-pages/MyJourney";
import Mindset from "./sub-pages/Mindset";
import Curiosity from "./sub-pages/Curiosity";
import Journey from "./sub-pages/Journey";
import Skills from "./sub-pages/Skills";
import SoftSkills from "./sub-pages/SoftSkills";
import Burnout from "./sub-pages/Burnout";
import Growth from "./sub-pages/Growth";
import Discipline from "./sub-pages/Discipline";
import OpenSource from "./sub-pages/OpenSource";
import Motivation from "./sub-pages/Motivation";
import Communities from "./sub-pages/Communities";
import Exhaustion from "./sub-pages/Exhaustion";
import Meditation from "./sub-pages/Meditation";
import Freelance from "./sub-pages/Freelance";
import HundredDaysOfCode from "./sub-pages/HundredDaysOfCode";
import ComfortZone from "./sub-pages/ComfortZone";
import Tutorials from "./sub-pages/Tutorials";
import Documentation from "./sub-pages/Documentation";
import Upskilling from "./sub-pages/Upskilling";
import Debugging from "./sub-pages/Debugging";
import Writing from "./sub-pages/Writing";
import Distraction from "./sub-pages/Distraction";
import Confidence from "./sub-pages/Confidence";
import SelfDoubt from "./sub-pages/SelfDoubt";
import Journaling from "./sub-pages/Journaling";
import WorkLifeBalance from "./sub-pages/WorkLifeBalance";
import Inspiration from "./sub-pages/Inspiration";
import SelfImprovement from "./sub-pages/SelfImprovement";
import Focus from "./sub-pages/Focus";
import Ambition from "./sub-pages/Ambition";
import Passion from "./sub-pages/Passion";

// main page component
export default function MainPage(): React.JSX.Element {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isLinksOpen, setIsLinksOpen] = useState<boolean>(false);

    return (
        <div className="w-full h-screen flex flex-col xl:flex-row transition-colors duration-300 dark:bg-zinc-950 bg-zinc-50 overflow-hidden">
            {/* Left Sidebar Layout */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            {/* Main Content Area Container */}
            <div className="flex-1 h-full flex flex-col relative overflow-hidden">
                {/* Mobile Top Navbar*/}
                <Navbar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    isLinksOpen={isLinksOpen}
                    setIsRightSidebarOpen={setIsLinksOpen}
                />

                {/* Content rendering viewport */}
                <div className="flex-1 overflow-hidden flex flex-col">
                    <ContentView
                        isLinksOpen={isLinksOpen}
                        setIsLinksOpen={setIsLinksOpen}
                    >
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
                            <Route path="/competition" element={<Competition />} />
                            <Route path="/chatgpt" element={<ChatGPT />} />
                            <Route path="/hobbies" element={<Hobbies />} />
                            <Route path="/music" element={<Music />} />
                            <Route path="/my-journey" element={<MyJourney />} />
                            <Route path="/mindset" element={<Mindset />} />
                            <Route path="/curiosity" element={<Curiosity />} />
                            <Route path="/journey" element={<Journey />} />
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/soft-skills" element={<SoftSkills />} />
                            <Route path="/burnout" element={<Burnout />} />
                            <Route path="/growth" element={<Growth />} />
                            <Route path="/discipline" element={<Discipline />} />
                            <Route path="/open-source" element={<OpenSource />} />
                            <Route path="/motivation" element={<Motivation />} />
                            <Route path="/communities" element={<Communities />} />
                            <Route path="/exhaustion" element={<Exhaustion />} />
                            <Route path="/meditation" element={<Meditation />} />
                            <Route path="/freelance" element={<Freelance />} />
                            <Route path="/100DaysOfCode" element={<HundredDaysOfCode />} />
                            <Route path="/comfort-zone" element={<ComfortZone />} />
                            <Route path="/tutorials" element={<Tutorials />} />
                            <Route path="/documentation" element={<Documentation />} />
                            <Route path="/upskilling" element={<Upskilling />} />
                            <Route path="/debugging" element={<Debugging />} />
                            <Route path="/writing" element={<Writing />} />
                            <Route path="/distraction" element={<Distraction />} />
                            <Route path="/confidence" element={<Confidence />} />
                            <Route path="/self-doubt" element={<SelfDoubt />} />
                            <Route path="/journaling" element={<Journaling />} />
                            <Route path="/work-life-balance" element={<WorkLifeBalance />} />
                            <Route path="/inspiration" element={<Inspiration />} />
                            <Route path="/self-improvement" element={<SelfImprovement />} />
                            <Route path="/focus" element={<Focus />} />
                            <Route path="/ambition" element={<Ambition />} />
                            <Route path="/passion" element={<Passion />} />
                        </Routes>
                    </ContentView>
                </div>
            </div>
        </div>
    );
}