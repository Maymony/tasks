import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    return (
        <div>
            <div>Attempts: {attempts}</div>
            <Button
                onClick={() => {
                    setProgress(true);
                    setAttempts(attempts - 1);
                }}
                disabled={progress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setProgress(false);
                }}
                disabled={!progress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={progress}
            >
                Mulligan
            </Button>
        </div>
    );
}
