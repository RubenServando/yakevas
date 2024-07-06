'use client';

import Container from "../Container";
import CategoryBox from "../CategoryBox";

import { GiCardboardBoxClosed } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaShip, FaCarSide } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";

import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: '≤ 1 Kg',
        icon: GiCardboardBoxClosed,
        description: 'Tansportation by walk!'
    },
    {
        label: '5 Kg',
        icon: FaPersonWalkingLuggage,
        description: 'Transportation by road!'
    },
    {
        label: '10 Kg',
        icon: FaCarSide,
        description: 'Tansportation by ferry!'
    },
    {
        label: '≥ 20 Kg',
        icon: MdLocalShipping,
        description: 'Transportation by plane!'
    }
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return ( 
        <Container>
            <div
                className="
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                "
            >
                {categories.map((item) => (
                    <CategoryBox
                    key={item.label}
                    label={item.label}
                    selected={category === item.label}
                    icon={item.icon}
                    />
                ))}
            </div>
        </Container>
     );
}
 
export default Categories;