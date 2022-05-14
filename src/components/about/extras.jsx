import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import grad from "../../assets/img/union.svg";

const Extras = () => {
  const { authenticate, isAuthenticated, isAuthenticating, user, account } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Logged in user:", user.get("ethAddress"));
    } else {
      console.log("Not logged in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Welcome to Tello" })
        .then(function (user) {
          window.location.href = "/signup";
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
          window.location.href = "/";
        });
    } else {
      window.location.href = "/signup";
    }
  };

  return (
    <div className="mt-40 mb-10 h-[660px] mmd:h-fit w-full bg-cover bg-no-repeat flex justify-center items-center relative">
      <div className="w-full absolute h-full z-[-1]">
        <img src={grad} alt="Background" />
      </div>
      <div className="text-center w-[300px]">
        <span className="uppercase text-[#0B2238] font-semibold text-[14px]">
          receive tips easily
        </span>

        <h1 className="text-black w-fit mb-4 font-bold text-[29px] mt-1">
          All you need do is ‘Connect Wallet’
        </h1>

        <span className="block mb-3 text-[#64607D]">
          And receive tips while you Tell others
        </span>

        <button
          onClick={login}
          className="text-sm hover:bg-[#2D9CDB] transition-all delay-500 rounded-[6rem] bg-[#3DB5E6] mt-2 mx-auto justify-self-center place-self-center object-center text-white font-normal py-[14px] px-8"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Extras;
