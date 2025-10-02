import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function gain() {
        const numRequest = parseInt(requestedAttempts);
        if (!isNaN(numRequest)) {
            setAttemptsLeft(attemptsLeft + numRequest);
        }
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsLeft}</div>
            <Form.Group controlId="requestAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(event.target.value);
                    }}
                    style={{ width: "150px" }}
                />
            </Form.Group>
            <div style={{ display: "flex", gap: "5px" }}>
                <Button
                    onClick={() => {
                        setAttemptsLeft(attemptsLeft - 1);
                    }}
                    disabled={attemptsLeft === 0}
                >
                    use
                </Button>
                <Button onClick={gain}>gain</Button>
            </div>
        </div>
    );
}
