import { motion } from 'framer-motion';
import { useState } from 'react';

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      id: 1,
      src: "/path/to/photo1.jpg",
      title: "Photo 1",
      location: "Location 1",
      date: "2024"
    },
    {
      id: 2,
      src: "/path/to/photo2.jpg",
      title: "Photo 2",
      location: "Location 2",
      date: "2024"
    },
    // Add more photos as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-4 pt-24 pb-16"
    >
      <h1 className="text-3xl font-light mb-8">photography</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(photo)}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <h3 className="text-xl font-light mb-1">{photo.title}</h3>
                <p className="text-sm">{photo.location}</p>
                <p className="text-sm">{photo.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for full-screen image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 rounded-b-lg text-white">
              <h3 className="text-xl font-light mb-1">{selectedImage.title}</h3>
              <p className="text-sm">{selectedImage.location}</p>
              <p className="text-sm">{selectedImage.date}</p>
            </div>
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Photography; 