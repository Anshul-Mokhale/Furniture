import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Scroll background handler
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`navbar outfit flex justify-between items-center px-6 py-4 fixed w-full z-[999] transition-all duration-300 
    ${isScrolled
                        ? 'bg-gray-800/50 backdrop-blur-md shadow-md'
                        : 'bg-transparent'
                    } text-white`}
            >

                <div className="text-xl font-bold">My Website</div>

                {/* Desktop nav */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <ul className="hidden md:flex space-x-6">
                    <li><Link to='/cart'><box-icon name='cart' color="white"></box-icon></Link></li>
                </ul>

                {/* Mobile menu button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <box-icon name="menu" color="white"></box-icon>
                </button>
            </nav >

            {/* Sidebar overlay */}
            {
                isSidebarOpen && (
                    <div
                        className="fixed inset-0  bg-opacity-50 z-[998]"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )
            }

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 z-[999] text-white transform transition-transform duration-300
    ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
    bg-gray-800/50 backdrop-blur-md border-l border-white/10 shadow-lg`}
            >

                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h2 className="text-xl font-semibold">Menu</h2>
                    <button onClick={() => setIsSidebarOpen(false)}>
                        <box-icon name="x" color="white"></box-icon>
                    </button>
                </div>
                <ul className="flex flex-col p-4 space-y-4">
                    <li><Link to="/" onClick={() => setIsSidebarOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setIsSidebarOpen(false)}>About</Link></li>
                    <li><Link to="/contact" onClick={() => setIsSidebarOpen(false)}>Contact</Link></li>
                    <li><Link className='flex items-center gap-2' to="/contact" onClick={() => setIsSidebarOpen(false)}><box-icon name='cart' color="white"></box-icon> Cart</Link></li>
                </ul>
            </div>
        </>
    );
}
