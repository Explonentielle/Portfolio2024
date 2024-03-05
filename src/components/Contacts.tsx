import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const CommentSection = () => {

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");

  const comments = [
    { id: 1, text: "Great work!", rating: 5, timestamp: "2024-02-28T10:30:00Z", name: "John Doe" },
  ];

  const averageRating =
    comments.reduce((acc, comment) => acc + comment.rating, 0) / comments.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    setComment("");
    setRating(0);
    setName("");
  };

  return (
    <section id="contact" >
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start">


        <div className="w-full md:w-1/2 px-4">
          <h3 className="text-2xl font-bold mb-2 text-white">Referral</h3>
          <div className="bg-card p-4 rounded-md">

            <ul className="space-y-4">
              {comments.slice(-4).map((c) => (
                <li key={c.id} className="flex items-center">
                  <div className="flex flex-col">
                    <div className="flex items-center mt-1">
                      <span className="text-white">{new Date(c.timestamp).toLocaleDateString()}</span>
                      <span className="text-white ml-2">{c.name}</span>
                    </div>
                    <span className="hours-font">{c.text}</span>
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
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4  mt-10">

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name or Company name"
              className="border border-gray-300 rounded-md p-2"
              required />

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
                  className={`text-2xl cursor-pointer ${
                    index < rating ? "text-yellow-500" : "text-gray-300"
                  }`}
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

  </section>
  );
};

export default CommentSection;
