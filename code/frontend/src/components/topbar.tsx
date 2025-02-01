"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Topbar() {
    const navLinks = [
        {name: 'Home', href: '/'},
        {name: 'Photography', href: '/photography'},
        {name: 'Projects', href: '/projects'},
        {name: 'About', href: '/about'}
    ];

    const currentPath = usePathname();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return(
        <React.Fragment>
            <nav className="container border-b border-auto top-0 sticky backdrop-blur-lg backdrop-contrast-200 bg-[rgba(var(--background-rgb),0.85)]">
                <div className="max-w-[56rem] mx-auto flex justify-between items-center pl-4 h-12 md:border-x border-auto">
                    <h3>Techit Thawiang</h3>
                    <div className="nav-links">
                        {navLinks.map((link, index) => (
                            <Link key={index} href={link.href} className={`text-sm ${currentPath === link.href ? 'active' : ''}`}>{link.name}</Link>
                        ))}
                        <button className="btn auto-hide text-2xl font-ico" onClick={toggleDrawer}></button>
                    </div>
                </div>
            </nav>
            {isDrawerOpen && (
                <div className={`fixed h-screen w-screen backdrop-blur z-10 bg-[rgba(var(--background-rgb),0.85)]`}>
                    <div className="h-12 border-b border-auto pl-4 flex flex-row justify-between">
                        <section className="flex flex-row items-center">
                            <h3>Menu</h3>
                        </section>
                        <section className="nav-links border-l border-auto">
                            <button className="btn auto-hide text-2xl font-ico" onClick={toggleDrawer}></button>
                        </section>
                    </div>
                    <div className="flex flex-col items-start justify-center py-4 mx-4 text-start">
                        {navLinks.map((link, index) => (
                            <Link key={index} href={link.href} className={`text-4xl my-2`} onClick={toggleDrawer}>{link.name}</Link>
                        ))}
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}