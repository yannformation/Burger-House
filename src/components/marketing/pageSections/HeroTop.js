import React from "react";
import Illustration from "../../../medias/images/background/bg-food.jpg";
import Product from "../../../medias/images/heroTop/burger-hero-top.png";
import Container from "../../elements/Container";
import Header from "./Header";
import Button from "../../elements/Button";

export default function HeroTop() {
  return (
    <div className="bg-primary w-full">
      <div
        className="bg-repeat w-full h-full  pb-20 md:pb-40"
        style={{ backgroundImage: `url(${Illustration})` }}
      >
        <Container>
          <Header />
          <div className="relative w-full mt-10 md:mt-28">
            <img
              src={Product}
              alt="Un menu hamburger avec frites et Coca-Cola."
              className="hidden lg:block  z-0 absolute  lg:-top-64 right-0" style={{width: '568px'}}
            />
            <div className="hidden lg:block absolute right-80 top-40 bg-red-primary w-40 h-40 rounded-full p-3">
              <div className="w-full h-full rounded-full border-2 border-dashed border-white text-white flex items-center justify-center">
                <div className="text-center">
                  <span className="block font-extrabold">
                    <span className="text-5xl">5</span>.49€
                  </span>
                  <span className="tracking-widest uppercase text-sm">
                    seulement
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 text-secondary uppercase text-left md:text-center lg:text-left">
              <h1 className=" text-xl mb-4 font-semibold">
                C'est le moment de goûter au bon goût des hamburgers.
              </h1>
              <h2 className="font-secondary shadowTitleSecondary">
                <span className="text-7xl md:text-8xl block">Burger</span>
                <span className="text-5xl md:text-6xl block sm:inline-block">House</span>
                <span className="text-4xl ml-0 sm:ml-3">
                  {" "}
                  Click<span className="text-red-primary">&</span>Collect
                </span>
              </h2>
            </div>
            <div className="w-1/3"></div>
          </div>
          <Button className="mt-5 w-full lg:w-1/2" color="secondary" theme="big">
            Créer mon compte
          </Button>
        </Container>
      </div>
    </div>
  );
}
