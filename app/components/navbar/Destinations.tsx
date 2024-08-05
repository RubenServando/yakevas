'use client';

import React, { useState } from 'react';
import DestinationsItems from './DestinationsItems';
import Container from "../Container";

const optionsData = [
  {
    background: 'url(/images/black.png)',
    icon: '/icon-hierro.svg',
    main: 'El Hierro',
    sub: 'Un continente en miniatura',
  },
  {
    background: 'url(/images/white.png)',
    icon: '/icon-fuerteventura.svg',
    main: 'Fuerteventura',
    sub: 'Infinidad de playas sinfin',
  },
  {
    background: 'url(/images/yellow.png)',
    icon: '/icon-grancanaria.svg',
    main: 'Gran Canaria',
    sub: 'Roque nublo por bandera',
  },
  {
    background: 'url(/images/blue.png)',
    icon: '/icon-gomera.svg',
    main: 'La Gomera',
    sub: 'Corazón de laurisilva',
  },
  {
    background: 'url(/images/snow.png)',
    icon: '/icon-tenerife.svg',
    main: 'Tenerife',
    sub: 'De la cumbre a la costa',
  },
  {
    background: 'url(/images/indian.png)',
    icon: '/icon-graciosa.svg',
    main: 'La Graciosa',
    sub: 'Pequeño paraiso en la tierra',
  },
  {
    background: 'url(/images/cyan.png)',
    icon: '/icon-palma.svg',
    main: 'La Palma',
    sub: 'Un espacio de contrastes',
  },
  {
    background: 'url(/images/orange.png)',
    icon: '/icon-lanzarote.svg',
    main: 'Lanzarote',
    sub: 'Pura esencia volcánica',
  },
];

const Destinations: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(99999);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? 99999 : index);
  };

  return (
    <Container>
      <div className="
        flex 
        flex-row
        items-center  
        justify-center 
        cursor-pointer 
        m-4
        "        
    >
        <div
          className="
            relative
            flex
            flex-wrap
            md:flex-nowrap
            items-stretch
            w-full
            max-w-[1250px]
            h-auto
            overflow-hidden
          "
        >
          {optionsData.map((option, index) => (
            <DestinationsItems
              key={index}
              title={option.main}
              sub={option.sub}
              background={option.background}
              icon={option.icon}
              open={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Destinations;
