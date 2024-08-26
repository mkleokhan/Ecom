import { useDispatch, useSelector } from "react-redux";
import { buyCakeAction } from "../Redux/Cakes/cakeAction";
import { refundCake } from "../Redux/Cakes/cakeAction";
import { Link } from "react-router-dom";
import girl from "../assets/BGPic.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Products from "./Products";
const Home = () => {
  const Navigate = useNavigate();
  const reduxState = useSelector((x) => {
    return x;
  });
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center justify-center h-screen overflow-hidden">
        <div className="text-center p-10">
          <div class="grid grid-cols-12 gap-4 w-full bg-blue-900 rounded-2xl">
            {/* <!-- Column 1: spans 8 columns --> */}
            <div class="col-span-8 text-white p-4 ">
              <h1 className="animate-fadeIn font-extrabold font-new text-5xl mt-5 text-left">
                Doond Doond k thak gae???
              </h1>
              <center>
                {" "}
                <h1 className="animate-fadeIn font-semibold font-new text-3xl mt-5 ">
                  Idr MILJAGAEGA.
                </h1>
              </center>

              <div class="flex items-center mt-5">
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
                  className="bg-blue-500 text-white font-bold text-xl left-20"
                >
                  Shop Now
                </Button>
                <Link
                  to="/about"
                  className="ml-28  font-bold text-xl hover:text-blue-400 "
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* <!-- Column 2: spans 4 columns --> */}
            <div className=" col-span-4 bg-blue-900 text-white p-4 rounded-2xl ">
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
        <h1 className=" font-bold font-new text-5xl mt-5 ">
          Featured Products
        </h1>
        <Products />
      </center>
    </>
  );
};

export default Home;
