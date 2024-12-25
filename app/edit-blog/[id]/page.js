"use client";
import { db } from "@/app/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

const EditBlog = ({ params }) => {
  const { id } = params;
  const router = useRouter();

  const [blogData, setBlogData] = useState({
    blogTitle: "",
    blogParagraph: "",
    blogImage: "",
    sections: [{ subheading: "", text: "", image: "" }],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      setLoading(true);
      try {
        const blogRef = doc(db, "blogs", id);
        const blogSnap = await getDoc(blogRef);

        if (blogSnap.exists()) {
          setBlogData(blogSnap.data());
        } else {
          setError("Blog not found. Please check the ID.");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError("Failed to load blog details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({
      ...prev,
      [name]: value.trimStart(),
    }));
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = blogData.sections.map((section, i) =>
      i === index ? { ...section, [field]: value } : section
    );
    setBlogData((prev) => ({
      ...prev,
      sections: updatedSections,
    }));
  };

  const handleAddSection = () => {
    setBlogData((prev) => ({
      ...prev,
      sections: [...prev.sections, { subheading: "", text: "", image: "" }],
    }));
  };

  const handleRemoveSection = (index) => {
    const updatedSections = blogData.sections.filter((_, i) => i !== index);
    setBlogData((prev) => ({
      ...prev,
      sections: updatedSections,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const blogRef = doc(db, "blogs", id);
      await updateDoc(blogRef, blogData);
      alert("Blog updated successfully!");
      router.push("/blogs");
    } catch (error) {
      console.error("Error updating blog:", error);
      setError("An error occurred while updating the blog.");
    }
  };

  if (loading) return <div className="text-center mt-10">Loading blog details...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">Edit Blog</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="blogTitle"
            value={blogData.blogTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Blog Title"
            required
          />
          <textarea
            name="blogParagraph"
            value={blogData.blogParagraph}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Introductory Paragraph"
            required
          />
          <input
            type="url"
            name="blogImage"
            value={blogData.blogImage}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Image URL"
            required
          />
          <div>
            <h3 className="font-semibold text-lg mb-4">Blog Sections</h3>
            {blogData.sections.map((section, index) => (
              <div key={index} className="flex flex-col gap-4 mb-4 p-4 border rounded-lg">
                <input
                  type="text"
                  value={section.subheading}
                  onChange={(e) => handleSectionChange(index, "subheading", e.target.value)}
                  placeholder={`Subheading ${index + 1}`}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
                <textarea
                  value={section.text}
                  onChange={(e) => handleSectionChange(index, "text", e.target.value)}
                  placeholder={`Text for Subheading ${index + 1}`}
                  rows="3"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  value={section.image}
                  onChange={(e) => handleSectionChange(index, "image", e.target.value)}
                  placeholder={`Image URL for Subheading ${index + 1}`}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                {blogData.sections.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveSection(index)}
                    className="flex items-center text-red-500"
                  >
                    <FaTrash className="mr-2" />
                    Remove Section
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddSection}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            >
              Add Section
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-2 rounded-lg"
          >
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
