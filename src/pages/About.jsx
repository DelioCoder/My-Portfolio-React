import React from 'react';
import PText from '../components/PText';
import AboutImg from '../assets/images/about.png';
import styled from 'styled-components';
import pdf from '../assets/pdf/DAVID_CV.pdf';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
    padding: 20rem 0 10rem 0;
    .top-section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .left {
        flex: 3;
    }
    .right {
        flex: 2;
    }
    .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span {
            background-color: var(--deep-dark);
            padding: 0.5rem;
            border-radius: 8px;
        }
    }
    .about__heading {
        font-size: 3.6rem;
        margin-bottom: 3rem;
    }
    .about__info {
        margin-bottom: 4rem;
        .para {
            max-width: 100%;
        }
    }
    .right {
        img {
            border: 2px solid var(--gray-1);
        }
    }
    .button {
        font-size: 2.2rem;
        background-color: var(--gray-1);
        padding: 0.7em 2em;
        border: 2px solid var(--gray-1);
        border-radius: 8px;
        display: inline-block;
        color: black;
    }
    .about__info__items {
        margin-top: 15rem;
    }
    .about__info__item {
        margin-bottom: 10rem;
    }
    .about__info__heading {
        font-size: 3.6rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px) {
        padding: 10rem 0;
        .top-section {
            flex-direction: column;
            gap: 5rem;
        }
        .about__subheading {
            font-size: 1.8rem;
        }
        .about__heading {
            font-size: 2.8rem;
        }
        .about__info__heading {
            font-size: 3rem;
        }
    }
`;

export default function About() {
    return (
        <>
            <AboutPageStyles>
                <div className="container">
                    <div className="top-section">
                        <div className="left">
                        <p className="about__subheading">
                            Hola, Me llamo <span>Elio David</span>
                        </p>
                        <h2 className="about__heading">Desarrollador de software</h2>
                        <div className="about__info">
                            <PText>
                            Mi vida con la tecnología empezó desde una temprana edad, pero fue mucho después que quede templado por la programación, en especial, por la programación web. 
                            <br /> <br />
                            Es ahí donde conocí muchos lenguajes de programación tanto para el desarrollo del front-end y back-end, pero fue un lenguaje y sus frameworks el cual me llamo mucho más la atención que los demas y quede 'enamorado', y ese fue JavaScript! y desde ese día decidi ser desarrollador javascript. 🌟
                            <br /> <br />
                            Sigo desarrollando sistemas con PHP y sigo aprendiendo mas sobre otras tecnologías como lo es Python 🐍 ya que pienso que aún hay muchas opciones en el mundo de la programación para crear sistemas. 👨‍💻 👨‍💻
                            <br /> <br/>
                            Pero siento que con Javascript(BackEnd y FrontEnd) me desenvuelvo mas.
                            </PText>
                        </div>
                            <a href={pdf} className="button" download><i className="fas fa-file-pdf" style={{color: 'black'}}></i> Descargar CV </a>
                        </div>
                        <div className="right">
                            <img src={AboutImg} alt="me" />
                        </div>
                    </div>
                    <div className="about__info__items">
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Education</h1>
                            <AboutInfoItem 
                                title="Instituto"
                                items={[
                                    'SENATI'
                                ]}
                            />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Mis habilidades</h1>
                            <AboutInfoItem 
                                title="FrontEnd"
                                items={[
                                    'HTML', 'CSS (Bootstrap, Semantic UI, Material UI)', 'Javascript', 'React'
                                ]}
                            />
                            <AboutInfoItem 
                                title="BackEnd"
                                items={[
                                    'NodeJS (Express)', 'PHP'
                                ]}
                            />
                            <AboutInfoItem 
                                title="Design"
                                items={[
                                    'Photoshop (Basico)', 'Figma'
                                ]}
                            />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Experiencias</h1>
                            <AboutInfoItem 
                                title="2018"
                                items={[
                                    'Diseñador web'
                                ]}
                            />
                        </div>
                    </div>
                </div>
                
            </AboutPageStyles>
        </>
    )
}
