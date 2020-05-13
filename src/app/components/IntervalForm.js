import React from "react";
import StartModal from "./StartModal";
import './IntervalForm.css';

const IntervalForm = () => {

    const [firstInterval, setFirstInterval] = React.useState([]);
    const [secondInterval, setSecondInterval] = React.useState([]);
    const [pause, setPause] = React.useState([]);
    const [startModal, setStartModal] = React.useState(false);

    let intervalData = {intervals: [firstInterval, secondInterval], pause: pause};

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

    const startTraining = (event) => {
        event.preventDefault();
        setStartModal(true);
    };

    return (
        <form onSubmit={startTraining} className="intervalForm">
            <label className="formLabel">Interval 1</label>
            <input className="formInput" type="text" value={firstInterval} onChange={changeFirstInterval}/>
            <label className="formLabel">Interval 2</label>
            <input className="formInput" type="text" value={secondInterval} onChange={changeSecondInterval}/>
            <label className="formLabel">Pause</label>
            <input className="formInput" type="text" value={pause} onChange={changePause}/>
            <input className="customButton" type="submit" value="Start" onSubmit={startTraining}/>
            {startModal && <StartModal onHide={() => setStartModal(false)} show={startModal} data={intervalData}/>}
        </form>
    )
};

export default IntervalForm;

