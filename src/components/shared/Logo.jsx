import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={'/'} className='flex items-center gap-2 cursor-pointer'>
            <Image src={'/care-io-logo.png'} alt="Logo" width={40} height={40} />
            <p className="font-bold text-2xl">
                Care.IO
            </p>
        </Link>
    );
};

export default Logo;