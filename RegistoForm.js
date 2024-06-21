import React, { useState } from "react";
import { register, validateUser } from "../../service/api";
import ButtonLG from "./ButtonLG";

export default function RegistoForm() {
  //Estados para armazenar os dados do formulário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [dataNasc, setDataNasc] = useState(new Date().toISOString().split("T")[0]);

  //Função para lidar com o envio do formulário
  const handleSubmit = () => {
    //Validação dos campos
    if (!email || !senha || senha !== confirmarSenha || !dataNasc) {
      alert("Por favor, preencha os campos corretamente.");
      return;
    }

    let user = {
      email: email,
      password: senha,
      dataNasc: new Date(dataNasc).toJSON(),
    };

    register(user)
      //Passar a resposta para json e depois damos handle
      .then((res) => res.json())
      .then((res) => {
        if (res.success == false) {
          //res.success pois "success" é um valor booleano que vem na resposta da API
          alert(res.message);
          return;
        }
      });
    alert("Foi enviado um token para o seu email");
    let token = prompt("Insira o token que recebeu no seu email");
    validateUser(email, token)
      .then((res) => res.json())
      .then((res) => {
        if (res.success == false) {
          alert(res.message);
          return;
        }
        alert("Utilizador foi validado com sucesso");
      });

    setEmail("");
    setSenha("");
    setConfirmarSenha("");
    setDataNasc("");
  };

  return (
    <form className="p-2 bg-gray-50 border-gray-200 rounded-lg" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 p-4">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          className="border border-gray-300 rounded-md  shadow-sm px-3 py-2"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <label htmlFor="senha" className="form-label">Senha:</label>
        <input
          className="border border-gray-300 rounded-md  shadow-sm px-3 py-2"
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <label htmlFor="confirmarSenha" className="form-label">Confirmar Senha:</label>
        <input
          className="border border-gray-300 rounded-md  shadow-sm px-3 py-2"
          type="password"
          id="confirmarSenha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <label htmlFor="dataNascimento" className="form-label">Data de Nascimento:</label>
        <input
          className="border border-gray-300 rounded-md  shadow-sm px-3 py-2"
          type="date"
          id="dataNasc"
          value={dataNasc}
          onChange={(e) => setDataNasc(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <ButtonLG type="submit" onClick={() => {handleSubmit();}} className="btn btn-primary btn-lg btn-block">Registar</ButtonLG>
      </div>
    </form>
  );
}
