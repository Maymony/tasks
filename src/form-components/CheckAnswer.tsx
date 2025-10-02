import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
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
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Your Answer:</Form.Label>
                <Form.Control
                    value={userAnswer}
                    onChange={updateAnswer}
                    style={{ width: "150px" }}
                />
            </Form.Group>
            <div>{userAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
