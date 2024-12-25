"use client";
import { db } from "@/app/firebaseConfig";
import ThemeContext from "@/context/ThemeContext";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

const BlogsList = () => {
  const { theme } = useContext(ThemeContext);
  const [blogs, setBlogs] = useState([]);
  const [hoveredBlogId, setHoveredBlogId] = useState(null); // State for hover effect
  const [error, setError] = useState(false);
  const [isAuth, setIsAuth] = useState(false); // State to track authentication

  const fetchBlogsFromDb = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return blogs;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  };

  const deleteBlog = async (id) => {
    try {
      await deleteDoc(doc(db, "blogs", id));
      setBlogs(blogs.filter((blog) => blog.id !== id)); // Remove the deleted blog from the state
      alert("Blog deleted successfully.");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete the blog.");
    }
  };

  const editBlog = (blogId) => {
    // Redirect to the edit page with the blogId
    window.location.href = `/edit-blog/${blogId}`;
  };

  useEffect(() => {
    // Check if the user is authenticated (you can modify this check to use your preferred authentication method)
    if (typeof window !== "undefined" && localStorage.getItem("isAuth")) {
      setIsAuth(true); // Set the authentication state to true if the user is logged in
    }

    fetchBlogsFromDb()
      .then((blogs) => setBlogs(blogs))
      .catch(() => setError(true));
  }, []);

  return (
    <div className={`w-full px-6 py-12 ${theme ? "bg-[#000] text-white" : ""}`}>
      {/* Header Section */}
      <h1 className="text-center text-4xl font-bold mb-6">Our News</h1>
      <p className="text-center text-gray-600 mb-12">
        Get the latest updates and deeper experience from Palm Care
      </p>

      {/* Blog List */}
      <div className="w-full flex flex-col gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col md:flex-row items-start gap-6 border-b pb-6 group cursor-pointer"
            onMouseEnter={() => setHoveredBlogId(blog.id)}
            onMouseLeave={() => setHoveredBlogId(null)}
          >
            {/* Blog Image */}
            <div className="w-full md:w-[200px] h-[150px] rounded-md overflow-hidden">
              <img
                src={blog.blogImage}
                alt={blog.blogTitle}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              />
            </div>

            {/* Blog Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{blog.blogTitle}</h3>
              <p className="text-gray-600 text-sm mb-2">
                {blog.blogParagraph.slice(0, 120)}...
              </p>
              <a
                href={`/blogs/${blog.id}`}
                className="text-primary font-medium text-sm"
              >
                View More
              </a>

              {/* Edit and Delete Buttons (Only for authenticated users) */}
              {isAuth && (
                <div className="flex gap-4 mt-4">
                  <button
                    className="py-1 px-3 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                    onClick={() => editBlog(blog.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="py-1 px-3 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                    onClick={() => deleteBlog(blog.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-center text-red-500 mt-6">
          <h2>Something went wrong! Unable to fetch blogs.</h2>
        </div>
      )}

      {/* No Blogs Message */}
      {blogs.length === 0 && !error && (
        <div className="text-center text-gray-600 mt-6">
          <h2>No Blogs Found</h2>
        </div>
      )}
    </div>
  );
};

export default BlogsList;
