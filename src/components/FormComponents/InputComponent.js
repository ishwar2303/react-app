import React from 'react'

function InputComponent(props) {
    return (
        <div className='input-container'>
            <div>
                <span>
                    <i class={props.icon}/>
                </span>
                <label>{props.label}</label>
            </div>
            <input type={props.type} name={props.name} required={props.fill} />
        </div>
    )
}

export default InputComponent
