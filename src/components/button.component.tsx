import React, {FunctionComponent} from "react";

interface IProps {
  onClick: (name: string) => void;
  name: string
}

export const KeyPadButtonComponent: FunctionComponent<IProps> = ({onClick, name}) => {
  return <button onClick={() => onClick(name)}>{name}</button>
}