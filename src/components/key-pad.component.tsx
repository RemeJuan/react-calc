import React, {FunctionComponent} from 'react';
import {KeyPadButtonComponent} from "./button.component";

interface IProps {
  onClick: (name: string) => void;
}

const KeyPadComponent: FunctionComponent<IProps> = ({onClick}) => {
  return (
    <div className="button">
      {["(", "CE", ")", "C"].map(b => <KeyPadButtonComponent key={b} onClick={onClick} button={b}/>)}
      <br/>

      {["1", "2", "3", "+"].map(b => <KeyPadButtonComponent key={b} onClick={onClick} button={b}/>)}
      <br/>

      {["4", "5", "6", "-"].map(b => <KeyPadButtonComponent key={b} onClick={onClick} button={b}/>)}
      <br/>

      {["7", "8", "9", "*"].map(b => <KeyPadButtonComponent key={b} onClick={onClick} button={b}/>)}
      <br/>

      {[".", "0", "=", "/"].map(b => <KeyPadButtonComponent key={b} onClick={onClick} button={b}/>)}
      <br/>
    </div>
  );
}

export default KeyPadComponent;