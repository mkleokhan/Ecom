import { Navigate, useNavigate } from "react-router-dom";
import micImage from "../assets/1.jpg";

import Button from "@mui/material/Button";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="grid-cols-12">
          <div class="relative flex items-center justify-center min-h-screen  ml-20 mt-10">
            {/* <!-- Background Image --> */}
            <div class="absolute inset-0 w-1/2">
              <img
                src={micImage}
                alt="Background Image"
                class=" object-cover rounded-3xl shadow-lg"
                width={700}
                height={700}
              />
            </div>
            {/* <!-- Right Foreground Text Container --> */}
            <div className="conatiner w-full ml-48 mr-12">
              <div class="relative  ml-32   rounded-3xl">
                <div class="bg-white rounded-3xl shadow-lg p-12 ml-28 ">
                  <h2 class="text-2xl font-bold mb-4">Our Story</h2>
                  <p class=" mb-4  text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ultrices tristique mauris, quis ultrices urna tempus et.
                    Donec hendrerit porttitor venenatis. Sed quis tempor nulla.
                  </p>
                  <p class="  text-2xl">
                    Vivamus fringilla elit eu felis iaculis cursus. Integer
                    ullamcorper libero vel orci tristique, in ullamcorper est
                    luctus. Proin in ligula felis.
                  </p>
                  <p class="  text-2xl">
                    Vivamus fringilla elit eu felis iaculis cursus. Integer
                    ullamcorper libero vel orci tristique, in ullamcorper est
                    luctus. Proin in ligula felis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container  w-full bg-blue-200 rounded-3xl mt-8 animate-fadeIn">
          <div className="grid grid-cols-12">
            <div className="grid col-span-3 ml-20 ">
              <h1 className="font-mono text-4xl text-blue-600">20+</h1>
              <p className="font-mono text-3xl text-blue-600">
                Years of Experience
              </p>
            </div>
            <div className="col-span-3 ml-20">
              {" "}
              <h1 className="font-mono text-4xl text-blue-600">100+</h1>
              <p className="font-mono text-3xl text-blue-600">Audio Products</p>
            </div>
            <div className="col-span-3 ml-20">
              {" "}
              <h1 className="font-mono text-4xl text-blue-600">10+</h1>
              <p className="font-mono text-3xl text-blue-600">
                Industry Awards
              </p>
            </div>
            <div className="col-span-3 ml-20">
              {" "}
              <h1 className="font-mono text-4xl text-blue-600">100K+</h1>
              <p className="font-mono text-3xl text-blue-600">
                Community Members
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-10">
          <div className="col-span-6 ml-0">
            <h1 className="font-impact text-4xl ">Our Values</h1>
          </div>
          <div className="col-span-6 ml-auto">
            <Button
              variant="contained"
              size="large"
              className="p-8"
              onClick={() => {
                navigate("/products");
              }}
            >
              View our products
            </Button>
          </div>
        </div>

        <div className="container grid grid-cols-12 gap-2 mb-5 mt-5">
          <div className="col-span-4 ">
            <div className="container w-full rounded-3xl bg-slate-400  p-4">
              <h1 className="font-mono text-3xl">Quality</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                labore libero nobis unde consequatur. Doloribus, ipsum maiores.
                Qui, earum provident voluptates quae animi placeat obcaecati
                veritatis nobis. Sint, quos omnis?
              </p>
            </div>
          </div>
          <div className="col-span-4">
            <div className="container w-full rounded-3xl   bg-slate-400  p-4">
              <h1 className="font-mono text-3xl">Customer Satisfaction</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                labore libero nobis unde consequatur. Doloribus, ipsum maiores.
                Qui, earum provident voluptates quae animi placeat obcaecati
                veritatis nobis. Sint, quos omnis?
              </p>
            </div>
          </div>
          <div className="col-span-4 ">
            <div className="container w-full  rounded-3xl bg-slate-400  p-4">
              <h1 className="font-mono text-3xl">Passion For Sound</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                labore libero nobis unde consequatur. Doloribus, ipsum maiores.
                Qui, earum provident voluptates quae animi placeat obcaecati
                veritatis nobis. Sint, quos omnis?
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-5 bg-gray-300 w-full ">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <center>
                <h1 className="font-impact text-4xl mt-20">
                  Experience Streamlined Shopping with Miljaega
                </h1>
              </center>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-20">
            <div className="col-span-4 p-10">
              <div className="container ">
                <center>
                  {" "}
                  <h1 className="font-mono text-3xl">Free Delivery</h1>
                </center>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae aperiam, quos reiciendis dolores eaque
                  reprehenderit quis odit ut eligendi enim mollitia quia tempora
                  corporis cumque iste rem nesciunt repellendus numquam.
                </p>
              </div>
            </div>
            <div className="col-span-4 p-10">
              <div className="container  ">
                <center>
                  <h1 className="font-mono text-3xl">Self Pickup</h1>
                </center>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae aperiam, quos reiciendis dolores eaque
                  reprehenderit quis odit ut eligendi enim mollitia quia tempora
                  corporis cumque iste rem nesciunt repellendus numquam.
                </p>
              </div>
            </div>
            <div className="col-span-4 p-10">
              <div className="container ">
                <center>
                  <h1 className="font-mono text-3xl">Warranty</h1>
                </center>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae aperiam, quos reiciendis dolores eaque
                  reprehenderit quis odit ut eligendi enim mollitia quia tempora
                  corporis cumque iste rem nesciunt repellendus numquam.
                </p>
              </div>
            </div>
          </div>
          <div className="container p-6">
            <center>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/products");
                }}
              >
                Shop Now
              </Button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
