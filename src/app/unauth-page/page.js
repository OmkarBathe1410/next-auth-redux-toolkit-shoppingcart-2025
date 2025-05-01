import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function UnauthPage() {
  const getSession = await auth();

  // Redirecting the user to the home page if they are already logged in
  if (getSession?.user) redirect("/");

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="text-center p-10 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-4 text-black">
          Please login!
        </h2>
        <p className="text-lg font-semibold bg-red-600 rounded text-white py-2 px-2">
          Access to the content requires you to sign in first
        </p>
      </div>
    </div>
  );
}

export default UnauthPage;
