import React from "react";
import Link from "next/link";


const NavBar = () => {
    return (
        <nav>
            <div className="w-full h-20 bg-[#F4AE4B] sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full font-bold">
                        CANVAS
                        <ul className="hidden md:flex gap-x-6 text-white">
                            <li>
                                <Link href="https://thisisehtesham.github.io/">
                                    <p>Portfolio</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/thisisehtesham/">
                                    <p>LinkedIn</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/thisisehtesham">
                                    <p>Twitter</p>
                                </Link>
                            </li>
                        </ul>
                        © Ehtesham Ahmad
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
