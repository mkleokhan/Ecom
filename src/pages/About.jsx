import { Navigate, useNavigate } from "react-router-dom";
import micImage from "../assets/1.jpg";

import Button from "@mui/material/Button";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 space-y-4 md:space-y-0 w-full px-4 py-4">
        <div className="relative object-contain rounded-3xl md:w-1/2   overflow-hidden">
          <img
            src={micImage}
            alt="Background Image"
            className="rounded-3xl object-cover w-full h-full "
          />
        </div>

        {/* Our Story Section */}
        <div className="relative bg-white rounded-3xl shadow-lg p-8 lg:p-16 md:w-1/2 mt-10">
          <h2 className="text-xl lg:text-4xl font-serif">Our Story</h2>
          <p className="mb-4 text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultrices tristique mauris, quis ultrices urna tempus et. Donec
            hendrerit porttitor venenatis. Sed quis tempor nulla.
          </p>
          <p className="text-xl lg:text-2xl">
            Vivamus fringilla elit eu felis iaculis cursus. Integer ullamcorper
            libero vel orci tristique, in ullamcorper est luctus. Proin in
            ligula felis.
          </p>
          <p className="text-xl lg:text-2xl">
            Vivamus fringilla elit eu felis iaculis cursus. Integer ullamcorper
            libero vel orci tristique, in ullamcorper est luctus. Proin in
            ligula felis.
          </p>
        </div>
      </div>

      {/* here */}

      <div className="container w-full bg-blue-200 rounded-3xl mt-8 animate-fadeIn p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h1 className="font-mono text-4xl text-blue-600">20+</h1>
            <p className="font-mono text-3xl text-blue-600">
              Years of Experience
            </p>
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-mono text-4xl text-blue-600">100+</h1>
            <p className="font-mono text-3xl text-blue-600">Audio Products</p>
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-mono text-4xl text-blue-600">10+</h1>
            <p className="font-mono text-3xl text-blue-600">Industry Awards</p>
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-mono text-4xl text-blue-600">100K+</h1>
            <p className="font-mono text-3xl text-blue-600">
              Community Members
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-10">
        <div className="ml-0">
          <h1 className="font-impact text-4xl">Our Values</h1>
        </div>
        <div className="ml-auto flex justify-center md:justify-end">
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

      <div className="container grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5 mt-5">
        <div className="rounded-3xl bg-slate-400 p-4">
          <h1 className="font-mono text-3xl">Quality</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel labore
            libero nobis unde consequatur. Doloribus, ipsum maiores. Qui, earum
            provident voluptates quae animi placeat obcaecati veritatis nobis.
            Sint, quos omnis?
          </p>
        </div>
        <div className="rounded-3xl bg-slate-400 p-4">
          <h1 className="font-mono text-3xl">Customer Satisfaction</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel labore
            libero nobis unde consequatur. Doloribus, ipsum maiores. Qui, earum
            provident voluptates quae animi placeat obcaecati veritatis nobis.
            Sint, quos omnis?
          </p>
        </div>
        <div className="rounded-3xl bg-slate-400 p-4">
          <h1 className="font-mono text-3xl">Passion For Sound</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel labore
            libero nobis unde consequatur. Doloribus, ipsum maiores. Qui, earum
            provident voluptates quae animi placeat obcaecati veritatis nobis.
            Sint, quos omnis?
          </p>
        </div>
      </div>

      <div className="container mt-5 bg-gray-300 w-full p-6">
        <div className="grid grid-cols-1">
          <center>
            <h1 className="font-impact text-4xl mt-10">
              Experience Streamlined Shopping with Miljaega
            </h1>
          </center>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <div className="p-10">
            <div className="text-center">
              <h1 className="font-mono text-3xl">Free Delivery</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae aperiam, quos reiciendis dolores eaque reprehenderit
                quis odit ut eligendi enim mollitia quia tempora corporis cumque
                iste rem nesciunt repellendus numquam.
              </p>
            </div>
          </div>
          <div className="p-10">
            <div className="text-center">
              <h1 className="font-mono text-3xl">Self Pickup</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae aperiam, quos reiciendis dolores eaque reprehenderit
                quis odit ut eligendi enim mollitia quia tempora corporis cumque
                iste rem nesciunt repellendus numquam.
              </p>
            </div>
          </div>
          <div className="p-10">
            <div className="text-center">
              <h1 className="font-mono text-3xl">Warranty</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae aperiam, quos reiciendis dolores eaque reprehenderit
                quis odit ut eligendi enim mollitia quia tempora corporis cumque
                iste rem nesciunt repellendus numquam.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
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
    </>
  );
};

export default About;
