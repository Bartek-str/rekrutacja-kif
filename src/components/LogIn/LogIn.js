import React from "react";
import Circle from "./Circle";
import Exit from "./Exit";
import Header from "./Header";
import MainText from "./MainText";
import PIN from "./PIN";

function LogIn() {
    return (
        <div className='LogIn'>
            <Circle />
            <Exit />
            <Header />
            <MainText />
            <PIN />
        </div>
    );
}

export default LogIn;