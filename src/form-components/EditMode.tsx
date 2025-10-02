import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                }}
            >
                <h3>Edit Mode</h3>
                <Form.Check
                    type="switch"
                    id="edit-mode-switch"
                    label="Edit Mode"
                    checked={isEditMode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setIsEditMode(event.target.checked);
                    }}
                />
            </div>
            {isEditMode ?
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <Form.Group controlId="userNameInput">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setUserName(event.target.value);
                            }}
                            style={{ width: "150px" }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setIsStudent(event.target.checked);
                        }}
                    />
                </div>
            :   <div>
                    {userName} is {isStudent ? "" : "not "}a student.
                </div>
            }
        </div>
    );
}
