import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-10 bg-white shadow-lg rounded-lg mt-8 border border-gray-200">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-8 border-b pb-4">About Ontario Health Maps</h1>
      <p className="text-gray-600 text-lg text-center mb-10 leading-relaxed">
        Empowering healthcare professionals, researchers, and policymakers with data-driven insights.
      </p>

      <div className="space-y-12 text-gray-800">
        <section>
          <h2 className="text-3xl font-semibold border-b-2 pb-3 mb-6">🌍 Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Ontario Health Maps provides <strong>real-time health data visualization</strong> to support
            research, policy-making, and healthcare planning. We believe in using <strong>open data</strong> to
            improve healthcare accessibility, transparency, and efficiency.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold border-b-2 pb-3 mb-6">🚀 Key Features</h2>
          <ul className="list-none space-y-4">
            <li className="flex items-center"><span className="mr-2">📍</span><strong>Interactive Health Map</strong> – Visualizing disease prevalence across Ontario.</li>
            <li className="flex items-center"><span className="mr-2">📊</span><strong>Data-Driven Insights</strong> – Providing real-time analytics for research and policy support.</li>
            <li className="flex items-center"><span className="mr-2">🛠️</span><strong>User-Friendly Platform</strong> – Accessible for researchers, healthcare professionals, and the public.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold border-b-2 pb-3 mb-6">📚 Our Data Sources</h2>
          <ul className="list-none space-y-4">
            <li className="flex items-center"><span className="mr-2">🩺</span><strong>Public Health Ontario</strong> – Providing provincial health data and disease trends.</li>
            <li className="flex items-center"><span className="mr-2">📊</span><strong>Census Mapper</strong> – Demographic data for deeper insights into healthcare impact.</li>
            <li className="flex items-center"><span className="mr-2">🔬</span><strong>Open-Source Research Data</strong> – Academic and publicly available datasets.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold border-b-2 pb-3 mb-6">💡 Who Can Benefit?</h2>
          <ul className="list-none space-y-4">
            <li className="flex items-center"><span className="mr-2">📚</span><strong>Researchers & Academics</strong> – Studying healthcare trends.</li>
            <li className="flex items-center"><span className="mr-2">🏥</span><strong>Healthcare Professionals</strong> – Understanding patient demographics.</li>
            <li className="flex items-center"><span className="mr-2">🏛️</span><strong>Policy Makers</strong> – Allocating healthcare resources effectively.</li>
            <li className="flex items-center"><span className="mr-2">👥</span><strong>The General Public</strong> – Staying informed about local health data.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold border-b-2 pb-3 mb-6">📞 Contact Us</h2>
          <p className="text-lg">Have questions or want to collaborate? Reach out to us!</p>
          <p className="mt-2">📧 Email: <a href="mailto:support@ontariohealthmaps.com" className="text-blue-600 hover:underline">support@ontariohealthmaps.com</a></p>
        </section>
      </div>
    </div>
  );
};

export default About;