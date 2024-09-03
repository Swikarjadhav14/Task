import React from "react";
import AboutWidget from "./components/AboutWidget";
import GalleryWidget from "./components/GalleryWidget";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center space-y-10">
      <AboutWidget />
      <GalleryWidget />
    </div>
  );
};

export default App;
