'use client';

import Container from "../Container";
import CategoryBox from "../CategoryBox";

import { MdLocalShipping } from "react-icons/md";
import { PiAirplaneTiltFill } from "react-icons/pi";

import { TbMountain, TbPool } from "react-icons/tb";
import { 
        GiBarn,
        GiBoatFishing, 
        GiCactus, 
        GiCastle, 
        GiCaveEntrance, 
        GiForestCamp, 
        GiIsland } from "react-icons/gi";

import { FaShip, FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

import { usePathname, useSearchParams } from "next/navigation";


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
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a pool!'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an island!'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a lake!'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities!'
    },
    {
        label: 'Castle',
        icon: GiCastle,
        description: 'This property is in a castle!'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has camping activities!'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property has camping activities!'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property has camping activities!'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property has camping activities!'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property has camping activities!'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property has camping activities!'
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