import React, {FunctionComponent} from 'react';

interface IProps {
  result: string
}

const ResultComponent: FunctionComponent<IProps> = ({result}) => {
  return (
    <div className="result">
      <p>{result}</p>
    </div>
  );
}

export default ResultComponent;