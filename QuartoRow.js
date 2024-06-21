import { useState } from "react";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import LoginForm from "../html/LoginForm";

export default function QuartoRow({ quarto }) {
  const [showForm, setShowForm] = useState(false);
  const { id: quartoID, nome, capacidade, preco } = quarto;

  function handleDuplicate() {
    /*createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });*/
    console.log("duplicado");
  }

  function deleteCabin() {
    console.log("apagado");
    //deleteCabin(quartoID);
  }

  return (
    <div className="grid grid-cols-4 border-b " key={quarto.id}>
      {/* <img className="block w-16 aspect-[3/2] object-cover object-center scale-150 -translate-x-1.75" src={imagem} alt="alt"/> */}
      <div>{nome}</div>
      <div>{capacidade} pessoas</div>
      {preco}.00€
      <div>
        <button onClick={handleDuplicate}><HiSquare2Stack /></button>
        <button onClick={() => setShowForm((show) => !show)}><HiPencil /></button>
        <button onClick={() => deleteCabin(quartoID)}><HiTrash /></button>
      </div>
      {showForm && <LoginForm />}
    </div>
  );
}
