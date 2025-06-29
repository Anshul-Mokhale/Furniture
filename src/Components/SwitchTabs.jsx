import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = {
    Chai: [
        { title: "Masala Chai", image: "https://ii1.pepperfry.com/media/catalog/product/p/e/1100x1210/peshtigo-sheesham-wood-arm-chair-in-provincial-teak-finish-peshtigo-sheesham-wood-arm-chair-in-provi-warmva.jpg" },
        { title: "Ginger Chai", image: "https://ii1.pepperfry.com/media/catalog/product/p/e/1100x1210/peshtigo-sheesham-wood-arm-chair-in-provincial-teak-finish-peshtigo-sheesham-wood-arm-chair-in-provi-warmva.jpg" },
        { title: "Elaichi Chai", image: "https://ii1.pepperfry.com/media/catalog/product/p/e/1100x1210/peshtigo-sheesham-wood-arm-chair-in-provincial-teak-finish-peshtigo-sheesham-wood-arm-chair-in-provi-warmva.jpg" },
        { title: "Lemon Tea", image: "https://ii1.pepperfry.com/media/catalog/product/p/e/1100x1210/peshtigo-sheesham-wood-arm-chair-in-provincial-teak-finish-peshtigo-sheesham-wood-arm-chair-in-provi-warmva.jpg" },
    ],
    Bed: [
        { title: "Queen Bed", image: "https://ii1.pepperfry.com/media/catalog/product/p/e/1100x1210/peshtigo-sheesham-wood-arm-chair-in-provincial-teak-finish-peshtigo-sheesham-wood-arm-chair-in-provi-warmva.jpg" },
        { title: "King Bed", image: "https://ii1.pepperfry.com/media/catalog/product/p/e/1100x1210/peshtigo-sheesham-wood-arm-chair-in-provincial-teak-finish-peshtigo-sheesham-wood-arm-chair-in-provi-warmva.jpg" },
        { title: "Single Bed", image: "https://ii1.pepperfry.com/media/catalog/product/p/e/1100x1210/peshtigo-sheesham-wood-arm-chair-in-provincial-teak-finish-peshtigo-sheesham-wood-arm-chair-in-provi-warmva.jpg" },
        { title: "Bunk Bed", image: "https://ii1.pepperfry.com/media/catalog/product/p/e/1100x1210/peshtigo-sheesham-wood-arm-chair-in-provincial-teak-finish-peshtigo-sheesham-wood-arm-chair-in-provi-warmva.jpg" },
    ],
    Sofa: [
        { title: "Leather Sofa", image: "https://source.unsplash.com/400x300/?leather,sofa" },
        { title: "Sectional Sofa", image: "https://source.unsplash.com/400x300/?sectionalsofa" },
        { title: "Fabric Sofa", image: "https://source.unsplash.com/400x300/?fabricsofa" },
        { title: "Recliner Sofa", image: "https://source.unsplash.com/400x300/?recliner" },
    ],
    Lamp: [
        { title: "Table Lamp", image: "https://source.unsplash.com/400x300/?lamp,table" },
        { title: "Floor Lamp", image: "https://source.unsplash.com/400x300/?lamp,floor" },
        { title: "Wall Lamp", image: "https://source.unsplash.com/400x300/?lamp,wall" },
        { title: "Smart Lamp", image: "https://source.unsplash.com/400x300/?smartlamp" },
    ],
};

export default function SwitchTabsWithCards() {
    const [active, setActive] = useState("Chai");

    return (
        <div className="p-8 max-w-6xl mx-auto">
            {/* Tab Buttons with Animation */}
            <div className="relative flex space-x-4 mb-8 justify-center">
                {Object.keys(categories).map((name) => (
                    <button
                        key={name}
                        onClick={() => setActive(name)}
                        className="relative px-5 py-2 font-medium rounded-full text-gray-700"
                    >
                        {active === name && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-[#503217] rounded-full z-[-1]"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                        <span className={`relative z-10 ${active === name ? 'text-white' : ''}`}>{name}</span>
                    </button>
                ))}
            </div>

            {/* Animated Cards Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {categories[active].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-[#503217]">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
