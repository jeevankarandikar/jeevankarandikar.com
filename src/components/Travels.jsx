import styled, { useTheme } from 'styled-components'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Import marker icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Fix for default marker icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const TravelsSection = styled.section`
  padding: 4rem 3rem 1rem 3rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 3rem 1rem 1rem 1rem;
  }
`

const MapWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-height: calc(100vh - 240px);
  position: relative;
  background-color: ${props => props.theme.bg === '#feeeee' ? '#fafafa' : '#111111'};
  border: 1px solid ${props => props.theme.bg === '#feeeee' ? '#eeeeee' : '#333333'};
  border-radius: 8px;
  overflow: hidden;
  
  .leaflet-container {
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
  
  .leaflet-control-container {
    display: none;
  }
  
  .leaflet-grab {
    cursor: grab;
  }
  
  .leaflet-dragging .leaflet-grab {
    cursor: grabbing;
  }

  @media (max-width: 768px) {
    max-height: calc(100vh - 200px);
  }
`

const MapStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background-color: transparent;
  box-shadow: none;
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
  }
`

const StatItem = styled.div`
  text-align: center;
  
  .value {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 0.25rem;
    color: ${props => props.theme.bg === '#feeeee' ? '#000000' : '#ffffff'};
  }
  
  .label {
    font-size: 0.75rem;
    color: ${props => props.theme.bg === '#feeeee' ? '#666666' : '#888888'};
    text-transform: lowercase;
  }
`

const PhotosLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  transition: opacity 0.2s ease;
  
  .value {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 0.25rem;
    color: ${props => props.theme.bg === '#feeeee' ? '#000000' : '#ffffff'};
  }
  
  .label {
    font-size: 0.875rem;
    color: ${props => props.theme.bg === '#feeeee' ? '#666666' : '#888888'};
    text-transform: lowercase;
  }
  
  &:hover {
    opacity: 0.7;
  }
`

// Countries you've visited (removing duplicates)
const visitedCountries = [
  "Egypt",
  "China",
  "India",
  "Japan",
  "Thailand",
  "Turkey",
  "United Arab Emirates",
  "Czech Republic",
  "France",
  "Greece",
  "Italy",  
  "Malta",
  "Spain",
  "United Kingdom",
  "Canada",
  "Honduras",
  "Haiti",
  "Switzerland",
  "Jamaica",
  "Mexico",
  "United States of America",
  "Cuba",
  "Bahamas  "
]

function Travels() {
  const theme = useTheme();

  // GeoJSON styling function
  const countryStyle = (feature) => {
    const countryName = feature.properties.name;
    // Some GeoJSON files use different naming conventions, so we should check for common variations
    const isVisited = visitedCountries.includes(countryName) || 
                     (countryName === "United States" && visitedCountries.includes("United States of America")) ||
                     (countryName === "UAE" && visitedCountries.includes("United Arab Emirates"));
    
    return {
      fillColor: isVisited ? (theme.bg === '#feeeee' ? '#000000' : '#ffffff') : 'transparent',
      weight: 1,
      opacity: 1,
      color: theme.bg === '#feeeee' ? 
        (isVisited ? '#666666' : '#dddddd') : 
        (isVisited ? '#444444' : '#222222'),
      fillOpacity: isVisited ? 0.5 : 0,
    };
  };

  // Function to load GeoJSON data
  const [geoData, setGeoData] = useState(null);
  const [totalCountries, setTotalCountries] = useState(0);
  
  useEffect(() => {
    // Fetch world GeoJSON data
    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
      .then(response => response.json())
      .then(data => {
        // Filter out any non-country territories if they exist in the data
        const validCountries = data.features.filter(feature => 
          feature.properties.name && !feature.properties.name.includes("Antarctica")
        );
        setGeoData(data);
        setTotalCountries(validCountries.length);
      })
      .catch(error => console.error('Error loading GeoJSON data:', error));
  }, []);

  // Use a monochrome map tile URL for a cleaner black and white look
  const mapTileUrl = theme.bg === '#feeeee'
    ? 'https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png'
    : 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';

  // Calculate percentage of world visited - using actual country count
  const percentVisited = totalCountries ? Math.round((visitedCountries.length / totalCountries) * 100) : 0;

  return (
    <TravelsSection>
      <MapWrapper>
        <MapContainer
          center={[40, 0]}
          zoom={1.8}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
          attributionControl={false}
          dragging={true}
          touchZoom={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          boxZoom={false}
          keyboard={false}
          tap={false}
          minZoom={1.8}
          maxZoom={4}
          maxBounds={[[-90, -180], [90, 180]]}
          maxBoundsViscosity={1.0}
        >
          <TileLayer
            url={mapTileUrl}
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {geoData && (
            <GeoJSON 
              data={geoData} 
              style={countryStyle}
            />
          )}
        </MapContainer>
      </MapWrapper>
      
      <MapStats>
        <StatItem>
          <div className="value">{visitedCountries.length}</div>
          <div className="label">countries visited</div>
        </StatItem>
        <StatItem>
          <div className="value">{percentVisited}%</div>
          <div className="label">of world explored</div>
        </StatItem>
        <PhotosLink to="/photos">
          <div className="value">→</div>
          <div className="label">photos</div>
        </PhotosLink>
      </MapStats>
    </TravelsSection>
  );
}

export default Travels; 