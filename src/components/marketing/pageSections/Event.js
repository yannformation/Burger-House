import React from "react";
import Container from "../../elements/Container";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../../css/carousel.css";
import Image1 from "../../../medias/images/photos/dorian-hurst-d-igN2ptyC8-unsplash.jpg";
import Image2 from "../../../medias/images/products/Product-1.jpg";
import Image3 from "../../../medias/images/products/Product-2.jpg";
import Heading from "../../elements/displayTitles/Heading";

const Slide = ({ children, category, title, image, alt }) => {
  return (
    <div className="grid md:grid-cols-2  p-3 md:p-6">
      <div className="p-5 md:p-10 md:mb-10">
        <Heading variant="h4">{category}</Heading>
        <Heading theme="secondary" variant="h3" className="mb-5">
          {title}
        </Heading>
        <p className="tracking-wide text-lg  font-light text-gray-800 mb-0 md:mb-10">
          {children}
        </p>
      </div>
      <div className="relative h-96 md:h-full w-full">
        <img
          src={image}
          alt={alt}
          className="bg-primary absolute top-0 left-0 w-full h-full object-cover object-bottom z-0"
        />
      </div>
    </div>
  );
};

export default function Event() {
  const items = [
    <Slide
      image={Image1}
      alt="Supporter de l'équipê de France de football"
      category="évènements à venir"
      title="vivez la demi-finale"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
      molestie sem. Aenean sagittis purus quis ante dictum, et viverra turpis
      tincidunt. Aliquam eu cursus velit. Proin eu pretium tortor, sit amet.
    </Slide>,

    <Slide
      image={Image2}
      alt="Le nouveau Burger 'Killer Burger'"
      category="Nouveau burger"
      title="Découvrez le Killer Burger"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
      molestie sem. Aenean sagittis purus quis ante dictum, et viverra turpis
      tincidunt. Aliquam eu cursus velit. Proin eu pretium tortor, sit amet.
    </Slide>,

    <Slide
      image={Image3}
      alt="Burger végétarien"
      category="Nouvelle recette"
      title="Le végéburger arrive !"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
      molestie sem. Aenean sagittis purus quis ante dictum, et viverra turpis
      tincidunt. Aliquam eu cursus velit. Proin eu pretium tortor, sit amet.
    </Slide>,
  ];

  return (
    <Container>
      <div className="shadow-2xl mb-20 border border-gray-200">
        <AliceCarousel
          autoPlay
          infinite
          autoPlayInterval="4000"
          disableButtonsControls
          mouseTracking
          animationType="fadeout"
          items={items}
        />
      </div>
    </Container>
  );
}
