import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "pink",
];

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>(COLORS[0]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="color-options"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setChosenColor(event.target.value);
                        }}
                        id={`color-check-${color}`}
                        value={color}
                        checked={chosenColor === color}
                        label={
                            <span
                                style={{
                                    backgroundColor: color,
                                    color: "black",
                                    padding: "3px 8px",
                                    borderRadius: "5px",
                                }}
                            >
                                {color}
                            </span>
                        }
                    />
                ))}
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                }}
            >
                <span>You have chosen:</span>
                <div
                    data-testid="colored-box"
                    style={{
                        width: "100px",
                        height: "50px",
                        backgroundColor: chosenColor,
                        borderRadius: "5px",
                        textAlign: "center",
                        lineHeight: "50px",
                    }}
                >
                    {chosenColor}
                </div>
            </div>
        </div>
    );
}
