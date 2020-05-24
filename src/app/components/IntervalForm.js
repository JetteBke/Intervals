import React from "react";
import StartModal from "./StartModal";
import './IntervalForm.css';

const IntervalForm = () => {

    const [firstInterval, setFirstInterval] = React.useState([]);
    // const [secondInterval, setSecondInterval] = React.useState([]);
    const [pause, setPause] = React.useState([]);
    const [startModal, setStartModal] = React.useState(false);
    const [intervalData, setIntervalData] = React.useState({});

    const changeFirstInterval = (event) => {
        const interval = event.target.value;
        setFirstInterval(interval);
    };

    // const changeSecondInterval = (event) => {
    //     const interval = event.target.value;
    //     setSecondInterval(interval);
    // };

    const changePause = (event) => {
        const interval = event.target.value;
        setPause(interval);
    };

    const openModal = async (event) => {
        event.preventDefault();
        await setIntervalData({interval: firstInterval, pause: pause});
        setStartModal(true);
    };

    return (
        <form onSubmit={openModal} className="intervalForm">
            <label className="formLabel">Interval 1</label>
            <input className="formInput" type="number" value={firstInterval} onChange={changeFirstInterval}/>
            {/*<label className="formLabel">Interval 2</label>*/}
            {/*<input className="formInput" type="text" value={secondInterval} onChange={changeSecondInterval}/>*/}
            <label className="formLabel">Pause</label>
            <input className="formInput" type="number" value={pause} onChange={changePause}/>
            <input className="customButton" type="submit" value="Start" onSubmit={openModal}/>
            {startModal && <StartModal onHide={() => setStartModal(false)} show={startModal} data={intervalData}/>}
        </form>
    )
};

export default IntervalForm;

