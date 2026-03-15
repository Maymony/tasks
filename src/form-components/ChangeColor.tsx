import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];

    const [chosenColor, setChosenColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>

            <div>
                {colors.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="color-choice"
                        id={`color-${color}`}
                        value={color}
                        checked={chosenColor === color}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setChosenColor(event.target.value);
                        }}
                        label={
                            <span
                                style={{
                                    backgroundColor: color,
                                    padding: "2px 4px",
                                }}
                            >
                                {color}
                            </span>
                        }
                    />
                ))}
            </div>

            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: chosenColor,
                        padding: "2px 4px",
                    }}
                >
                    {chosenColor}
                </span>
                .
            </div>
        </div>
    );
}
