'use client';

import { db } from "@/app/firebaseConfig";
import ProtectedRoute from "@/components/Global/ProtectedRoute";
import { collection, addDoc } from "firebase/firestore";
import Link from "next/link";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from 'next/navigation';

const SectionInput = ({ index, section, onChange, onRemove }) => (
  <div className="flex flex-col gap-4 mb-4 p-4 border border-gray-300 rounded-lg">
    <input
      type="text"
      placeholder={`Subheading ${index + 1}`}
      value={section.subheading}
      onChange={(e) => onChange(index, "subheading", e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      required
    />
    <textarea
      placeholder={`Text for Subheading ${index + 1}`}
      value={section.text}
      onChange={(e) => onChange(index, "text", e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      rows="3"
      required
    ></textarea>
    <input
      type="text"
      placeholder={`Image URL for Subheading ${index + 1}`}
      value={section.image}
      onChange={(e) => onChange(index, "image", e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
    />
    {index >= 0 && (
      <button
        type="button"
        onClick={() => onRemove(index)}
        className="flex items-center text-red-500 hover:text-red-700 focus:outline-none"
      >
        <FaTrash className="mr-2" />
        Remove Section
      </button>
    )}
  </div>
);

const CreateBlogPost = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogParagraph, setBlogParagraph] = useState("");
  const [sections, setSections] = useState([{ subheading: "", text: "", image: "" }]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleAddSection = () => {
    setSections((prevSections) => [...prevSections, { subheading: "", text: "", image: "" }]);
  };

  const handleRemoveSection = (index) => {
    setSections((prevSections) => prevSections.filter((_, i) => i !== index));
  };

  const handleSectionChange = (index, field, value) => {
    setSections((prevSections) =>
      prevSections.map((section, i) =>
        i === index ? { ...section, [field]: value } : section
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newBlog = { blogTitle, blogImage, blogParagraph, sections };

    try {
      await addDoc(collection(db, "blogs"), newBlog);
      setLoading(false);
      setSuccess(true);
      console.log("Blog created successfully!");
      setBlogTitle("");
      setBlogImage("");
      setBlogParagraph("");
      setSections([{ subheading: "", text: "", image: "" }]);
    } catch (error) {
      console.error("Error adding blog:", error);
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-6">
          <div className="w-full mb-4">
            <Link href="/blogs" className="text-gray-500 text-[15px] flex items-center gap-1">
              <FiArrowLeft className="text-xl" />
              Back
            </Link>
          </div>
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create New Blog Post</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Blog Image */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Blog Image</h3>
              <input
                type="text"
                placeholder="Image URL"
                value={blogImage}
                onChange={(e) => setBlogImage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Blog Title */}
            <input
              type="text"
              placeholder="Blog Title"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            {/* Blog Paragraph */}
            <textarea
              placeholder="Introductory Paragraph"
              value={blogParagraph}
              onChange={(e) => setBlogParagraph(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
            {/* Sections */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Blog Sections</h3>
              {sections.map((section, index) => (
                <SectionInput
                  key={index}
                  index={index}
                  section={section}
                  onChange={handleSectionChange}
                  onRemove={handleRemoveSection}
                />
              ))}
              <button
                type="button"
                onClick={handleAddSection}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Add Section
              </button>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-400"}`}
            >
              {loading ? "Creating..." : "Create Blog"}
            </button>
            {success && (
              <div className="text-green-500 font-semibold text-center">
                Blog created successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default CreateBlogPost;
