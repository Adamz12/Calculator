import React from "react";
import { useState } from "react";
import { TbPlusMinus } from "react-icons/tb";

function Calculator() {
  const [number, setNumber] = useState("0");
  const removeTheZero = number.replace(/^0+/, "");

  const handleNumber = (e) => {
    setNumber(removeTheZero + e.target.value);
  };

  return (
    <div className="calculator">
      <div className="container">
        <div className="row">
          <div className="calculator__content">
            <div className="calculator__border">
              <div className="calculator__number--result">{number}</div>
              <div className="calculator__buttons">
                <div className="calculator__row">
                  <button className="calculator__btn">AC</button>
                  <button className="calculator__btn">
                    <TbPlusMinus />
                  </button>
                  <button className="calculator__btn">%</button>
                  <button className="calculator__btn orange">/</button>
                </div>
                <div className="calculator__row">
                  <button className="calculator__btn numbers">7</button>
                  <button className="calculator__btn numbers">8</button>
                  <button className="calculator__btn numbers">9</button>
                  <button className="calculator__btn orange">X</button>
                </div>
                <div className="calculator__row">
                  <button className="calculator__btn numbers">4</button>
                  <button className="calculator__btn numbers">5</button>
                  <button className="calculator__btn numbers">6</button>
                  <button className="calculator__btn orange">-</button>
                </div>
                <div className="calculator__row">
                  <button
                    className="calculator__btn numbers"
                    value="1"
                    onClick={handleNumber}
                  >
                    1
                  </button>
                  <button className="calculator__btn numbers">2</button>
                  <button className="calculator__btn numbers">3</button>
                  <button className="calculator__btn orange">+</button>
                </div>
                <div className="calculator__row">
                  <button className="calculator__btn large--btn numbers">
                    0
                  </button>
                  <button className="calculator__btn numbers">.</button>
                  <button className="calculator__btn orange">=</button>
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
