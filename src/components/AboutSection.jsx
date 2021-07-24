import React from 'react';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/About-img.png';

import styled from 'styled-components';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    margin-left: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {

        flex: 3;
    }
    .aboutSection__buttons {
      margin-left: 0rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
    return (
        <AboutSectionStyles>
            <div className="container" >
                <div className="aboutSection__left" >
                    <SectionTitle className="section-title" subheading='Dejame introducirme' heading='Acerca de mi' />
                    <PText>
                        Soy un creador y diseñador freelance website de Perú. Hago grandiosas websites y servidores. Amo diseñar, crear y siempre intento sacar lo mejor de mi en mis trabajos.
                    </PText>
                    <div className="aboutSection__buttons">
                        <Button btnLink="/projects" btnText="Trabajos" />
                        <Button btnLink="/about" btnText="Conoce mas" outline={true} />
                    </div>
                </div>
                <div className="aboutSection__right">
                    <img className="aboutImg" src={AboutImg} alt="Img" />
                </div>
            </div>
        </AboutSectionStyles>
    )
}
