import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>
      <p className="text-gray-600 text-center">We're here to help!</p>

      <div className="space-y-6 text-gray-700 mt-6">
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Support</h2>
          <p>
            If you have any questions, please contact our support team at:
          </p>
          <p>
            📧 Email: {" "}
            <a href="mailto:support@ontariohealthmaps.com" className="text-blue-600 hover:underline">
              support@ontariohealthmaps.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Business Hours</h2>
          <p>Monday – Friday: 9 AM – 5 PM EST</p>
          <p>Saturday – Sunday: Closed</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Address</h2>
          <p>Ontario Health Maps Headquarters</p>
          <p>123 Health Data Avenue, Toronto, ON, Canada</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Contact Form</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border rounded-md" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea className="w-full p-2 border rounded-md" rows="4" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;