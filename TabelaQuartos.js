import QuartoRow from "./QuartoRow";

const quartos = [
  {
    id: 1008,
    nome: "Titanic Dreams",
    capacidade: 2,
    precoAux: null,
    preco: 90,
    descricao: "Quarto com casa de banho privada",
    imagem: "cdd73c09-8698-478d-89ae-2456cd0d797b.jpeg",
    listaReservas: [],
  },
  {
    id: 1009,
    nome: "Happy room",
    capacidade: 1,
    precoAux: null,
    preco: 45,
    descricao: "Possui televisão",
    imagem: "ef46ca2a-ce7c-426a-9088-3eb16e452ea5.jpeg",
    listaReservas: [],
  },
  {
    id: 1010,
    nome: "Dark room",
    capacidade: 4,
    precoAux: null,
    preco: 95,
    descricao: "Com ar-condicionado",
    imagem: "0178e292-45e7-483f-83d5-75142c5bbe69.jpeg",
    listaReservas: [],
  },
  {
    id: 1012,
    nome: "Teste",
    capacidade: 2,
    precoAux: null,
    preco: 40,
    descricao: "Isto é um teste",
    imagem: "3efbe86b-1bc7-477a-886d-c325b1dbdab5.png",
    listaReservas: [],
  },
  {
    id: 1013,
    nome: "TESTE1",
    capacidade: 2,
    precoAux: null,
    preco: 20,
    descricao: "teste bla bla bla",
    imagem: "a5ad6f0f-04bc-4892-b5db-9bc3af1ead67.jpeg",
    listaReservas: [],
  },
  {
    id: 1014,
    nome: "BLA",
    capacidade: 2,
    precoAux: null,
    preco: 24,
    descricao: "OI",
    imagem: "bfdb485e-9103-496a-8bc9-013290d22aa3.jpeg",
    listaReservas: [],
  },
  {
    id: 1015,
    nome: "TESTE",
    capacidade: 2,
    precoAux: null,
    preco: 2,
    descricao: "TESTE",
    imagem: "a67e80da-e0c9-47c7-bed0-6bf2c99cc909.jpeg",
    listaReservas: [],
  },
];

export default function TabelaQuartos() {
  return (
    <div className="h-full bg-white border ">
      <div className="grid grid-cols-4 bg-gray-100 border-b border-gray-600">
        <div>Quarto</div>
        <div>Capacidade</div>
        <div>Preço</div>
        <div>Ações</div>
      </div>
      {quartos.map((quarto) => (
        <QuartoRow quarto={quarto} key={quarto.id}></QuartoRow>
      ))}
    </div>
  );
}
