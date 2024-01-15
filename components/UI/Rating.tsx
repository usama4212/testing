import React from "react";

const RatingStars = ({ rating }: any) => {
  // Calculate the number of filled and empty stars
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  // Create an array of star components based on the rating
  const stars = Array.from({ length: filledStars }, (_, index) => (
    <StarIcon key={index} filled />
  )).concat(
    Array.from({ length: emptyStars }, (_, index) => (
      <StarIcon key={filledStars + index} filled={false} />
    ))
  );

  return <div className="flex">{stars}</div>;
};

const StarIcon = ({ filled }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="inline"
      fill={filled ? "gold" : "none"}
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default RatingStars;
