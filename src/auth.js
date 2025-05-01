// Import NextAuth for authentication handling
import NextAuth from "next-auth";
// Import GitHub provider to enable GitHub login
import Github from "next-auth/providers/github";

// Initialize NextAuth and destructure useful functions and handlers
export const {
  handlers: { GET, POST }, // API route handlers for GET and POST requests (required for NextAuth API routes)
  auth, // Middleware/utility to access the current authenticated session
  signIn, // Function to programmatically trigger sign-in
  signOut, // Function to programmatically trigger sign-out
} = NextAuth({
  providers: [Github], // Specify GitHub as the authentication provider
});
