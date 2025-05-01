// Import necessary components and functions
import Loading from "@/app/loading"; // Import the Loading component to display during lazy loading
import { auth } from "@/auth"; // Import the auth function to get user session details
import { Suspense } from "react"; // Import Suspense for handling loading states during async rendering

const { default: ReduxProvider } = require("@/provider"); // Import the ReduxProvider to wrap the app with Redux store

// Define the CommonLayout component, which wraps children components with ReduxProvider and Suspense
async function CommonLayout({ children }) {
  const getSession = await auth(); // Get the session details (check if the user is logged in)

  return (
    // Wrap the app with ReduxProvider and pass session data, then wrap children with Suspense for async loading
    <ReduxProvider getSession={getSession}>
      <Suspense fallback={<Loading />}>{children}</Suspense>{" "}
      {/* Show Loading component until the children are fully loaded */}
    </ReduxProvider>
  );
}

export default CommonLayout; // Export the CommonLayout component for use in the app
