import React from 'react';

const Hello = ({ name, age }) => {
 
  return (
    <>
      <p>Hello {name}</p>
      <p>{age}</p>
    </>
  );
};

export default Hello;
