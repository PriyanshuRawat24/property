import Image from "next/image";
import React from "react";

const clients = [
  {  img: "/c-1.png" },
  {  img: "/c-2.png" },
  {  img: "/c-3.png" },
  {  img: "/c-4.png" },
  {  img: "/c-5.png" },
];

const Company = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center border p-6 "
            >
              <Image
                src={client.img}
                alt={client.name}
                width={"700"}
                height={"700"}
                className="w-full h-full object-contain"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-700">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Company;
