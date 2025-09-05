// components/Contact.tsx (or wherever your component is located)

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// 1. Import toast from react-toastify
import { toast } from "react-toastify";

// Define the Zod schema for form validation that should match the backend schema.
const contactFormSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

// Infer the TypeScript type from the schema
type ContactFormInputs = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // 3. On success, show a success toast
      toast.success("Message sent successfully!");
      reset(); // Clear the form fields
    } catch (error) {
      console.error("Submission error:", error);
      // 3. On error, show an error toast
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="w-full mx-auto p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-400 mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-700 dark:text-slate-400">
          Whether it's a freelance gig, a collaboration, or a full-time
          opportunity, or want to say hi? I'm always excited to connect with
          people who love building meaningful things. Drop a message, and I'll
          get back to you as soon as I can!
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex gap-6 justify-center">
          {/* Full Name Field */}
          <div>
            <input
              id="fullName"
              placeholder="Your Full Name"
              type="text"
              {...register("fullName")}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div className="flex justify-center">
          <textarea
            id="message"
            placeholder="Enter The Message..."
            rows={3}
            {...register("message")}
            className="w-full max-w-2xl px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-700 rounded-md text-white font-semibold transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
