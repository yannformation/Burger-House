import React from "react";
import Container from "../../elements/Container";
import backgroundImage from "../../../medias/images/background/bg-footer.jpg";
import Logo from "../../../medias/svg/Logo-burger-house-white.svg";
import IcoInsta from "../../../medias/svg/instagram.svg";
import IcoFacebook from "../../../medias/svg/facebook.svg";
import IcoTwitter from "../../../medias/svg/twitter.svg";
import IcoWhatsapp from "../../../medias/svg/whatsapp.svg";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <Container>
      <div className="relative lg:mb-20 p-5 text-white ">
        <img
          src={backgroundImage}
          alt="Un plan de travail de cuisine où l'on conçoit un hamburger"
          className="bg-black absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="grid md:grid-cols-2 z-10 relative">
          <div className="w-full p-5 md:mt-20 mt-10 md:mb-28">
            <img src={Logo} alt="Le logo Burgerhouse" className="w-2/3" />
            <p className="mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
                 molestie sem. Aenean sagittis purus quis ante dictum, et viverra turpis
                tincidunt. Aliquam eu cursus velit. Proin eu pretium tortor, sit amet.
            </p>
          </div>

          <div className="md:h-full w-full flex flex-col items-start md:items-center justify-center mb-20 md:mb-0 p-5 md:p-0">
            <div className="flex items-center">
              <MapPinIcon className="h-6 w-6 md:h-10 md:w-10 mr-5" />

              <span className="uppercase font-semibold text-sm md:text-lg tracking-tighter">
                15 Place Bellecour, 69000 Lyon
              </span>
            </div>
            <div className="flex items-center mt-5">
              <EnvelopeIcon className="h-6 w-6 md:h-10 md:w-10 mr-5" />
              <span className="uppercase font-semibold text-sm md:text-lg tracking-tighter">
                info@burger-house.com
              </span>
            </div>
          </div>
        </div>

        <div className="z-10 relative md:flex items-center justify-between">
           <div className="uppercase font-semibold tracking-tighter text-sm mb-5 md:mb-0">
           © burger house 2024. All rights reserved
           </div>
           <div className="flex ">
        
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group">
                <img src={IcoInsta} alt="icone instagram" className="w-7 h-7 mr-2 bg-white group-hover:bg-primary animate rounded-full p-1"/>
                </a>
            
        
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group">
                <img src={IcoFacebook} alt="icone instagram" className="w-7 h-7 mr-2 bg-white group-hover:bg-primary rounded-full p-1"/>
                </a>
                
        
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group">
                <img src={IcoTwitter} alt="icone instagram" className="w-7 h-7 mr-2 bg-white group-hover:bg-primary animate rounded-full p-1"/>
                </a>
                
        
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="group">
                <img src={IcoWhatsapp} alt="icone instagram" className="w-7 h-7 bg-white group-hover:bg-primary animate rounded-full p-1 "/>
                </a>
                
           </div>
        </div>
      </div>
    </Container>
  );
}
