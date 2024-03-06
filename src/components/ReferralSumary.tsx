import React from 'react'
import { FaStar } from "react-icons/fa";

const ReferralSumary = ({ comments, background }) => {

    const averageRating =
        comments.reduce((acc, comment) => acc + comment.rating, 0) / comments.length;

  return (
    <div className={`bg-opacity-85 flex p-4 rounded-md ${background}`}>
    <ul className="space-y-4 w-3/4">
        {comments.slice(-4).map((c) => (
            <li key={c.id} className="flex items-center">
                <div className="flex flex-col">
                    <div className="flex items-center mt-1">
                        <span className="text-white font-extrabold">{new Date(c.timestamp).toLocaleDateString()}</span>
                        <span className="text-white font-extrabold  ml-2">{c.name}</span>
                    </div>
                    <hr className="w-2/3" />
                    <span className="hours-font font-light">{c.text}</span>
                </div>
            </li>
        ))}
    </ul>
    <div className="mt-4">
        <p className="font-extrabold text-xl text-white">Average Rating:</p>
        <div className="flex items-center">
            {Array.from({ length: Math.floor(averageRating) }).map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
            ))}
            <span className="ml-2 text-xl font-bold hours-font">{averageRating.toFixed(1)}</span>
        </div>
        <a className='text-white underline'>Read more</a>
    </div>
</div>
  )
}

export default ReferralSumary