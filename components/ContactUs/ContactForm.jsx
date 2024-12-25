"use client";
import ThemeContext from "@/context/ThemeContext";
import React, { useContext, useRef } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 25) {
    errors.name = "Must be 25 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.subject) {
    errors.subject = "Required";
  } else if (values.subject.length < 5) {
    errors.subject = "Must be 5 characters or more";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length < 10) {
    errors.message = "Must be 10 characters or more";
  }

  return errors;
};

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      emailjs
        .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
          publicKey: "YOUR_PUBLIC_KEY",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      resetForm();
    },
  });

  return (
    <section
      className={`w-full py-12 lg:py-20 horizontal-padding flex items-center justify-center ${
        theme && "bg-[#000] text-white"
      }`}
    >
      {/* <div className="w-full lg:w-[45%]"></div> */}
      <form
        onSubmit={formik.handleSubmit}
        className={`w-full lg:w-[55%] p-5 lg:p-10 xl:p-14 flex flex-col gap-5 ${
          theme ? "bg-[#1c1c1c]" : "bg-yellow-50"
        }`}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className={`w-full p-3.5 text-sm outline-none rounded-2xl ${
                theme ? "bg-[#2d2d2d]" : "bg-white"
              }`}
              placeholder="Enter Your Name"
            />
            {formik.errors.name ? (
              <div className="text-sm text-red-500">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`w-full p-3.5 text-sm outline-none rounded-2xl ${
                theme ? "bg-[#2d2d2d]" : "bg-white"
              }`}
              placeholder="Your Email Address"
            />
            {formik.errors.email ? (
              <div className="text-sm text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col items-start gap-1">
          <label htmlFor="subject" className="text-sm font-medium">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            onChange={formik.handleChange}
            value={formik.values.subject}
            className={`w-full p-3.5 text-sm outline-none rounded-2xl ${
              theme ? "bg-[#2d2d2d]" : "bg-white"
            }`}
            placeholder="Enter Your Subject"
          />
          {formik.errors.subject ? (
            <div className="text-sm text-red-500">{formik.errors.subject}</div>
          ) : null}
        </div>

        <div className="flex flex-col items-start gap-1">
          <label htmlFor="message" className="text-sm font-medium">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            className={`w-full p-3.5 text-sm outline-none rounded-2xl ${
              theme ? "bg-[#2d2d2d]" : "bg-white"
            }`}
            placeholder="Enter Your Message Here..."
            rows={8}
          ></textarea>
          {formik.errors.message ? (
            <div className="text-sm text-red-500">{formik.errors.message}</div>
          ) : null}
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="relative overflow-hidden bg-primary text-white font-medium py-2 px-4 rounded-full w-full block h-12"
          >
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-[0.4s] ease-in-out transform button-text1">
              Submit
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-[0.4s] ease-in-out transform button-text2">
              Join the Cause
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
