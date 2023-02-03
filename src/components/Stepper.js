import React from "react";
import { UilCheck, UilMultiply } from "@iconscout/react-unicons";

// Importing the style file
import "../css/Stepper.css";

// Creating the Stepper component
const Stepper = ({ step = 0, steps = [], guess = [] }) => {
  // Function that will render the correct icon
  const renderIcon = (stp, steps, answers) => {
    const index = steps.indexOf(stp);
    const sign = answers[index] ? <UilCheck /> : <UilMultiply />;
    return sign;
  };

  return (
    <div className="stepper-container">
      {steps.map((stp) => (
        <React.Fragment key={stp.id}>
          {stp.id > 1 && <hr className={stp.id === 6 ? "line-hidden" : ""} />}
          <div className="step">
            <span className={step + 1 >= stp.id ? "active" : ""}>
              {step + 1 <= stp.id ? stp.id : renderIcon(stp, steps, guess)}
            </span>
            <small>{stp.name}</small>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

// Exporting the Stepper component
export default Stepper;
