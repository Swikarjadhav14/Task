


import React, { useState } from "react";

const GalleryWidget = () => {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1725113160838-9efa2a25aa0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1725109431763-36524de95bf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1725006705457-169c2b2ef62f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]);

  const addImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages([...images, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Gallery</h3>
        <label
          htmlFor="fileInput"
          className="bg-teal-400 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-teal-500 transition duration-200"
        >
          + Add Image
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={addImage}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="rounded-lg object-cover w-full h-40"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button className="text-xl text-gray-400 hover:text-white mx-2">
          &larr;
        </button>
        <button className="text-xl text-gray-400 hover:text-white mx-2">
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default GalleryWidget;
