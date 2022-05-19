import Nav from "../../components/Nav";
import Footer from "../../components/Nav/footer";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="h-screen">
      <Nav />

      <div className="w-full h-fit flex flex-col justify-items-center my-8">
        <div className="text-black font-bold text-5xl mx-auto mt-24">
          We think you're lost
        </div>
        <div className="text-[#3DB5E6] font-semibold text-lg mx-auto mt-12">
          Click this button, and let's get you found
        </div>
        <Link to="/" className="mx-auto mt-8">
          <button className="ml-2 hover:bg-[#2D9CDB] transition-all delay-500 text-sm rounded-lg bg-[#3DB5E6] text-white font-semibold py-4 px-4">
            Take Me Home
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Notfound;
