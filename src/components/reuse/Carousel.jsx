import React, { useState } from 'react';

function Carousel() {

    const nextArrow = () => {
        const newIndex = (currentIndex + 1) % reviews.length;
        setIndex(newIndex);
        setCurrentClient(reviews[newIndex]);
    };

    const prevArrow = () => {

    }



    const reviews = [
        {
            name: "test",
            star: 5,
            comment: "This was the gratest place in the world"
        },
        {
            name: "test2",
            star: 5,
            comment: "This was the gratest place in the world"
        },
        {
            name: "test3",
            star: 5,
            comment: "This was the gratest place in the world"
        }
    ]
    const [currentClient, setCurrentClient] = useState(reviews[0]);
    const [currentIndex, setIndex] = useState(0);

    return(
        <div className="relative w-full max-w-xl mx-auto">
            {/* Carousel container */}
            <div className='relative w-full max-w-xl mx-auto overflow-hidden bg-white shadow-md rounded-lg p-6'>
                {/* One testimonial at a time */}
                <div className='absolute content-center text-center text-slate-800'>
                    <div className='text-center pl-24'>
                        {currentClient.name}
                    </div>
                </div>
                {/* Navigation arrows */}
                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200" onClick={nextArrow}>
                    ←
                </button>
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200">
                    →
                </button>
            </div>
        </div>
    );
}

export default Carousel;