import React from 'react';
import { featuresData } from '../../data/FeaturesData';
import { Container } from '../../GlobalStyles';
import {
  FeatureText,
  FeatureSection,
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
} from './FeatureStyles';
function Features() {
  return (
    <FeatureSection id="about">
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>What We Do</FeatureTitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {featuresData.map((el, index) => (
            <FeatureColumn key={index}>
              <FeatureImageWrapper className={el.imgClass}>
                {el.icon}
              </FeatureImageWrapper>
              <FeatureName>{el.name}</FeatureName>
              <FeatureText>{el.description}</FeatureText>
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </Container>
    </FeatureSection>
  );
}

export default Features;
