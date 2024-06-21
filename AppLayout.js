import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./AppLayout.css";

function AppLayout() {
  return (
    <div className="app-layout">
      <div className="sidebar">
        <img src="/logo_365.jpeg" alt="Hotel 360" className="logo" />
        <ul>
          <li>
            <Link to="/">Bem-vindo</Link>
          </li>
          <li>
            <Link to="/quartos">Quartos</Link>
          </li>
          <li>
            <Link to="/privacidade">Privacidade</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
        </ul>
      </div>
      <div className="content outline">
        <nav className="navbar">
          <Link to="/login">Login</Link>
          <Link to="/register">Registar</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
