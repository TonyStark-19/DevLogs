// import usememo
import { useMemo } from 'react';

// use days streak hook
export default function useDaysStreak(startDateUTC: number): number {
    return useMemo(() => {
        const MS_PER_DAY = 1000 * 60 * 60 * 24;
        const today = new Date();

        const currentUtc = Date.UTC(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
        );

        const difference = currentUtc - startDateUTC;

        // Ensure we don't accidentally display a negative number if the start date is in the future
        return Math.floor(difference / MS_PER_DAY);
    }, [startDateUTC]);
}