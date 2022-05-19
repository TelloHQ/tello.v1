import { Box, CircularProgress } from "@mui/material";
import logo1 from "../../assets/img/tello.png";
import logo from "../../assets/img/tello.png";
const Loader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center w-full">
      <div className="flex items-center justify-center">
        <img src={logo} alt="Tello" width={35} className="mr-[5px]" />
        <div className="text-black text-2xl font-bold">TELLO</div>
        {/* <img src={logo1} alt="Tello" width={100} /> */}
      </div>
      <Box
        className="text-[#3DB5E6] mt-11 justify-center "
        sx={{ display: "flex" }}
      >
        <CircularProgress className="!w-[60px] !h-[60px]" color="inherit" />
      </Box>
    </div>
  );
};

export default Loader;
