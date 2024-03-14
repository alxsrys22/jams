import React from 'react';

const SomeComponent = props => {
  React.useEffect(() => {}, []);

  return <div>{props.name}</div>;
};

export default SomeComponent;
