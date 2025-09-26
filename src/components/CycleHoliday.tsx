import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎏" | "🪔" | "🎃" | "🦃" | "🎄";

const NEXT_BY_ALPHA: Record<Holiday, Holiday> = {
    "🎄": "🪔", // Christmas -> Diwali
    "🪔": "🎏", // Diwali -> Dragon Boat
    "🎏": "🎃", // Dragon Boat -> Halloween
    "🎃": "🦃", // Halloween -> Thanksgiving
    "🦃": "🎄", // Thanksgiving -> Christmas
};

const NEXT_BY_YEAR: Record<Holiday, Holiday> = {
    "🎏": "🪔", // Dragon Boat Festival (Summer) -> Diwali (Autumn)
    "🪔": "🎃", // Diwali (Autumn) -> Halloween (Oct 31)
    "🎃": "🦃", // Halloween (Oct 31) -> Thanksgiving (November)
    "🦃": "🎄", // Thanksgiving (November) -> Christmas (Dec 25)
    "🎄": "🎏", // Christmas (End of Year) -> Dragon Boat Festival (Next Year)
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => {
                    setHoliday(NEXT_BY_ALPHA[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(NEXT_BY_YEAR[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
