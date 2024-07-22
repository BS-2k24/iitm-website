import { logo } from "../assets";

function Nav() {
  return (
    <>
      <main className="h-full w-full bg-[#4a4a4a69] flex justify-between items-center backdrop-blur-sm px-10">
        <section>
          <img src={logo} alt="logo" className="w-20 h-20" />
        </section>
        <section>
          <ul className="flex justify-between items-center w-full h-full px-20 text-white gap-5">
            <li>Home</li>
            <li>Register</li>
            <li>Contact</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Nav;
