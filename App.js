import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BemVindo from "./app/Todo";
import Login from "./app/paginas/Login";
import Quartos from "./app/paginas/Quartos";
import Registar from "./app/paginas/Registo";
import AppLayout from "./app/html/AppLayout";

//Contexto para compartilhar estado entre componentes
var contextReference = {
  context: { user: " ", tema: "bg-light text-dark" }, setContext: () => {},
};

export const ContextoApp = createContext({ ...contextReference });

function App() {
  const [stateApp, setStateApp] = useState({ ...contextReference.context });

  return (
    <ContextoApp.Provider value={{ stateApp, setStateApp }}>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<BemVindo />} />
            <Route path="quartos" element={<Quartos />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Registar />} />
          </Route>
        </Routes>
      </Router>
    </ContextoApp.Provider>
  );
}

export default App;
