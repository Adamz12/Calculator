import React from "react";
import { useState } from "react";

function Calculator() {
  const [number, setNumber] = useState("0");

  //   This variable is used to remove the default 0 when the number is changed
const removeTheZero = number.replace(/^0+/, "");

  // This function allows us to delete the previous number with the slice and if the number is below 2 digets then it rests to 0
  function deleteNumber() {
    if (number > 0) {
      setNumber(number.slice(0, -1));
    }
    if (number.length < 2) {
      setNumber("0");
    }
  }

  //   This rests the number to 0 when you click AC
  const reset = () => {
    setNumber("0");
  };

  //   Now when we click the number it does not lead with a zero value and the e.target.value allows us to accsess the number and extract that value to become the number
  const handleNumber = (e) => {
    setNumber(removeTheZero.slice(0, 9) + e.target.value);
  };

  //   This allows us to get the results, so because our number is a string, the Function gets the full string and adds it together or whatever bidmas value is in between the numbers, for example 1+1 is the full string and it has the ability to add that together. Then the toString method turns the new value the Functin gives us back to a string to remove any errors that would lead to the number.replace.
  function results(number) {
    return Function(`'use strict'; return (${number})`)().toString();
  }

  console.log(results("1+2"));

  return (
    <div className="calculator">
      <div className="container">
        <div className="row">
          <div className="calculator__content">
            <div className="calculator__border">
              <div className="calculator__number--result">{number}</div>
              <div className="calculator__buttons">
                <div className="calculator__row">
                  <button className="calculator__btn" onClick={reset}>
                    AC
                  </button>
                  <button className="calculator__btn" onClick={deleteNumber}>
                    DE
                  </button>
                  <button
                    className="calculator__btn"
                    value="%"
                    onClick={handleNumber}
                  >
                    %
                  </button>
                  <button
                    className="calculator__btn orange"
                    value="/"
                    onClick={handleNumber}
                  >
                    /
                  </button>
                </div>
                <div className="calculator__row">
                  <button
                    className="calculator__btn numbers"
                    value="7"
                    onClick={handleNumber}
                  >
                    7
                  </button>
                  <button
                    className="calculator__btn numbers"
                    value="8"
                    onClick={handleNumber}
                  >
                    8
                  </button>
                  <button
                    className="calculator__btn numbers"
                    value="9"
                    onClick={handleNumber}
                  >
                    9
                  </button>
                  <button
                    className="calculator__btn orange"
                    value="*"
                    onClick={handleNumber}
                  >
                    X
                  </button>
                </div>
                <div className="calculator__row">
                  <button
                    className="calculator__btn numbers"
                    value="4"
                    onClick={handleNumber}
                  >
                    4
                  </button>
                  <button
                    className="calculator__btn numbers"
                    value="5"
                    onClick={handleNumber}
                  >
                    5
                  </button>
                  <button
                    className="calculator__btn numbers"
                    value="6"
                    onClick={handleNumber}
                  >
                    6
                  </button>
                  <button
                    className="calculator__btn orange"
                    value="-"
                    onClick={handleNumber}
                  >
                    -
                  </button>
                </div>
                <div className="calculator__row">
                  <button
                    className="calculator__btn numbers"
                    value="1"
                    onClick={handleNumber}
                  >
                    1
                  </button>
                  <button
                    className="calculator__btn numbers"
                    value="2"
                    onClick={handleNumber}
                  >
                    2
                  </button>
                  <button
                    className="calculator__btn numbers"
                    value="3"
                    onClick={handleNumber}
                  >
                    3
                  </button>
                  <button
                    className="calculator__btn orange"
                    value="+"
                    onClick={handleNumber}
                  >
                    +
                  </button>
                </div>
                <div className="calculator__row">
                  <button
                    className="calculator__btn large--btn numbers"
                    value="0"
                    onClick={handleNumber}
                  >
                    0
                  </button>
                  <button
                    className="calculator__btn numbers"
                    value="."
                    onClick={handleNumber}
                  >
                    .
                  </button>
                  <button
                    className="calculator__btn orange"
                    value="="
                    onClick={(e) => setNumber(results)}
                  >
                    =
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
