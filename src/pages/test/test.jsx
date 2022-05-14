import { useMoralis } from "react-moralis";

const Tester = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({
        provider: "walletconnect",
        mobileLinks: [
          "rainbow",
          "metamask",
          "argent",
          "trust",
          "imtoken",
          "pillar",
        ],
      })
        .then(function (user) {
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <button
        onClick={login}
        className="hover:bg-[#2D9CDB] transition-all delay-500 text-sm rounded-lg bg-[#3DB5E6] text-white font-semibold py-4 px-4"
      >
        Login
      </button>
    </div>
  );
};

export default Tester;
