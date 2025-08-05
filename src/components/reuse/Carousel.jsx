import React, { useState, useEffect } from 'react';

function Carousel() {
    const reviews = [
        {
            name: "A M",
            star: 5,
            comment: "My massage was great. Naza was excellent very detailed and professional. I will be back."
        },
        {
            name: "Jo Rocco",
            star: 5,
            comment: "Great staff. My masseuse, Fred, was wonderful and calming. I felt great."
        },
        {
            name: "Heather Ortutay",
            star: 5,
            comment: "Absolutely amazing each and every time!"
        }
    ];

    const [currentClient, setCurrentClient] = useState(reviews[0]);
    const [currentIndex, setIndex] = useState(0);

    const nextArrow = () => {
        const newIndex = (currentIndex + 1) % reviews.length;
        setIndex(newIndex);
        setCurrentClient(reviews[newIndex]);
    };

    const prevArrow = () => {
        const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        setIndex(newIndex);
        setCurrentClient(reviews[newIndex]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextArrow();
        }, 10000); // 5 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full max-w-xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Reviews</h2>
            {/* Carousel container */}
            <div className="relative w-full overflow-hidden bg-white shadow-lg rounded-xl p-8">
                {/* Testimonial content */}
                <div className="flex flex-col items-center text-center text-slate-800 space-y-4 transition-opacity duration-500 ease-in-out">

                    {/* Comment */}
                    <p className="text-lg text-gray-700 italic max-w-md">
                        "{currentClient.comment}"
                    </p>

                    {/* Name */}
                    <div className="text-xl font-bold text-gray-900">- {currentClient.name}</div>

                    {/* Stars */}
                    <div className="text-yellow-400 text-xl">
                        {"★".repeat(currentClient.star)}{"☆".repeat(5 - currentClient.star)}
                    </div>
                </div>

                {/* Navigation arrows */}
                <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white border rounded-full shadow hover:bg-gray-100"
                    onClick={prevArrow}
                    aria-label="Previous"
                >
                    ←
                </button>
                <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white border rounded-full shadow hover:bg-gray-100"
                    onClick={nextArrow}
                    aria-label="Next"
                >
                    →
                </button>
            </div>
        </div>
    );
}

export default Carousel;
