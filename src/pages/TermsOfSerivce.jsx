import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Terms of Service
      </h1>
      <p className="text-gray-600 text-center">Effective Date: 03/03/2025</p>
      <p className="text-gray-600 text-center mb-6">Last Updated: 03/03/2025</p>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">1. Introduction</h2>
          <p>
            Welcome to Ontario Health Maps. By using our services, you agree to
            comply with these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">2. User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Users must provide accurate registration information.</li>
            <li>Users must not misuse health data or violate privacy laws.</li>
            <li>Unauthorized redistribution of data is prohibited.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">3. Data Usage Restrictions</h2>
          <p>Data provided is for research and educational purposes only.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">4. Liability Limitation</h2>
          <p>
            Ontario Health Maps is not responsible for any decisions made based
            on the provided health data.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
