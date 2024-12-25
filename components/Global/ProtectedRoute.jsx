import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // useRouter for redirection

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const isAuthenticated = typeof window !== "undefined" && localStorage.getItem("isAuth");

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login"); // Redirect to login page if not authenticated
        }
    }, [isAuthenticated, router]);

    // If not authenticated, return null to prevent rendering the children
    if (!isAuthenticated) {
        return null;
    }

    return children; // Allow access to the protected route
};

export default ProtectedRoute;
