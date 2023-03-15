import React from "react";

//import images
import step0 from "../images/state1.GIF";
import step1 from "../images/state2.GIF";
import step2 from "../images/state3.GIF";
import step3 from "../images/state4.GIF";
import step4 from "../images/state5.GIF";
import step5 from "../images/state6.GIF";
import step6 from "../images/state7.GIF";
import step7 from "../images/state8.GIF";
import step8 from "../images/state9.GIF";
import step9 from "../images/state10.GIF";
import step10 from "../images/state11.GIF";

// value of 'wrongGuess' state corresponds to array element position
// wrongGuess state is zero by default - step0 is an all white image
function Image({ wrongGuess }) {
  const images = [
    step0,
    step1,
    step2,
    step3,
    step4,
    step5,
    step6,
    step7,
    step8,
    step9,
    step10,
  ];
  return (
    <div className="text-center">
      <img src={images[wrongGuess]} alt="" />
    </div>
  );
}

export default Image;
