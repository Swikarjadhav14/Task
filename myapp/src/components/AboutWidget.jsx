import React, { useState } from "react";

const AboutWidget = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="p-6 text-lg leading-relaxed text-gray-300">
            <h2 className="text-2xl font-semibold mb-4 text-teal-400">
              About Me
            </h2>
            <p className="mb-4">
              Hello! I'm Dave, a sales representative at Salesforce with over 3 years of experience. I specialize in helping businesses leverage cloud technologies to optimize their operations.
            </p>
            <p>
              I was born and raised in Albany, NY, and have been living in Santa Carla for the past 10 years with my wife Tiffany and our twin daughters, Emma and Ella. Outside of work, I enjoy hiking, photography, and experimenting with new tech gadgets.
            </p>
          </div>
        );
      case "experiences":
        return (
          <div className="p-6 text-lg leading-relaxed text-gray-300">
            <h2 className="text-2xl font-semibold mb-4 text-teal-400">
              Experiences
            </h2>
            <ul className="space-y-4">
              <li className="bg-gray-700 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Salesforce - Sales Representative</h3>
                <p>
                  Successfully closed deals with major clients, resulting in a 25% increase in revenue. Led a team to develop customized cloud solutions for clients.
                </p>
              </li>
              <li className="bg-gray-700 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">ABC Corp - Sales Intern</h3>
                <p>
                  Assisted in developing sales strategies and conducted market research, which contributed to a 15% growth in client acquisition.
                </p>
              </li>
            </ul>
          </div>
        );
      case "recommended":
        return (
          <div className="p-6 text-lg leading-relaxed text-gray-300">
            <h2 className="text-2xl font-semibold mb-4 text-teal-400">
              Recommended
            </h2>
            <p>
              Coming soon! Stay tuned for my recommendations on tools, books, and courses that have helped me in my career.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <div className="flex border-b border-gray-700">
        <button
          onClick={() => setActiveTab("about")}
          className={`px-6 py-2 focus:outline-none ${
            activeTab === "about" ? "border-b-2 border-teal-400 text-teal-400" : "text-gray-400"
          }`}
        >
          About Me
        </button>
        <button
          onClick={() => setActiveTab("experiences")}
          className={`px-6 py-2 focus:outline-none ${
            activeTab === "experiences" ? "border-b-2 border-teal-400 text-teal-400" : "text-gray-400"
          }`}
        >
          Experiences
        </button>
        <button
          onClick={() => setActiveTab("recommended")}
          className={`px-6 py-2 focus:outline-none ${
            activeTab === "recommended" ? "border-b-2 border-teal-400 text-teal-400" : "text-gray-400"
          }`}
        >
          Recommended
        </button>
      </div>
      <div className="mt-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default AboutWidget;
