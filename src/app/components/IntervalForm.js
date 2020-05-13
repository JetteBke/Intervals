import React from "react";
import './IntervalForm.css';

const IntervalForm = () => {

    const [firstInterval, setFirstInterval] = React.useState([]);
    const [secondInterval, setSecondInterval] = React.useState([]);
    const [pause, setPause] = React.useState([]);

    const changeFirstInterval = (event) => {
        const interval = event.target.value;
        setFirstInterval(interval);
    };

    const changeSecondInterval = (event) => {
        const interval = event.target.value;
        setSecondInterval(interval);
    };

    const changePause = (event) => {
        const interval = event.target.value;
        setPause(interval);
    };

    return (
        <form onSubmit={null} className="intervalForm">
            <label className="formLabel">Interval 1</label>
            <input className="formInput" type="text" value={firstInterval} onChange={changeFirstInterval}/>
            <label className="formLabel">Interval 2</label>
            <input className="formInput" type="text" value={secondInterval} onChange={changeSecondInterval}/>
            <label className="formLabel">Pause</label>
            <input className="formInput" type="text" value={pause} onChange={changePause}/>
        </form>
    )
};

export default IntervalForm;

