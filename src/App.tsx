import Input from "./components/Input";

import { useState } from "react";
import * as S from "./styles";
import Button from "./components/Button";

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
        <S.Row>
          <Button label="*" />
          <Button label="/" />
          <Button label="c" onClick={handleOnClear} />
          <Button label="." />
        </S.Row>
        <S.Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" />
        </S.Row>
        <S.Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </S.Row>
        <S.Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" />
        </S.Row>
      </S.Calculator>
    </section>
  );
}

export default App;
