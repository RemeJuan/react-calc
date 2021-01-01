import React, {FunctionComponent} from 'react';
import {KeyPadButtonComponent} from "./button.component";

interface IProps {
  onClick: (name: string) => void;
}

export const KeyPadComponent: FunctionComponent<IProps> = ({onClick}) => {
  return (
    <div className="button">
      {["(", "CE", ")", "C"].map(b => <KeyPadButtonComponent onClick={onClick} name={b}/>)}
      <br/>

      {["1", "2", "3", "+"].map(b => <KeyPadButtonComponent onClick={onClick} name={b}/>)}
      <br/>

      {["4", "5", "6", "-"].map(b => <KeyPadButtonComponent onClick={onClick} name={b}/>)}
      <br/>

      {["7", "8", "9", "*"].map(b => <KeyPadButtonComponent onClick={onClick} name={b}/>)}
      <br/>

      {[".", "0", "=", "/"].map(b => <KeyPadButtonComponent onClick={onClick} name={b}/>)}
      <br/>
    </div>
  );
}