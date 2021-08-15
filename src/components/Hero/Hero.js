import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Fabian Lanza
        </SectionTitle>
        <SectionText>
        I am a 18 year old student and a self taught developer.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;