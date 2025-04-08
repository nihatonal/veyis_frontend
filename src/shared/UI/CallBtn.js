import React from 'react';

import './CallBtn.css'
function CallBtn(props) {
    return (

        <button className={`call_btn_wrapper ${props.classCallBtn}`}
            onClick={props.onClick}>
            {props.children}
        </button>

    );
}

export default CallBtn;