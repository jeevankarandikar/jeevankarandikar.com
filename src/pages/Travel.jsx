import { motion } from 'framer-motion';
import { useState } from 'react';

const Travel = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 1,
      name: "Location 1",
      country: "Country 1",
      date: "2024",
      description: "A brief description of the location and your experience there.",
      images: [
        "/path/to/location1-image1.jpg",
        "/path/to/location1-image2.jpg",
        "/path/to/location1-image3.jpg"
      ]
    },
    {
      id: 2,
      name: "Location 2",
      country: "Country 2",
      date: "2024",
      description: "Another location description with highlights of your visit.",
      images: [
        "/path/to/location2-image1.jpg",
        "/path/to/location2-image2.jpg",
        "/path/to/location2-image3.jpg"
      ]
    },
    // Add more locations as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-4 pt-24 pb-16"
    >
      <h1 className="text-3xl font-light mb-8">travel</h1>
      
      <div className="grid gap-12">
        {locations.map((location) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b border-gray-200 dark:border-gray-700 pb-12 last:border-0"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-2">
                  {location.images.slice(0, 4).map((image, index) => (
                    <div
                      key={index}
                      className={`relative ${
                        index === 0 ? 'col-span-2' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${location.name} ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-xl font-light mb-2">{location.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {location.country} • {location.date}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {location.description}
                </p>
                <button
                  onClick={() => setSelectedLocation(location)}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View More →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for full location view */}
      {selectedLocation && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedLocation(null)}
        >
          <div className="relative max-w-4xl w-full">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {selectedLocation.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedLocation.name} ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-light mb-2">{selectedLocation.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {selectedLocation.country} • {selectedLocation.date}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {selectedLocation.description}
              </p>
            </div>
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedLocation(null)}
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

export default Travel; 