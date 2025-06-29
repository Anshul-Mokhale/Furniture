import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './test.css'

const testimonials = [
    // Repeat enough items for infinite loop effect
    {
        name: 'Bang Upin',
        role: 'Pedagang Asongan',
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
        message: '“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal”',
        rating: 4,
        bg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },
    {
        name: 'Ibuk Sukijan',
        role: 'Ibu Rumah Tangga',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        message: '“Makasih Panto, aku sekarang berasa tinggal di apartemen karena barang-barang yang terlihat mewah”',
        rating: 5,
        bg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },
    {
        name: 'Mpok Ina',
        role: 'Karyawan Swasta',
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
        message: '“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak”',
        rating: 4,
        bg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },
    {
        name: 'Bang Upin',
        role: 'Pedagang Asongan',
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
        message: '“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal”',
        rating: 3,
        bg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },
];

// Tripled list to simulate infinite scroll
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
    const scrollRef = useRef();
    const [scrolling, setScrolling] = useState(true);

    // Scroll logic
    const scroll = (dir) => {
        const { current } = scrollRef;
        if (!current) return;

        const cardWidth = current.firstChild.offsetWidth + 24; // include gap
        current.scrollBy({
            left: dir === 'left' ? -cardWidth : cardWidth,
            behavior: 'smooth',
        });
    };

    // Auto-scroll setup
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrolling) scroll('right');
        }, 3000);

        return () => clearInterval(interval);
    }, [scrolling]);

    // Infinite scroll: jump to middle copy
    useEffect(() => {
        const container = scrollRef.current;
        const itemWidth = container.firstChild.offsetWidth + 24;
        const middle = Math.floor(infiniteTestimonials.length / 3) * itemWidth;

        container.scrollLeft = middle;

        const handleScroll = () => {
            const maxScroll = itemWidth * infiniteTestimonials.length;
            if (container.scrollLeft <= 0) {
                container.scrollLeft = middle;
            } else if (container.scrollLeft >= maxScroll - container.offsetWidth) {
                container.scrollLeft = middle;
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="py-16 px-4 text-center">
            <p className="text-orange-500 font-semibold tracking-widest uppercase mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#503217] ">Our Client Reviews</h2>

            <div
                className="relative w-full flex justify-center items-center max-w-7xl mx-auto"
                onMouseEnter={() => setScrolling(false)}
                onMouseLeave={() => setScrolling(true)}
                style={{ minHeight: 370 }} // enough for cards + buttons
            >
                {/* Left Button - full width absolute */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-[999] bg-white shadow-md rounded-full p-2"
                    style={{ transform: 'translateY(-50%)' }}
                >
                    <ChevronLeft />
                </button>

                {/* Centered scroll area */}
                <div
                    ref={scrollRef}
                    className="scrll flex overflow-x-auto gap-6 no-scrollbar scroll-smooth mx-auto w-[320px] max-w-[320px] md:w-[1008px] md:max-w-[1008px]"
                    style={{
                        scrollBehavior: 'smooth',
                        margin: '0 auto',

                    }}
                >
                    {infiniteTestimonials.map((item, i) => (
                        <div
                            key={i}
                            className="min-w-[320px] max-w-[320px] bg-white rounded-2xl shadow-lg relative overflow-hidden flex-shrink-0"
                        >
                            {/* ...card content... */}
                            <div
                                className="h-52 bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.bg})` }}
                            ></div>
                            <div className="bg-white p-6 -mt-10 relative z-10 rounded-b-2xl">
                                <div className="w-16 h-16 mx-auto -mt-12 mb-2 rounded-full overflow-hidden border-4 border-white shadow-md">
                                    <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                                </div>
                                <h3 className="font-bold">{item.name}</h3>
                                <p className="text-sm text-gray-500">{item.role}</p>
                                <p className="text-sm mt-2">{item.message}</p>
                                <div className="flex justify-center gap-1 mt-3">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star
                                            key={idx}
                                            size={16}
                                            fill={idx < item.rating ? '#F97316' : 'none'}
                                            stroke="#F97316"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Button - full width absolute */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-[999] bg-white shadow-md rounded-full p-2"
                    style={{ transform: 'translateY(-50%)' }}
                >
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
}
