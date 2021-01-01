import React, {FunctionComponent} from 'react';

interface IProps {
  result: string
}

export const ResultComponent: FunctionComponent<IProps> = ({result}) => {
  return (
    <div className="result">
      <p>{result}</p>
    </div>
  );
}