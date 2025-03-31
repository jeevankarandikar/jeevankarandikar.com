import React from 'react';
import { worldMapPaths } from './WorldMapData';

const WorldMap = ({ visitedCountries }) => {
  const isVisited = (countryId) => visitedCountries.includes(countryId);

  return (
    <svg 
      viewBox="0 0 2000 1000" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      {Object.entries(worldMapPaths).map(([countryId, pathData]) => (
        <path
          key={countryId}
          id={countryId}
          className={isVisited(countryId) ? 'visited' : ''}
          d={pathData}
        />
      ))}
    </svg>
  );
};

export default WorldMap; 