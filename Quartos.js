import TabelaQuartos from "../html/TabelaQuartos";
import ButtonLG from "../html/ButtonLG";

export default function Quartos() {
  return (
    <>
      <h1>Todos os quartos</h1>
      <div className="overflow-y-scroll">
        <TabelaQuartos />
        <ButtonLG>Adicionar novo Quarto</ButtonLG>
      </div>
    </>
  );
}
