import React, {FunctionComponent} from "react";

interface IProps {
  onClick: (button: string) => void;
  button: string
}

export const KeyPadButtonComponent: FunctionComponent<IProps> = ({onClick, button}) => {
  return (
    <button name={button} onClick={() => onClick(button)}>{button}</button>
  )
}