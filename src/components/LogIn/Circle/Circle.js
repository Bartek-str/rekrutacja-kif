import React from "react";
import Lock from '../../../assets/Union.svg';
import Lock1 from '../../../assets/Union1.svg'

const media = window.innerWidth;
// dodać event nasłuchujący na zmianę

function Circle() {
    return (
        <div className="Circle">
            <img src={media >= '1280' ? Lock1 : Lock} alt='lock' />
        </div>
    );
}

export default Circle;