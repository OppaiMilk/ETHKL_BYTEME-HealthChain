// AlertMessage.js
import React from 'react';
import styles from '../styles/componentStyle/AlertMessage.module.css';

const AlertMessage = ({ message, onClose }) => {
  return (

    <div className={styles.AlertMessage}>
      			<div className={styles.frameParent}>
        				<div className={styles.frameGroup}>
          					<img className={styles.frameChild} alt="" src="Frame 1171274959.svg" />
          					<div className={styles.yourAppointmentHasBeenConfParent}>
            						<div className={styles.yourAppointmentHas1}>Your Appointment Has Been Confirmed</div>
            						<div className={styles.yourAppointmentWith1}>{`Your appointment with Dr. Linda Walker on Wednesday, August 17, 2023 at 11:00 AM  `}</div>
          					</div>
        				</div>
        				<div className={styles.button}>
          					<div className={styles.text1}>View Appointment</div>
        				</div>
      			</div>

      <p>{message}</p>


      <button onClick={onClose} className={styles.closeButton}>
        Close
      </button>
    </div>
  );
};

export default AlertMessage;
