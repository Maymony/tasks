import React from "react";
import "./App.css";
import kitten from "./assets/kitten.png";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <header
                            className="App-header"
                            style={{ backgroundColor: "green" }}
                        >
                            <h1>UD CISC275 with React Hooks and TypeScript</h1>
                        </header>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                        <p>Hello World, I am Abdulrahman Almaymony</p>

                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>

                        <ol>
                            <li>First</li>
                            <li>Second</li>
                            <li>Third</li>
                        </ol>

                        <div
                            style={{
                                width: "100%",
                                height: "120px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>

                    <Col>
                        <img src={kitten} alt="A picture of a kitten" />

                        <div
                            style={{
                                width: "100%",
                                height: "120px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
