import React from "react";
import {Props} from "./Interfaces"

const Buttons: React.FC<Props> = ({ handlePrev, handleNext, prevDisabled, nextDisabled }) => {
  return (
    <div>
      <button onClick={handlePrev} disabled={prevDisabled}>
        Previous
      </button>
      <button onClick={handleNext} disabled={nextDisabled}>
        Next
      </button>
    </div>
  );
};

export default Buttons;