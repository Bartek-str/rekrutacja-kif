import React from "react";
import Circle from "./Circle";
import Exit from "./Exit";
import Header from "./Header";
import MainText from "./MainText";
import Form from "./Form";
import BottomText from "./BottomText";

function LogIn() {
    return (
        <div className='LogIn'>
            <Circle />
            <Exit />
            <Header />
            <MainText />
            <Form />
            <BottomText />
        </div>
    );
}

export default LogIn;