import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

const TravelMap = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="relative h-[calc(100vh-4rem)]">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates}
            eventHandlers={{
              mouseover: () => setSelectedLocation(location),
              mouseout: () => setSelectedLocation(null),
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold">{location.name}</h3>
                {location.description && (
                  <p className="text-sm text-gray-600">{location.description}</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Location Preview */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
          >
            <div className="flex items-start space-x-4">
              {selectedLocation.image && (
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {selectedLocation.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {selectedLocation.description}
                </p>
                {selectedLocation.date && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {selectedLocation.date}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TravelMap; 