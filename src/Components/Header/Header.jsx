// import React from 'react';

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center my-5 bg-green-50 p-5">
            <div onClick={() => setIsOpen(!isOpen)} className="h-6 w-6 md:hidden">
                {
                    isOpen ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            <h2 className="text-3xl font-bold text-yellow-600">RUNNING</h2>
            <ul className={`md:flex gap-5 text-lg font-semibold text-yellow-500 absolute md:static ${isOpen ? 'top-12 left-16' : 'top-[-150px] left-16'} duration-500 ease-in`}>
                <li className="hover:text-yellow-700"><a href="Order">Order</a></li>
                <li className="hover:text-yellow-700"><a href="Order Review">Order Review</a></li>
                <li className="hover:text-yellow-700"><a href="Manage Inventory">Manage Inventory</a></li>
                <li className="hover:text-yellow-700"><a href="Login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Header;