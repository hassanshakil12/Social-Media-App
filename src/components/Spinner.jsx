import React from 'react'

const Spinner = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border"
        style={{width: '5rem', height: '5rem', margin: '20%'}}
        role="status"
      ></div>
    </div>
  );
}

export default Spinner