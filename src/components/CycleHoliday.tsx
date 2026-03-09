import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Celebration = "🎇" | "👻" | "🦃" | "🎊" | "💘";

const alphabetStep: Record<Celebration, Celebration> = {
    "👻": "🎇", // Halloween -> Independence Day
    "🎇": "🎊", // Independence Day -> New Year
    "🎊": "🦃", // New Year -> Thanksgiving
    "🦃": "💘", // Thanksgiving -> Valentine's Day
    "💘": "👻", // Valentine's Day -> Halloween
};

const calendarStep: Record<Celebration, Celebration> = {
    "🎊": "💘", // New Year -> Valentine's Day
    "💘": "🎇", // Valentine's Day -> Independence Day
    "🎇": "👻", // Independence Day -> Halloween
    "👻": "🦃", // Halloween -> Thanksgiving
    "🦃": "🎊", // Thanksgiving -> New Year
};

export function CycleHoliday(): React.JSX.Element {
    const [currentCelebration, setCurrentCelebration] =
        useState<Celebration>("🎊");

    return (
        <div>
            <div>Holiday: {currentCelebration}</div>
            <Button
                onClick={() => {
                    setCurrentCelebration(alphabetStep[currentCelebration]);
                }}
            >
                Move by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setCurrentCelebration(calendarStep[currentCelebration]);
                }}
            >
                Move by Year
            </Button>
        </div>
    );
}
