"use client";

import { Button } from "@/components/ui/button"; // Import the reusable Button component
import { Card, CardContent, CardTitle } from "@/components/ui/card"; // Import Card UI components
import { useRouter } from "next/navigation"; // Import router to navigate on button click

function ProductCard({ item }) {
  const router = useRouter(); // Initialize router

  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="w-full aspect-w-16 aspect-h-8 lg:h-60 overflow-hidden rounded-t-lg">
          <img
            src={item?.thumbnail}
            alt={item?.title}
            className="h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="p-4">
          <CardTitle className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
            {item?.title}
          </CardTitle>

          <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
            <p className="text-lg font-extrabold text-green-600">
              ₹ {Math.round(item?.price)}
            </p>

            {/* Details Button */}
            <Button
              onClick={() => router.push(`/${item?.id}`)}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 text-sm cursor-pointer"
            >
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
