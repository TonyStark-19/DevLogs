// import use effect
import { useEffect } from "react";

// import use location
import { useLocation } from "react-router-dom";

// scroll to top on route change
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Targets the main scrollable workspace by ID
        const mainContentContainer = document.getElementById("main-scroll-wrapper");

        if (mainContentContainer) {
            mainContentContainer.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
}