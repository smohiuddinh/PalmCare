"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithGoogle } from "../api/auth";
import { toast } from "react-toastify";
import Head from "next/head";

import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      toast.success("Admin Signing in Succesfully!");
      router.push("/");
    } catch (error) {
      console.error("Sign-in error:", error);
      toast.error("Failed to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Palm Care</title>
        <meta name="description" content="Sign in to access Palm Care's exclusive features." />
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h1 className="text-2xl font-semibold text-gray-700 mb-4">
            Welcome to Palm Care
          </h1>
          <p className="text-gray-500 mb-6">
            Sign in with Google to access exclusive features.
          </p>
          <button
            aria-label="Sign in with Google"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
            onClick={handleSignIn}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in with Google"}
          </button>
        </div>
      </div>
    </>
  );
}
