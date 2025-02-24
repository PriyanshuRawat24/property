import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const cities = [
  { name: "Shanghai, China", image: "/city-1.jpg", properties: 60 },
  { name: "Bursa, Türkiye", image: "/city-2.jpg", properties: 60 },
  { name: "California, USA", image: "/city-3.jpg", properties: 60 },
  { name: "New York, USA", image: "/city-4.jpg", properties: 60 },
  { name: "New York, USA", image: "/city-1.jpg", properties: 60 },
  { name: "New York, USA", image: "/city-3.jpg", properties: 60 },
];

const CarouselData = () => {
  return (
    <>
      <div className="container bg-gray-100 mx-auto px-6 lg:px-20 py-16 relative">
        <p className="text-red-600 font-semibold">// EXPLORE CITIES</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-4">
          TAKE A STROLL AROUND <br /> SURROUNDINGS.
        </h2>

        <div className="relative">
          <Carousel>
            <CarouselContent className="-ml-2 md:-ml-4 flex">
              {cities.map((city, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 group relative overflow-hidden rounded-xl md:basis-1/4 "
                >
                  <div className="relative w-[100%] h-80 mt-8 ">
                    <Image
                      src={city.image}
                      alt={city.name}
                      width={100}
                      height={700}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {city.properties} Properties
                      </span>
                      <h3 className="mt-2 text-lg font-semibold">
                        {city.name}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute right-[10rem] top-[-3rem] transform -translate-y-1/2 flex gap-4">
              <CarouselPrevious className="bg-white hover:bg-white p-2 " />
              <CarouselNext className="bg-white hover:bg-white p-2 " />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CarouselData;
