"use client";

import Link from "next/link"; // Import Link for navigation between pages
import { Button } from "../ui/button"; // Import the custom Button component
import { loginAction, logoutAction } from "@/actions"; // Import login and logout actions

// Header component that displays the navigation menu and login/logout button
function Header({ getSession }) {
  console.log(getSession, "getSession in header"); // Log session details to the console for debugging

  // Function to handle logout
  async function handleOauthSignOut() {
    await logoutAction(); // Call logout action to log the user out
  }

  // Function to handle login
  async function handleOauthSignIn() {
    await loginAction(); // Call login action to log the user in
  }

  return (
    <header className="flex shadow-md py-4 px-6 bg-gray-900 text-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        {/* Logo/Branding */}
        <Link
          href={"/"}
          className="text-2xl font-bold text-white hover:text-gray-300"
        >
          Shopping Cart
        </Link>
      </div>
      <ul className="flex gap-6 items-center justify-center mr-10">
        {/* Navigation links */}
        <li className="text-lg font-semibold hover:text-gray-300">
          <Link href={"/"}>Products</Link>
        </li>
        <li className="text-lg font-semibold hover:text-gray-300">
          <Link href={"/cart"}>Cart</Link>
        </li>
      </ul>
      <div className="flex space-x-3">
        {/* Login/Logout button */}
        <form
          action={getSession?.user ? handleOauthSignOut : handleOauthSignIn}
        >
          <Button
            type="submit"
            className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
          >
            {getSession?.user ? "Logout" : "Login"}
          </Button>
        </form>
      </div>
    </header>
  );
}

export default Header;
