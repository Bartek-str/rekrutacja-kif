import React from "react";

function PIN() {
    return (
        <div className='PIN'>
            <input className='first' type='text' maxLength={1} pattern={'[0-9]'} />
            <input className='second' type='text' maxLength={1} pattern={'[0-9]'} />
            <input className='third' type='text' maxLength={1} pattern={'[0-9]'} />
            <input className='fourth' type='text' maxLength={1} pattern={'[0-9]'} />
        </div>
    );
}

export default PIN;