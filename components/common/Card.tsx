import React from "react";
import  Button  from "./Button";
import { CardProps } from "@/interfaces/index";
const DEFAULT_CARD_IMAGE = "/images/placeholder.jpg";


export const Card: React.FC<CardProps & { onViewDetails?: () => void }> = ({
  id,
  title,
  description,
  imageUrl,
  onViewDetails
}) => {
  const imgSrc = imageUrl || DEFAULT_CARD_IMAGE;
  return (
    <article className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition max-w-sm">
      <img src={imgSrc} alt={title} className="w-full h-44 object-cover rounded-md mb-3" />
      <h3 className="text-lg text-black font-semibold">{title}</h3>
      {description && <p className="text-gray-600 mt-1 mb-3">{description}</p>}
      <div className="flex gap-3">
        <Button
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
          label="Book Now"
          onClick={() => alert(`Booking clicked for: ${title}`)}
        />
        {onViewDetails && (
          <Button
            label="View Details"
            onClick={onViewDetails}
            className="bg-gray-200 text-black hover:bg-gray-300"
          />
        )}
      </div>
    </article>
  );
};
