import Logo from "../html/Logo";
import RegistoForm from "../html/RegistoForm";

function Registar() {
  return (
    <main className="min-h-screen grid grid-cols-[500px] place-content-center gap-8 bg-blue-365 ">
      <Logo />
      <h4 className="text-3xl font-semibold text-center text-white">
        Registe uma nova conta
      </h4>
      <RegistoForm />
    </main>
  );
}

export default Registar;
