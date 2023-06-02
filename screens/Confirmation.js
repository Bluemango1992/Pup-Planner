import React from 'react';
import Button from '../components/Button';

const Confirmation = ({ state, prevPage }) => {
  const handleSubmit = () => {
    // Handle form submission here
  };

  return (
    <>
      <Button title="Previous" onPress={prevPage} size={"100"} type="tiertary" />
      <Button title="Submit" onPress={handleSubmit} size={"100"} type="tiertary" />
    </>
  );
};

export default Confirmation;
