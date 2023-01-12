import DeleteIcon from "./DeleteIcon.jsx";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Main,
  CalculatorSec,
  CalculatorHead,
  ResultArea,
  IconArea,
  CalculatorBody,
  ButtonCG,
  NumBtn,
  ClearBtn,
  EqBtn,
  ButtonRG,
  Tit,
  DelBtn,
} from "../styles/styles.jsx";

export default function Calculator() {
  const [screenVal, setScreenVal] = useState("0");
  const [evalVal, setEvalVal] = useState();
  const operators = ["+", "*", "-", "/"];

  const handleNumClick = async (scVal, evalValue) => {
    //checking zero value in the begining
    if (evalVal == undefined || evalVal == "0" || evalVal.charAt(0) == "0") {
      //removing zero from first character of evaluation value
      if (
        screenVal.charAt(0) == "0" &&
        ![...operators, ".", "÷", "×"].includes(screenVal.charAt(1)) &&
        ![...operators, "."].includes(evalValue) &&
        evalValue !== "("
      ) {
        let newScValue = screenVal.slice(1);
        setScreenVal(newScValue + scVal);
        setEvalVal(evalValue);
        return;
      } else if (
        evalValue == "(" &&
        !operators.includes(evalVal.charAt(evalVal.length - 1))
      ) {
        setScreenVal(`${screenVal}×${scVal}`);
        setEvalVal(`${evalVal}*${evalValue}`);
      } else {
        if (evalVal !== undefined) {
          setEvalVal(evalVal + evalValue);
        } else {
          setEvalVal("0" + evalValue);
        }
        setScreenVal(screenVal + scVal);
      }
    }
    //slicing zero after operator
    else if (
      operators.includes(evalVal.charAt(evalVal.length - 2)) &&
      evalVal.charAt(evalVal.length - 1) == 0 &&
      ![...operators, ".", "("].includes(evalValue)
    ) {
      setScreenVal(screenVal + scVal);
      let slicedVal = evalVal.slice(0, evalVal.length - 1);
      setEvalVal(slicedVal + evalValue);
    }
    //checking multiple operators
    else if (
      evalVal !== undefined &&
      operators.includes(evalVal.charAt(evalVal.length - 1)) &&
      operators.includes(evalValue)
    ) {
      if (["*", "/"].includes(evalVal.charAt(evalVal.length - 1))) {
        if (["+", "-"].includes(evalValue)) {
          setScreenVal(screenVal + scVal);
          setEvalVal(evalVal + evalValue);
        } else {
          return;
        }
      } else {
        return
      }
    }

    // adding * automatically if * is not present before parenthesis
    else if (
      Number.isInteger(Number.parseInt(evalVal.charAt(evalVal.length - 1))) &&
      evalValue == "("
    ) {
      setScreenVal(`${screenVal}×${scVal}`);
      setEvalVal(`${evalVal}*${evalValue}`);
    }
    //normal case
    else {
      setScreenVal(screenVal + scVal);
      setEvalVal(`${evalVal}${evalValue}`);
    }
  };
  //showing result
  const showResult = () => {
    let scrVal = screenVal;
    if (evalVal !== undefined) {
      try {
        let result = eval(evalVal.toString());
        setEvalVal(result.toString());
        setScreenVal(result.toString());
      } catch {
        setScreenVal("Syntax Error");
        setTimeout(() => {
          setScreenVal(scrVal);
        }, 1000);
      }
    } else {
      return;
    }
  };
  //delete function
  const deleteVal = () => {
    if (evalVal !== undefined) {
      let newScVal = screenVal.slice(0, screenVal.length - 1);
      let newVal = evalVal.slice(0, evalVal.length - 1);
      if (newScVal == "") {
        setScreenVal("0");
        setEvalVal();
      } else if (
        operators.includes(evalVal.charAt(evalVal.length - 1)) &&
        !["×", "÷", ...operators].includes(
          screenVal.charAt(screenVal.length - 1)
        )
      ) {
        setScreenVal(newScVal);
      } else {
        setScreenVal(newScVal);
        setEvalVal(newVal);
      }
    } else {
      return;
    }
  };
  useEffect(() => {
    if (
      evalVal !== undefined &&
      screenVal.charAt(screenVal.length - 1) == "0" &&
      operators.includes(evalVal.charAt(evalVal.length - 1))
    ) {
      setEvalVal(evalVal.concat(0));
    }
  }, [evalVal, screenVal]);
  return (
    <Main>
      <Tit>iCalculator</Tit>
      <CalculatorSec>
        <CalculatorHead>
          <ResultArea>{screenVal}</ResultArea>
          <IconArea>
            <DelBtn onClick={deleteVal}>
              <DeleteIcon />
            </DelBtn>
          </IconArea>
        </CalculatorHead>

        <CalculatorBody>
          <ButtonRG>
            <ButtonCG>
              <ClearBtn
                onClick={() => {
                  setEvalVal();
                  setScreenVal("0");
                }}
              >
                AC
              </ClearBtn>
              <NumBtn
                op="true"
                onClick={() => {
                  handleNumClick("÷", "/");
                }}
              >
                ÷
              </NumBtn>
              <NumBtn
                op="true"
                onClick={() => {
                  handleNumClick("-", "-");
                }}
              >
                -
              </NumBtn>
            </ButtonCG>

            <ButtonCG>
              <NumBtn onClick={() => handleNumClick("9", "9")}>9</NumBtn>
              <NumBtn onClick={() => handleNumClick("8", "8")}>8</NumBtn>
              <NumBtn onClick={() => handleNumClick("7", "7")}>7</NumBtn>
              <NumBtn op="true" onClick={() => handleNumClick("+", "+")}>
                +
              </NumBtn>
            </ButtonCG>

            <ButtonCG>
              <NumBtn onClick={() => handleNumClick("6", "6")}>6</NumBtn>
              <NumBtn onClick={() => handleNumClick("5", "5")}>5</NumBtn>
              <NumBtn onClick={() => handleNumClick("4", "4")}>4</NumBtn>
              <NumBtn op="true" onClick={() => handleNumClick("×", "*")}>
                X
              </NumBtn>
            </ButtonCG>

            <ButtonCG>
              <NumBtn onClick={() => handleNumClick("3", "3")}>3</NumBtn>
              <NumBtn onClick={() => handleNumClick("2", "2")}>2</NumBtn>
              <NumBtn onClick={() => handleNumClick("1", "1")}>1</NumBtn>
              <NumBtn op="true" onClick={() => handleNumClick(".", ".")}>
                .
              </NumBtn>
            </ButtonCG>

            <ButtonCG>
              <NumBtn op="true" onClick={() => handleNumClick("(", "(")}>
                (
              </NumBtn>
              <NumBtn onClick={() => handleNumClick("0", "0")}>0</NumBtn>
              <NumBtn op="true" onClick={() => handleNumClick(")", ")")}>
                )
              </NumBtn>
              <EqBtn onClick={showResult}>=</EqBtn>
            </ButtonCG>
          </ButtonRG>
        </CalculatorBody>
      </CalculatorSec>
    </Main>
  );
}
