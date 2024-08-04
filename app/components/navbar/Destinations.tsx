'use client';

import Container from "../Container";

const Detinations = () => {
    return ( 
       
        <Container>
            <div
                className="
                flex
                border-[1px]
                w-full
                md:w-auto
                py-5
                m-5
                rounded-xl
                shadow-sm
                hover:shadow-md
                transition
                cursor-pointer
            "
            >
                <div
                    className="
                    hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x-[0.5px]
                    flex-1
                    text-center
                "
                >
                    El Hierro
                </div>
                <div
                    className="
                    hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x-[0.5px]
                    flex-1
                    text-center
                "
                >
                    Fuerteventura
                </div>
                <div
                    className="
                    hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x-[0.5px]
                    flex-1
                    text-center
                "
                >
                    Gran Canaria
                </div>
                <div
                    className="
                    hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x-[0.5px]
                    flex-1
                    text-center
                "
                >
                    La Gomera
                </div>
                <div
                    className="
                    hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x-[0.5px]
                    flex-1
                    text-center
                "
                >
                    Lanzarote
                </div>
                <div
                    className="
                    hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x-[0.5px]
                    flex-1
                    text-center
                "
                >
                    La Graciosa
                </div>
                <div
                    className="
                    hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x-[0.5px]
                    flex-1
                    text-center
                "
                >
                    La Palma
                </div>
                <div
                    className="
                    hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x-[0.5px]
                    flex-1
                    text-center
                "
                >
                    Tenerife
                </div>
            </div>
        </Container>
     );
}
 
export default Detinations;