import Logo from "./Logo";
import MenuEsquerda from "./MenuEsquerda";

export default function Sidebar() {
  return (
    <aside className=" p-10 bg-blue-365 text-white ">
      <Logo />
      <MenuEsquerda />
    </aside>
  );
}
