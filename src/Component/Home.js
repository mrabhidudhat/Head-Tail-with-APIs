import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-200 p-8">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Home</h1>
      <p className="text-gray-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        provident eum doloremque deserunt architecto perferendis iusto fugiat
        voluptatum, ex aut atque magni, voluptate cum alias. Illum, quis commodi
        corrupti ex fuga soluta unde suscipit itaque exercitationem totam
        explicabo corporis! Voluptates.
      </p>
      <div className="mt-4">
        <Link to="/about" className="text-blue-500 hover:underline mr-4 ">
          About
        </Link>
        <Link to="/head-and-tail" className="text-blue-500 hover:underline">
          Head & Tail
        </Link>
      </div>
    </div>
  );
};

export default Home;
