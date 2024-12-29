"use client";
import { db } from "@/app/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { ClipLoader } from "react-spinners";

const BlogDetails = () => {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchBlogFromDb = async () => {
    try {
      const docRef = doc(db, "blogs", params?.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("Blog not found");
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
      setError(error);
      throw error;
    }
  };
  useEffect(() => {
    if (!params?.id) return;

    fetchBlogFromDb()
      .then((blogData) => {
        setBlog(blogData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [params?.id]);

  if (loading) return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
  if (error) return <div>Error loading blog: {error.message}</div>;

  return (
    <div className="w-full px-4 md:px-5 lg:px-36 xl:px-56 2xl:px-72 py-10 flex flex-col items-start gap-4">
      {/* Back Button */}
      <div className="w-full mb-4">
        <Link
          href="/blogs"
          className="text-gray-500 text-[15px] flex items-center gap-1"
        >
          <FiArrowLeft className="text-xl" />
          Back
        </Link>
      </div>

      {/* Blog Content */}
      <div className="w-full flex flex-col items-start gap-6">
        {/* Blog Image */}
        {blog?.blogImage && (
          <img
            src={blog.blogImage}
            alt="Blog Main Image"
            className="w-full h-[60vh] object-cover rounded-md"
          />
        )}

        {/* Blog Title */}
        <h1 className="font-bold text-3xl text-gray-800">
          {blog?.blogTitle}
        </h1>

        {/* Blog Paragraph */}
        <p className="text-[16px] md:text-[14px] lg:text-[15px] leading-7 md:leading-6 lg:leading-7 text-gray-700 whitespace-pre-line max-w-full break-words px-4">
          {blog?.blogParagraph}
        </p>

        {/* Blog Sections */}
        {blog?.sections?.length > 0 && (
          <div className="w-full flex flex-col gap-6">
            {blog.sections.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                {/* Section Image */}
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.subheading}
                    className="w-full h-[40vh] object-cover rounded-md"
                  />
                )}

                {/* Section Subheading */}
                <div className="bg-gray-200 px-4 py-2 text-lg font-semibold text-gray-800">
                  {section.subheading}
                </div>

                {/* Section Text */}
                <p className="text-[15px] leading-6 text-gray-700">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
