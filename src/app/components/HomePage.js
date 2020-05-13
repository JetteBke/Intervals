import React from "react";
import IntervalForm from "./IntervalForm";
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="intervalsContainer">
            <h1>Intervals</h1>
            <IntervalForm/>
        </div>
    )
};

export default HomePage;