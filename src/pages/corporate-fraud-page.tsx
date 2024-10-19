import React from 'react';

const CorporateFraudPage = () => {
  return (
    <div className="corporate-fraud-page bg-white">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          <img src="/dcg-logo.jpeg" alt="DCG Logo" className="h-16" />
          <div className="nav-items space-x-6">
            <span className="text-gray-700 hover:text-black cursor-pointer">Services</span>
            <span className="text-gray-700 hover:text-black cursor-pointer">Industries</span>
            <span className="text-gray-700 hover:text-black cursor-pointer">Insights</span>
            <span className="text-gray-700 hover:text-black cursor-pointer">Careers</span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" className="px-3 py-1 border rounded-md" />
          </div>
          <div className="user-actions flex items-center space-x-4">
            {/* Language selector, phone, and user icon */}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <div className="hero-image bg-black h-64 w-full mb-8">
          {/* Brain and digital image */}
        </div>

        <div className="flex">
          <section className="service-description w-3/4 pr-8">
            <h1 className="text-3xl font-bold mb-2">Fraud and Risk Forensic Investigations</h1>
            <h2 className="text-xl text-gray-600 mb-4">Consulting services to conduct an investigation</h2>
            <p className="text-gray-700 mb-4">
              When fraud or risk is suspected, .
            </p>
            <div className="social-icons flex space-x-2">
              {/* Social icons */}
            </div>

            <section className="investigation-lifecycle mt-8">
              <h2 className="text-2xl font-semibold mb-4">Comprehensive Fraud Detection</h2>
              <p className="mb-4">In today's complex business environment, the threat of fraud is ever-present. Our expert team leverages cutting-edge technologies and proven methodologies to identify and mitigate fraudulent activities before they impact your bottom line. We specialize in:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Advanced Fraud Detection Systems: Implementing state-of-the-art systems that continuously monitor transactions and activities, flagging potential fraud in real-time.</li>
                <li>Data Analytics and Machine Learning: Utilizing sophisticated algorithms and data analytics to detect anomalies and patterns indicative of fraudulent behavior.</li>
              </ul>
              {/* More detailed description for each phase */}
            </section>

            <section className="investigation-lifecycle mt-8">
              <h2 className="text-2xl font-semibold mb-4">Risk Management and Mitigation</h2>
              <p className="mb-4">Understanding and managing risk is crucial to the success and longevity of any business. Our risk management services are designed to provide a thorough analysis and proactive solutions to safeguard your operations. We offer:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Risk Assessment: Comprehensive evaluation of your business processes to identify potential risks and vulnerabilities.</li>
                <li>Risk Mitigation Strategies: Developing and implementing tailored strategies to reduce risks and protect your assets.</li>
              </ul>
              {/* More detailed description for each phase */}
            </section>

            <section className="investigation-lifecycle mt-8">
              <h2 className="text-2xl font-semibold mb-4">Customized Solutions</h2>
              <p className="mb-4">Every business is unique, and so are its challenges. We offer customized solutions tailored to your specific needs and industry requirements. Our approach includes:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Personalized Consultations: Working closely with your team to understand your unique challenges and develop bespoke solutions.</li>
                <li>Industry-Specific Expertise: Leveraging our deep industry knowledge to provide insights and strategies that are relevant to your business.</li>
                <li>Ongoing Support and Training: Offering continuous support and training to ensure your team is equipped to handle fraud and risk management effectively.</li>
              </ul>
              {/* More detailed description for each phase */}
            </section>

            <section className="investigation-lifecycle mt-8">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2><ul className="list-disc pl-5 mb-4">
                <li>Expertise and Experience: Our team comprises seasoned professionals with extensive experience in fraud detection and risk management.</li>
                <li>Innovative Technologies: We use the latest technologies and methodologies to stay ahead of emerging threats.</li>
              </ul>
              {/* More detailed description for each phase */}
            </section>
          </section>

          <aside className="actions-sidebar w-1/4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <button className="w-full bg-green-500 text-white py-2 px-4 rounded mb-2 hover:bg-green-600">Contact us</button>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded mb-2 hover:bg-blue-600">Submit RFP</button>
              <button className="w-full bg-gray-500 text-white py-2 px-4 rounded mb-2 hover:bg-gray-600">View our perspectives</button>
              <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded mb-2 hover:bg-yellow-600">Subscribe to email</button>
            </div>

            <div className="explore-content mt-8">
              <h3 className="text-lg font-semibold mb-2">Explore content</h3>
              <ul className="text-blue-500">
                <li className="mb-1 hover:underline cursor-pointer">The lifecycle of an investigation</li>
                <li className="mb-1 hover:underline cursor-pointer">Efficiently navigate the process</li>
                <li className="mb-1 hover:underline cursor-pointer">Explore more</li>
                <li className="mb-1 hover:underline cursor-pointer">Join the conversation</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CorporateFraudPage;