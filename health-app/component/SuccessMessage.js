import React, { useState } from 'react';
import AlertMessage from './AlertMessage';

const SuccessMessage = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <button onClick={handleShowAlert}>Book Consultation</button>
      {showAlert && (
        <AlertMessage
          message="Successfull"
          onClose={handleCloseAlert}
        />
      )}
    </div>
  );
};

export default SuccessMessage;
