// Import the necessary components and libraries
"use client";

import Header from "@/components/header"; // Import Header component
import store from "@/store"; // Import Redux store
import { Provider } from "react-redux"; // Import Redux's Provider to pass the store down the component tree

// Define ReduxProvider component that wraps children components with the Redux Provider
export default function ReduxProvider({ children, getSession }) {
  return (
    // Wrap the app with the Redux Provider to allow access to the store
    <Provider store={store}>
      {/* Render the Header component and pass the getSession prop */}
      <Header getSession={getSession} />
      {/* Render any child components passed to ReduxProvider */}
      {children}
    </Provider>
  );
}
