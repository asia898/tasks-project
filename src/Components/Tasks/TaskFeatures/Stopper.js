import React from 'react';
import Button from "../../UI/Button";

const Stopper = props => {
    return (
        <div>
            <div>
                <p>00:00:00</p>
            </div>
            <div>
                <Button type="button">Start</Button>
                <Button type="button">Stop</Button>
                <Button type="button">Delete</Button>
            </div>
        </div>
    )
}

export default Stopper;