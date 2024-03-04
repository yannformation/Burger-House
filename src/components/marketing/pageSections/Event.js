import React from "react";
import Container from "../../elements/Container";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../../css/carousel.css";
import Image1 from "../../../medias/images/photos/dorian-hurst-d-igN2ptyC8-unsplash.jpg";
import Image2 from "../../../medias/images/products/Product-1.jpg";
import Image3 from "../../../medias/images/products/Product-2.jpg";
import Heading from "../../elements/displayTitles/Heading";

const Slide = ({ children, category, title, image }) => {
  return (
    <div className="grid grid-cols-2 p-6">
      <div className="p-10 mb-10">
        <Heading variant="h4">{category}</Heading>
        <Heading theme="secondary" variant="h3" className="mb-5">
          {title}
        </Heading>
        <p className="tracking-wide text-lg  font-light text-gray-800">
          {children}
        </p>
      </div>
      <div className="relative h-full w-full">
        <img
          src={image}
          alt="Une description de l'image"
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
      category="évènements à venir"
      title="vivez la demi-finale"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
      molestie sem. Aenean sagittis purus quis ante dictum, et viverra turpis
      tincidunt. Aliquam eu cursus velit. Proin eu pretium tortor, sit amet.
    </Slide>,

    <Slide
      image={Image2}
      category="Nouveau burger"
      title="Découvrez le Killer Burger"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
      molestie sem. Aenean sagittis purus quis ante dictum, et viverra turpis
      tincidunt. Aliquam eu cursus velit. Proin eu pretium tortor, sit amet.
    </Slide>,

    <Slide
      image={Image3}
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
      <div className="shadow-2xl mb-20">
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
