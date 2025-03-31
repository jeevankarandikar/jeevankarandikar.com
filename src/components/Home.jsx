import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 4rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: normal;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const Home = () => {
  return (
    <HomeSection>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        jeevan karandikar
      </Title>
      
      <Paragraph
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        i am a bioengineering student passionate about neural interfaces, neuromorphic systems, medical devices, humanoid robotics, and XR.
      </Paragraph>
      
      <Paragraph
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        i also find myself captivated by the nuances of nutritional science and endocrinology, human psychology, and the awe-inspiring reign of dinosaurs. quantum computing and nuclear fusion are also cool.
      </Paragraph>
      
      <Paragraph
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        ultimately i love to learn, and i aspire to solve problems that enable people to unleash their distinct talents upon the world, contributing to the greater mosaic of human potential.
      </Paragraph>
      
      <Paragraph
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        i'm always happy to chat! feel free to email me at{' '}
        <SocialLink href="mailto:jkarandikar@ucsd.edu">jkarandikar@ucsd.edu</SocialLink>.
      </Paragraph>

      <Links>
        <SocialLink 
          href="https://www.linkedin.com/in/jeevankarandikar/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          linkedin
        </SocialLink>
        <SocialLink 
          href="https://github.com/jeevankarandikar" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          github
        </SocialLink>
      </Links>
    </HomeSection>
  );
};

export default Home; 