import { Link } from "react-router-dom";
import girl from "../assets/BGPic.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Products from "./Products";

const Home = () => {
  const Navigate = useNavigate();

  return (
    <>
      <div></div>
      <div className="flex items-center justify-center min-h-screen overflow-hidden">
        <div className="text-center p-5 md:p-10">
          <div className="grid grid-cols-12 gap-4 w-full bg-blue-900 rounded-2xl">
            {/* <!-- Column 1: spans 12 columns on small screens, 8 on medium and larger --> */}
            <div className="col-span-12 md:col-span-8 text-white p-4">
              <h1 className="font-extrabold font-new text-3xl md:text-5xl mt-5 text-left">
                Doond Doond k thak gae???
              </h1>
              <center>
                <h1 className="animate-fadeIn font-semibold font-new text-xl md:text-3xl mt-5">
                  Yaha MILJAGAEGA.
                </h1>
              </center>

              <div className="flex flex-col md:flex-row items-center mt-5">
                <Button
                  onClick={() => {
                    Navigate("/products");
                  }}
                  variant="contained"
                  sx={{
                    fontWeight: "bold",
                    paddingX: 4,
                    paddingY: 2,
                    borderRadius: 3,
                  }}
                  className="bg-blue-500 text-white font-bold text-xl mb-4 md:mb-0 md:mr-5"
                >
                  Shop Now
                </Button>
                <Link
                  to="/about"
                  className="md:ml-10 mb-4 font-bold text-xl hover:text-blue-400"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* <!-- Column 2: spans 12 columns on small screens, 4 on medium and larger --> */}
            <div className="col-span-12 md:col-span-4 bg-blue-900 text-white p-4 rounded-2xl flex justify-center md:justify-end">
              <img
                className="animate-fadeIn"
                src={girl}
                alt="Girl"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <center>
        <h1 className="font-bold font-new text-3xl md:text-5xl mt-0">
          Featured Products
        </h1>
        <Products />
      </center>
    </>
  );
};

export default Home;
