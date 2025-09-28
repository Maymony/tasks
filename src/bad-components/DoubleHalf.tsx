import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoublerProps {
    setValue: (value: number) => void;
    value: number;
}

interface HalverProps {
    setValue: (value: number) => void;
    value: number;
}

function Doubler({ setValue, value }: DoublerProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(2 * value);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ setValue, value }: HalverProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(0.5 * value);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setValue={setDhValue} value={dhValue}></Doubler>
            <Halver setValue={setDhValue} value={dhValue}></Halver>
        </div>
    );
}
