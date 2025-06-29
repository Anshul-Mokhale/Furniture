import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="outfit bg-gray-800 text-white">
            {/* Top Footer */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {/* Description */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">My Website</h1>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center">
                    <ul className="space-y-2 text-sm">
                        <h2 className="text-xl font-semibold mb-4">Follow Us</h2>

                        <li>
                            <Link to="/" className="hover:text-blue-400 transition">Facebook</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-pink-400 transition">Instagram</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-sky-400 transition">Twitter</Link>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-end">
                    <ul className="space-y-2 text-sm">
                        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>

                        <li>
                            <Link to="/" className="hover:text-teal-400 transition">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-teal-400 transition">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-teal-400 transition">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 mt-6">
                <p className="text-center text-xs text-gray-400 py-4">
                    &copy; {new Date().getFullYear()} Furniture Store. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer