import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Card } from "@/components/common/Card";
import Pill from "@/components/common/Pill";
import Button from "@/components/common/Button";
import { IMAGES } from "@/constants/images";
import { PROPERTYLISTINGSAMPLE, FILTERS } from "@/constants";

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const router = useRouter();

  // Filter properties based on category
  const filteredListings = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter(property => property.category.includes(activeFilter))
    : PROPERTYLISTINGSAMPLE;

  // Navigate to property detail page
  const goToProperty = (name: string) => {
    router.push(`/property/${encodeURIComponent(name)}`);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[75vh] pt-12 flex items-center justify-center">
        <Image src={IMAGES.HERO_BG} alt="Hero background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Find your favorite place here!
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-6">
            The best prices for over 2 million properties worldwide.
          </p>
          <Button
            label="Top level button"
            onClick={() => alert("Top-level button clicked")}
            className="bg-transparent border border-2 border-indigo-600 text-white hover:bg-indigo-600/90"
          />
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-3">
        {FILTERS.map(filter => (
          <Pill
            key={filter}
            label={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
          />
        ))}
      </section>

      {/* Listings Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredListings.map(property => (
            <Card
              key={property.name}
              id={String(property.name)}
              title={property.name}
              description={`$${property.price} / night • ${property.address.city}, ${property.address.country}`}
              imageUrl={property.image}
              onViewDetails={() => goToProperty(property.name)} // Pass callback to Card
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
