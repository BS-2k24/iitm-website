import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <main className="w-full h-[100vh]">
        <section className="w-full h-full flex justify-center items-center">
          <button
            className="px-4 py-2 bg-black text-white font-bold rounded-md hover:bg-blue-600 transition"
            onClick={() => navigate("/verify")}
          >
            Verify
          </button>
        </section>
      </main>
    </>
  );
}

export default Home;
