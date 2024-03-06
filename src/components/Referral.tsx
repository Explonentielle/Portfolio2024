import React, { useState } from "react";
import { FaStar, FaChevronLeft } from "react-icons/fa";
import ReferralSumary from "./ReferralSumary";



const Referral = () => {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [name, setName] = useState("");
    const [showReferral, setShowReferral] = useState(false);

    const comments = [
        { id: 1, text: "Working with ALexandre has been a pleasure - their attention to detail and collaborative spirit truly shine. ALexandre brings great value to any project.", rating: 5, timestamp: "2024-02-28T10:30:00Z", name: "Malik - Uguest" },
        { id: 1, text: "I highly recommend Alexandre for their outstanding professionalism and dedication!", rating: 5, timestamp: "2024-03-02T10:30:00Z", name: " ATelier S41" },
      ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setComment("");
        setRating(0);
        setName("");
    };

    const handleToggleReferral = () => {
        setShowReferral(!showReferral);
    };

    return (

        <div className={`referral-container ${showReferral ? "" : "referral"}`}>

            <button className={`toggle-button ${showReferral ? "buttonPos" : ""}`} onClick={handleToggleReferral}>
                <FaChevronLeft className={`chevron-icon ${showReferral ? "rotate-icon" : ""}`} />
                <p>add referral</p>
            </button>

            <div className={`referral-content p-4 rounded-xl ${showReferral ? "show" : ""}`}>
                <div className="md:flex md:justify-center  md:items-start">

                    <div className="w-full md:w-1/2 px-4">
                        <h3 className="text-2xl font-bold mb-2 text-white">Latest reviews</h3>
                       <ReferralSumary comments={comments} background="bg-submi" />
                    </div>

                    <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-10">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name or Company name"
                                className="border border-gray-300 rounded-md p-2"
                                required
                            />
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="..."
                                rows={4}
                                className="border border-gray-300 rounded-md p-2"
                                required
                            ></textarea>
                            <div className="flex items-center space-x-2">
                                <p className="font-bold text-white">Rating:</p>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className={`text-2xl cursor-pointer ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
                                        onClick={() => setRating(index + 1)}
                                    />
                                ))}
                            </div>
                            <button type="submit" className="bg-submit text-white py-2 rounded-md hover:bg-opacity-60">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Referral;
