import { fetchProductDetails } from "@/actions";
import { auth } from "@/auth";
import AddToCartButton from "@/components/add-to-cart-button";
import { redirect } from "next/navigation";

async function ProductDetails({ params }) {
  const getSession = await auth();
  if (!getSession?.user) redirect("/unauth-page");

  const getProductDetails = await fetchProductDetails(params.details); // params is used directly

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-6">
        {/* Left Section - Images */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6 sticky top-4">
          <img
            src={getProductDetails?.thumbnail}
            alt={getProductDetails?.title}
            className="w-full h-100 object-fit rounded-md hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {getProductDetails?.images.map((imageItem, index) => (
              <img
                key={index}
                src={imageItem}
                alt={`Product image ${index + 1}`}
                className="w-20 h-20 object-cover rounded-md cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {getProductDetails?.title}
          </h2>

          <p className="text-2xl font-bold text-green-600">
            ₹ {Math.round(getProductDetails?.price)}
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            {getProductDetails?.description}
          </p>

          <div className="pt-4">
            <AddToCartButton productItem={getProductDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
