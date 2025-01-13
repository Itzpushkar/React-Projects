import { useState } from "react";
import Numbers from "./Numbers";
import SearchBar from "./SearchBar";

const Calculator = () => {
  let [currentSearchBarValue, SetNewValue] = useState("");
  const CalculatorButtons = [
    "AC",
    "+/-",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    "00",
    ".",
    "=",
  ];

  const ButtonClicked = (CalBtn) => {
    if (CalBtn === "=") {
      try {
        const expression = currentSearchBarValue
          .replace("÷", "/")
          .replace("×", "*");
        const result = eval(expression);
        SetNewValue(result.toString());
      } catch (error) {
        SetNewValue("Error");
      }
    } else if (CalBtn === "AC") {
      currentSearchBarValue = "";

      SetNewValue(currentSearchBarValue);
    } else {
      currentSearchBarValue = currentSearchBarValue + CalBtn;
      SetNewValue(currentSearchBarValue);
    }
  };

  return (
    <div className="flex h-screen w-full  justify-center items-center">
      <div className="h-[71%] w-[24.5%] rounded-[15px] bg-gradient-to-tl from-[#f2b70d] to-[#8e9a91] flex-col justify-center items-start p-[13px]">
        <SearchBar SearchBarValue={currentSearchBarValue} />
        <Numbers buttons={CalculatorButtons} ClickFunction={ButtonClicked} />
      </div>
    </div>
  );
};

export default Calculator;
