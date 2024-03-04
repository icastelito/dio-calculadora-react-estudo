import Input from "./components/Input";
import * as S from "./styles-app";

function App() {
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
