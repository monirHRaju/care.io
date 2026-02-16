import Link from 'next/link';
import React from 'react';
import { MdOutlineDesignServices } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import Image from 'next/image';

const DashboardSidebar = () => {
    return (
        <div className='w-50 bg-purple-200 h-screen text-black fixed top-0 left-0'>
            
            <Link href={'/'} className='block mt-5 mb-10 cursor-pointer'>
                <h1 className='p-3 font-bold text-2xl text-center'>CarWash</h1>
                <Image alt='Care.IO logo' src="https://i.ibb.co.com/0psLqp2X/carwash-logo.webp" className='mx-auto' width={60} height={60} />
            </Link>
            
            <div className='flex flex-col'>
                <div className='flex gap-2 items-center hover:bg-purple-400 p-2'>
                    <MdOutlineDesignServices />
                    <Link href={'/services'} className=''>Services</Link>
                </div>
                
                <div className='flex gap-2 items-center hover:bg-purple-400 p-2'>
                    <CiMoneyBill />
                    <Link href={'/payments'} className=''>Payments</Link>
                </div>


             
            </div>
        </div>
    );
};

export default DashboardSidebar;