import { NavLink } from "react-router-dom";

import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

export default function MenuEsquerda() {
  return (
    <ul>
      <li>
        <NavLink to="/bemvindo">
          <HiOutlineHome />
          <span>Bem-vindo</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/reservas">
          <HiOutlineCalendarDays />
          <span>Reservas</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/quartos">
          <HiOutlineHomeModern />
          <span>Quartos</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/clientes">
          <HiOutlineUsers/>
          <span>Clientes</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/definicoes">
          <HiOutlineCog6Tooth/>
          <span>Definições</span>
        </NavLink>
      </li>
    </ul>
  );
}
