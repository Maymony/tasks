import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <Form.Group controlId="multiple-choice-question">
                <Form.Label>Choose an answer:</Form.Label>
                <Form.Select
                    value={selectedOption}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setSelectedOption(event.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <div>{selectedOption === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
