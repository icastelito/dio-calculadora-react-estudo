import Input from "./components/Input";

import { useState } from "react";
import * as S from "./styles-app";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [firstValue, setFirstValue] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentValue("0");
    setFirstValue("0");
    setOperation("");
  };

  const handleAddNumber = (number: string) => {
    setCurrentValue((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (firstValue === "0") {
      setFirstValue(String(currentValue));
      setCurrentValue("0");
      setOperation("+");
    } else {
      const sum = Number(firstValue) + Number(currentValue);
      setCurrentValue(String(sum));
      setOperation("");
    }
  };

  return (
    <section>
      <h1>CALCULADORA</h1>
      <S.Calculator>
        <Input></Input>
      </S.Calculator>
    </section>
  );
}

export default App;
