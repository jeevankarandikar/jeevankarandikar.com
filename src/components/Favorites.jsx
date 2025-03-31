import styled from 'styled-components';
import { motion } from 'framer-motion';

const FavoritesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  font-weight: normal;
  font-size: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const Section = styled(motion.div)`
  background: ${props => props.theme.bg === '#feeeee' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.05)'};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const SectionTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-weight: normal;
  font-size: 1.2rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.8rem;
    line-height: 1.6;
    opacity: 0.9;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 1;
    }
  }
`;

const Quote = styled.li`
  font-style: italic;
  opacity: 0.8;
  padding-left: 1rem;
  border-left: 2px solid currentColor;
  margin-bottom: 1rem;
`;

const Favorites = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <FavoritesContainer>
      <Title>favorites</Title>
      
      <Grid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Section variants={itemVariants}>
          <SectionTitle>movies</SectionTitle>
          <List>
            <li>star wars</li>
            <li>spiderman trilogies</li>
            <li>iron man trilogy</li>
            <li>dark knight trilogy</li>
            <li>avatar movies</li>
            <li>ford v ferrari</li>
            <li>shutter island</li>
            <li>titanic</li>
            <li>inception</li>
            <li>interstellar</li>
            <li>shawshank redemption</li>
            <li>goodwill hunting</li>
            <li>rocky & creed</li>
            <li>oppenheimer</li>
            <li>the imitation game</li>
            <li>radioactive</li>
            <li>prestige</li>
            <li>topgun</li>
            <li>dune</li>
            <li>fast & furious</li>
            <li>the greatest showman</li>
            <li>forest gump</li>
            <li>the big short</li>
            <li>wolf of wall street</li>
            <li>lion</li>
            <li>three idiots</li>
            <li>pk</li>
            <li>kabir singh</li>
            <li>zindagi na milegi dobara</li>
            <li>hi nanna</li>
          </List>
        </Section>

        <Section variants={itemVariants}>
          <SectionTitle>quotes</SectionTitle>
          <List>
            <Quote>"the night is darkest just before dawn" - harvey dent (the dark knight)</Quote>
            <Quote>"follow excellence, success will chase you... pants down" - aamir khan (3 idiots)</Quote>
            <Quote>"if you don't sacrifice for what you want, what you want becomes the sacrifice" - jim sullivan</Quote>
            <Quote>"to lead the orchestra, you must turn your back to the crowd" - max lucado</Quote>
            <Quote>"the measure of intelligence is the ability to change" - albert einstein</Quote>
            <Quote>"comparison is the thief of joy" - theodore roosevelt</Quote>
            <Quote>"the grass is greener on the other side because it's fertilized with bullshit" - unknown</Quote>
            <Quote>"theory will only take you so far" - j. robert oppenheimer</Quote>
            <Quote>"the moment we stop thinking is when our happiness begins" - joseph nyugen</Quote>
            <Quote>"life is suffering" - buddha</Quote>
            <Quote>"in your whole life nobody has ever abused you more than you have abused yourself" - miguel ruiz</Quote>
            <Quote>"real love is accepting other people the way they are without trying to change them" - miguel ruiz</Quote>
            <Quote>"float like a butterfly, sting like a bee" - muhammad ali</Quote>
            <Quote>"the only place to go from failure is to win" - tom platz</Quote>
            <Quote>"learn, earn, return" - alan loy mcginnis</Quote>
          </List>
        </Section>

        <Section variants={itemVariants}>
          <SectionTitle>books</SectionTitle>
          <List>
            <li>the inheritance cycle - christopher paolini</li>
            <li>harry potter - j.k. rowling</li>
            <li>percy jackson - rick riordan</li>
            <li>the heroes of olympus - rick riordan</li>
            <li>kane chronicles - rick riordan</li>
            <li>animal farm - george orwell</li>
            <li>1984 - george orwell</li>
            <li>night - elie wiesel</li>
            <li>atomic habits - james clear</li>
            <li>how to win friends and influence people - dale carnegie</li>
            <li>astrophysics for people in a hurry - neil degrasse tyson</li>
            <li>beyonders - brandon mull</li>
            <li>the power of habit - charles duhigg</li>
            <li>the autobiography of frederick douglass - frederick douglass</li>
            <li>steve jobs - walter isaacson</li>
            <li>all quiet on the western front - erich maria remarque</li>
            <li>how not to diet - michael greger</li>
            <li>station eleven - emily st. john mandel</li>
            <li>running with sherman - christopher mcdougall</li>
            <li>the untethered soul - michael a. singer</li>
            <li>the bhagavad gita</li>
            <li>the alchemist - paulo coelho</li>
            <li>frankenstein - mary shelley</li>
            <li>the four agreements - don miguel ruiz</li>
            <li>never split the difference - chris voss</li>
            <li>sapiens - yuval noah harari</li>
            <li>talking to strangers - malcolm gladwell</li>
            <li>meditations - marcus aurelius</li>
            <li>the power of scrum - jeff sutherland</li>
          </List>
        </Section>

        <Section variants={itemVariants}>
          <SectionTitle>restaurants</SectionTitle>
          <List>
            <li>ping pong, london</li>
            <li>mumokateki, kyoto</li>
            <li>bloompb, chicago</li>
            <li>planta queen, chicago</li>
            <li>curry & more, oceanside</li>
            <li>nightsong market, los angeles</li>
            <li>heidelberg cafe, laguna beach</li>
            <li>earth aloha eats, maui</li>
            <li>my burma, davis</li>
            <li>ramen nagi, san diego</li>
          </List>
        </Section>

        <Section variants={itemVariants}>
          <SectionTitle>cities visited</SectionTitle>
          <List>
            <li>new york city</li>
            <li>chicago</li>
            <li>san francisco</li>
            <li>london</li>
            <li>paris</li>
            <li>dubai</li>
            <li>mumbai</li>
            <li>bangalore</li>
            <li>beijing</li>
            <li>shanghai</li>
          </List>
        </Section>

        <Section variants={itemVariants}>
          <SectionTitle>tv shows</SectionTitle>
          <List>
            <li>game of thrones</li>
            <li>house of the dragon</li>
            <li>avatar: the last airbender</li>
            <li>attack on titan</li>
            <li>cobra kai</li>
            <li>the three-body problem</li>
            <li>the boys</li>
            <li>the lord of the rings: the rings of power</li>
            <li>suits</li>
            <li>the 100</li>
            <li>grey's anatomy</li>
            <li>squid game</li>
            <li>designated survivor</li>
          </List>
        </Section>
      </Grid>
    </FavoritesContainer>
  );
};

export default Favorites; 