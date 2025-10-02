import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoiceOptions">
                <Form.Label>Your Answer:</Form.Label>
                <Form.Select
                    value={selectedChoice}
                    onChange={updateChoice}
                    style={{ width: "150px" }}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                You got it: {selectedChoice === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
