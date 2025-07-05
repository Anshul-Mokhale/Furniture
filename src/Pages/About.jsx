import React from "react";
import './About.css';
import formhaus from '../assets/ourstory.jpg'

export default function About() {
    const features = [
        { title: "Modern Design", desc: "Sleek, minimalist styles for timeless interiors." },
        { title: "Sustainable Materials", desc: "Eco-conscious wood, fabrics & finishes." },
        { title: "Handcrafted Quality", desc: "Each piece is crafted with precision & care." },
        { title: "Customization", desc: "Furniture that fits your space and personality." },
        { title: "Reliable Delivery", desc: "Fast shipping, careful packaging, on-time." },
        { title: "Dedicated Support", desc: "We're here to help before and after your purchase." },
    ];

    return (
        <div className="font-sans text-gray-800">
            {/* Hero Section */}
            <section className="about outfit py-24 h-[500px] flex flex-col items-center justify-center relative px-6 md:px-20">
                <div className="max-w-5xl flex flex-col items-center justify-center mx-auto text-center relative z-10 animate-fade-in">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-xl">About Formhaus</h1>
                    <p className="text-lg md:text-xl text-white drop-shadow-md max-w-xl">
                        Timeless design, inspired living. Furniture crafted for comfort, style, and sustainability.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="outfit py-24 px-6 md:px-20 bg-white">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <img
                        src={formhaus}
                        alt="Our Story"
                        className="rounded-2xl shadow-xl w-full object-cover animate-slide-in-left"
                    />
                    <div className="animate-slide-in-right">
                        <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            At Formhaus, we craft furniture that elevates your everyday. With clean lines, quality materials, and a
                            passion for design, we deliver pieces that blend comfort with sophistication. Whether you’re styling a
                            cozy corner or furnishing your dream home, we help you build spaces that feel like you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="outfit bg-gray-50 py-24 px-6 md:px-20">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-14">Why Choose Formhaus?</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 duration-300"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}
