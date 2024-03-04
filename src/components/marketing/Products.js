import React from "react";
import Container from "../elements/Container";
import HeadingTitles from "../elements/displayTitles/HeadingTitles";
import Heading from "../elements/displayTitles/Heading";
import Button from "../elements/Button";

import Product1 from '../../../src/medias/images/products/Product-1.jpg';
import Product2 from '../../../src/medias/images/products/Product-2.jpg';
import Product3 from '../../../src/medias/images/products/Product-3.jpg';




export default function Products() {
  return (
    <Container>
      <HeadingTitles>Toujours des délicieux burgers</HeadingTitles>

      <Heading theme="secondary">Choisissez et savourez</Heading>

      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
        molestie sem. Aenean sagittis purus quis ante dictum, et viverra turpis
        tincidunt. Aliquam eu cursus velit. Proin eu pretium tortor, sit amet.
      </p>

      <div className="grid grid-cols-3 gap-x-1 mb-20 mt-10">

        <div className="w-full h-full">
          <div className="relative w-full h-72">
            <img src={Product1} alt="Un hamburger" className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0" />
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3">Lorem ipsum dolor</Heading>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ac
            </p>
            <Button color="danger" className="font-secondary">
              Commandez
            </Button>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="relative w-full h-72">
            <img src={Product2} alt="Un hamburger" className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0" />
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3">Lorem ipsum dolor</Heading>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ac
            </p>
            <Button color="danger" className="font-secondary">
              Commandez
            </Button>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="relative w-full h-72">
            <img src={Product3} alt="Un hamburger" className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0" />
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3">Lorem ipsum dolor</Heading>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ac
            </p>
            <Button color="danger" className="font-secondary">
              Commandez
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
