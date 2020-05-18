import React from "react";
import Circle from "./Circle";
import Exit from "./Exit";
import Header from "./Header";
import MainText from "./MainText";
import Form from "./Form";

function LogIn() {
    return (
        <div className='LogIn'>
            <Circle />
            <Exit />
            <Header />
            <MainText />
            <Form />
        </div>
    );
}

export default LogIn;