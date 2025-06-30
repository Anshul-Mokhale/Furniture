import React, { useEffect } from 'react'
import './Home.css'
import SwitchTabs from '../Components/SwitchTabs';
import div1 from '../assets/div1.png'

import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import Testimonials from './Testimonials';

export default function Home() {
    useEffect(
        () => {
            document.title = "Formhaus | Home"
        }
    )
    const features = [
        {
            title: "Luxury Facility",
            description:
                "Experience world-class luxury with our state-of-the-art amenities designed for your ultimate comfort and elegance.",
        },
        {
            title: "Affordable Price",
            description:
                "We believe luxury shouldn't break the bank. Get top-tier services at prices that suit your budget.",
        },
        {
            title: "Many Choices",
            description:
                "From various packages to customizable options, we offer a wide range of choices to fit your preferences perfectly.",
        },
    ];
    return (
        <>
            <div className="outfit home h-screen flex flex-col items-center pt-40 md:pt-45 text-white px-4">
                <div className="head text-center max-w-4xl z-[2]">
                    <h1 className="text-4xl md:text-5xl font-bold leading-snug">
                        Make Your Interior More Minimalistic and Modern
                    </h1>
                    <p className="mt-4 text-sm md:text-lg">
                        Turn your room with furniture into a lot more minimalist and modern with ease and speed
                    </p>
                </div>
            </div>
            <div className="home2 outfit bg-white py-16 px-6 md:px-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#503217] mb-4">Why Choose Us?</h1>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <h2 className="text-2xl font-semibold text-[#503217] mb-2">{feature.title}</h2>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='py-16'>
                <h1 className='outfit text-4xl md:text-5xl text-[#503217] text-center'>Best Selling Products</h1>
                <SwitchTabs />
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between outfit max-w-6xl mx-auto px-4 py-16 gap-8'>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img src={div1} alt="left image" className='rounded-2xl' />
                </div>
                <div className='w-full md:w-1/2 flex gap-8 flex-col text-center md:text-left'>
                    <h1 className='text-3xl text-[#503217]'>We provide the best Experience</h1>
                    <p>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center justify-between outfit max-w-6xl mx-auto px-4 py-16 gap-10">
                {/* Images Section */}
                <div className="flex w-full md:w-1/2 gap-4">
                    {/* Side images */}
                    <div className="flex flex-col gap-4 w-1/3">
                        <div className="aspect-[3/4] overflow-hidden rounded-lg">
                            <img src={image1} alt="image1" className="object-cover w-full h-full" />
                        </div>
                        <div className="aspect-[3/4] overflow-hidden rounded-lg">
                            <img src={image2} alt="image2" className="object-cover w-full h-full" />
                        </div>
                    </div>

                    {/* Main image */}
                    <div className="w-2/3 aspect-square overflow-hidden rounded-2xl">
                        <img src={image3} alt="image3" className="object-cover w-full h-full" />
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl text-[#503217] font-bold">
                        Very Serious Materials for Making Furniture
                    </h1>
                    <p className="text-gray-700 leading-relaxed">
                        Because Panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price.
                    </p>
                </div>
            </div>

            <div className='py-16 outfit'>
                <Testimonials />
            </div>

        </>
    )
}
