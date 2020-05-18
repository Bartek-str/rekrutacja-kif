import React from "react";

function PIN() {
    return (
        <div className='PIN'>
            <input className='first' type='number'/>
            <input className='second' type='number' name='pin' min={0} max={9} maxLength={1} />
            <input className='third' type='number' name='pin' min={0} max={9} maxLength={1} />
            <input className='fourth' type='number' name='pin' min={0} max={9} maxLength={1}/>
        </div>
    );
}

export default PIN;