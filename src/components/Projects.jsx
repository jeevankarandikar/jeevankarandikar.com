import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 1.5rem 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background: ${props => props.theme.bg === '#feeeee' ? '#f5f5f5' : '#2a2a2a'};

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.theme.bg === '#feeeee' ? '#999' : '#666'};
    font-size: 0.9rem;
  }
`;

const ImageGallery = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background: ${props => props.theme.bg === '#feeeee' ? '#f5f5f5' : '#2a2a2a'};

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${props => props.activeIndex === props.index ? 1 : 0};
    transition: opacity 0.3s ease;
  }

  .gallery-nav {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 1;
  }

  .gallery-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.activeIndex === props.index ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
    cursor: pointer;
    transition: background 0.3s ease;
  }
`;

const ProjectInfo = styled.div`
  padding: 1rem;

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;

    a {
      color: inherit;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    margin: 0;
    color: ${props => props.theme.bg === '#feeeee' ? '#666' : '#999'};
  }
`;

const Projects = () => {
  // Create a map of project indices to their active image indices
  const [activeImageIndices, setActiveImageIndices] = useState({});

  const projects = [
    {
      title: "Bioamplifier",
      image: "/Project Portfolio/UCSD Projects/216 Biamplifier.png",
      pdf: "/Project Portfolio/UCSD Projects/216 Bioamplifier Final Project.pdf",
      year: "2024"
    },
    {
      title: "EMG Acquisition Board",
      image: "/Project Portfolio/UCSD Projects/EMG_aquisition_circuit.JPG",
      year: "2024"
    },
    {
      title: "EEG Anesthesia Monitor",
      images: [
        "/Project Portfolio/UCSD Projects/eeg_anesthesia_circuit.png",
        "/Project Portfolio/UCSD Projects/eeg_anesthesia_block.png"
      ],
      pdf: "/Project Portfolio/UCSD Projects/EEG_Anesthesia_Monitor.pdf",
      year: "2024"
    },
    {
      title: "Artificial Heart Feedback Control",
      image: "/Project Portfolio/UCSD Projects/TAH.jpg",
      pdf: "/Project Portfolio/UCSD Projects/122A_Final_Project.pdf",
      year: "2024"
    },
    {
      title: "FTC Robot",
      image: "/Project Portfolio/FTC/FTC_Robot_Nov_2016.JPG",
      year: "2016"
    },
    {
      title: "iPhone Engravings",
      images: [
        "/Project Portfolio/iPhone Modifications/flash_phone.JPG",
        "/Project Portfolio/iPhone Modifications/flower_phone.JPG",
        "/Project Portfolio/iPhone Modifications/razor_phone.JPG",
        "/Project Portfolio/iPhone Modifications/lemmy_phone.JPG"
      ],
      year: "2014-2015"
    },
    {
      title: "Electrolysis",
      image: "/Project Portfolio/Electrolysis/electrolysis2.JPG",
      year: "2014-2015"
    },
    {
      title: "Cardboard Drone Frame",
      image: "/Project Portfolio/Drone/cardboard_frame.jpg",
      year: "2014-2015"
    },
    {
      title: "Acrylic Drone Frame",
      image: "/Project Portfolio/Drone/assembled_acrylic.JPG",
      year: "2014-2015"
    },
    {
      title: "3D Printed Drone Frame",
      image: "/Project Portfolio/Drone/3Dprinted_frame.jpg",
      year: "2014-2015"
    }
    // {
    //   title: "EMG Prosthetic Hand",
    //   video: "/Project Portfolio/UCSD Projects/eeg_prosthetic.mov",
    //   year: "2025"
    // }
  ];

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.innerHTML = '<div class="placeholder">Image not available</div>';
  };

  const handleGalleryDotClick = (projectIndex, imageIndex) => {
    setActiveImageIndices(prev => ({
      ...prev,
      [projectIndex]: imageIndex
    }));
  };

  return (
    <ProjectsContainer>
      {projects.map((project, projectIndex) => (
        <ProjectCard
          key={projectIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
        >
          {project.video ? (
            <ImageContainer>
              <video src={project.video} controls loop>
                Your browser does not support the video tag.
              </video>
            </ImageContainer>
          ) : project.images ? (
            <ImageGallery
              activeIndex={activeImageIndices[projectIndex] || 0}
              style={{ position: 'relative' }}
            >
              {project.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`${project.title} - Image ${imgIndex + 1}`}
                  onError={handleImageError}
                  style={{
                    opacity: (activeImageIndices[projectIndex] || 0) === imgIndex ? 1 : 0
                  }}
                />
              ))}
              <div className="gallery-nav">
                {project.images.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className="gallery-dot"
                    style={{
                      background: (activeImageIndices[projectIndex] || 0) === dotIndex 
                        ? '#fff' 
                        : 'rgba(255, 255, 255, 0.5)'
                    }}
                    onClick={() => handleGalleryDotClick(projectIndex, dotIndex)}
                  />
                ))}
              </div>
            </ImageGallery>
          ) : (
            <ImageContainer>
              <img
                src={project.image}
                alt={project.title}
                onError={handleImageError}
              />
            </ImageContainer>
          )}
          <ProjectInfo>
            <h3>
              {project.pdf ? (
                <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p>{project.year}</p>
          </ProjectInfo>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects; 