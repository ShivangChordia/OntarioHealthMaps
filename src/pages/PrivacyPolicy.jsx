import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Ontario Health Maps - Privacy Policy
      </h1>
      <p className="text-gray-600 text-center">Effective Date: 03/03/2025</p>
      <p className="text-gray-600 text-center mb-6">Last Updated: 03/03/2025</p>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            1. Introduction
          </h2>
          <p>
            Ontario Health Maps ("we," "our," or "us") values your privacy. This
            Privacy Policy explains how we collect, use, and protect your
            personal information in compliance with the Personal Information
            Protection and Electronic Documents Act (PIPEDA).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            2. Information We Collect
          </h2>
          <h3 className="text-lg font-semibold mt-2">A. Voluntarily Provided Information</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>First Name, Last Name, Email, Password</li>
            <li>Healthcare Organization, Professional Role</li>
            <li>Access Request Details</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">B. Automatically Collected Information</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address, browser type, device information, pages visited</li>
            <li>Usage data and engagement patterns</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To process registration and access requests</li>
            <li>To verify professional background</li>
            <li>To improve security and user experience</li>
            <li>To respond to support requests</li>
            <li>To comply with legal requirements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            4. Data Protection and Security
          </h2>
          <p>
            We implement reasonable security measures to protect against
            unauthorized access, data breaches, and loss. Sensitive data like
            passwords are encrypted before storage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            5. Retention of Data
          </h2>
          <p>
            We keep your data only as long as necessary for providing services,
            verifying requests, and fulfilling legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            6. Your Rights Under PIPEDA
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access to your stored personal data</li>
            <li>Request for correction of inaccurate information</li>
            <li>Request for deletion (except where legally required)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            7. Contact Us
          </h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email: <a href="mailto:support@ontariohealthmaps.com" className="text-blue-600 hover:underline">support@ontariohealthmaps.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
