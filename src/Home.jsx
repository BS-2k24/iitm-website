import React from "react";

import { About, Contact, Content, Footer, Hero } from "./sections";

function Home() {
  return (
    <>
      <main className="pt-[8vh] laptop:pt-[10vh] bg-black text-white w-full h-full">
        <section>
          <Hero />
        </section>{" "}
        <section>
          <About />
        </section>
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default Home;
