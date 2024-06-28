'use client';

import Image from "next/image"

interface AvatarProps {
    src: string | null | undefined
};

const Avatar: React.FC<AvatarProps> = ({
    src
}) => {
    return (  
        <Image 
            className="rounded-full"
            height="25"
            width="25"
            alt="Avatar"
            src={src || "/images/user.png"}

        />
    );
}
 
export default Avatar;