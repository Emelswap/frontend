'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center p-1 overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-500">
                <Image src="/emelverse.jpeg" width={48} height={48} alt='emelverse logo' className='w-12 h-12 object-cover' />
            </div>
            <span className="text-white text-2xl font-black uppercase italic tracking-tighter">emelswap</span>
        </Link>
    );
};
