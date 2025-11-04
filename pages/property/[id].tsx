import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p className="text-center py-20">Property not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 max-w-[1200px] mx-auto">
      {/* Responsive two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-black">
        {/* Main content: Property details and reviews */}
        <section className="lg:col-span-2 space-y-8">
          <PropertyDetail property={property} />
          <ReviewSection reviews={property.reviews || []} />
        </section>

        {/* Sidebar: Booking */}
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <BookingSection price={property.price} />
          </div>
        </aside>
      </div>
    </div>
  );
}
