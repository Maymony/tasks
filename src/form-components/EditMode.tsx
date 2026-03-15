import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEditMode(event.target.checked);
                }}
            />

            {editMode ?
                <div>
                    <Form.Group controlId="edit-name-input">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setUserName(event.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="student-checkbox"
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
                    {userName} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
