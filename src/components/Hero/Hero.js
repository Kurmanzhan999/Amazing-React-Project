import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  ButtonContainer,
  ButtonWrapper,
  CharacterContainer,
  Heading,
  HeroButton,
  HeroContent,
  HeroImage,
  HeroSection,
  HeroText,
  ImageCharacter,
} from './HeroStyles';

import { FiMail } from 'react-icons/fi';
import Modal from '../Modal/MOdal';
function Hero() {
  const [showModal, setShowModal] = useState(false);
  const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };

  const toggleModal = () => {
    if (!showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    setShowModal(!showModal);
  };

  const variants = {
    hover: {
      y: 15,
      transition: {
        yoyo: Infinity,
        duration: 0.6,
      },
    },
  };
  const { ref, inView } = useInView({
    rootMargin: '-100px',
  });

  useEffect(() => {
    console.log(inView);
  }, [inView]);
  return (
    <>
      <HeroSection>
        <HeroImage className="pattern" src="./images/hero-pattern-bg-lg.png" />
        <HeroImage className="guy" src="./images/hero-guy-1.png" />
        <CharacterContainer>
          <ImageCharacter
            dragConstraints={dragConstraints}
            className="one"
            src="./images/image 1.png"
          />
          <ImageCharacter
            dragConstraints={dragConstraints}
            className="two"
            src="./images/image 2.png"
          />
          <ImageCharacter
            variants={variants}
            whileHover="hover"
            drag
            dragConstraints={dragConstraints}
            className="three"
            src="./images/image 3.png"
          />
        </CharacterContainer>
        <HeroContent>
          <Heading>We Are Designify</Heading>
          <HeroText>
            A team of passionate designer and developers ready to provide unique
            and outstanding products for you!
          </HeroText>
          <ButtonContainer ref={ref}>
            <ButtonWrapper>
              <HeroButton
                onClick={toggleModal}
                className={inView ? '' : 'corner'}
              >
                {inView ? (
                  <> Chat with us</>
                ) : (
                  <FiMail color="white" size="2.3rem" />
                )}
              </HeroButton>
            </ButtonWrapper>
          </ButtonContainer>
        </HeroContent>
      </HeroSection>
      <Modal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
}

export default Hero;
