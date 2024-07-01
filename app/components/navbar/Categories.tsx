'use client';

import Container from "../Container";
import CategoryBox from "../CategoryBox";

import { MdLocalShipping } from "react-icons/md";
import { FaShip } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";

export const categories = [
    {
        label: 'Local',
        icon: MdLocalShipping,
        description: 'Transportation locally!'
    },
    {
        label: 'Ferry',
        icon: FaShip,
        description: 'Tansportation by ferry!'
    },
    {
        label: 'Plane',
        icon: PiAirplaneTiltFill,
        description: 'Transportation by plane!'
    }
]

const Categories = () => {
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
                    description={item.description}
                    icon={item.icon}
                    />
                ))}
            </div>
        </Container>
     );
}
 
export default Categories;