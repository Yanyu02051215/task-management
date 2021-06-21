import React from 'react';

const InputField = (props) => {
  return (
    <div className={props.className}>
      <label>{props.label}</label>
      <input placeholder="入力しよう"></input>
    </div>
  )
}

export default InputField;