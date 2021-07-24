import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
    padding: 10rem 0;
    .button {
        margin-top: 3rem;
        font-size: 2.2rem;
        background-color: var(--deep-dark);
        padding: 0.7em 2em;
        border: 2px solid var(--gray-1);
        border-radius: 8px;
        display: inline-block;
        color: var(--gray-1);
    }
    .projects__allItems {
        display: flex;
        gap: 3rem;
        margin-top: 5rem;
    }
    .swiper-container {
        padding-top: 8rem;
        max-width: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next {
        position: absolute;
        height: 50px;
        width: 50px;
        background-color: var(--deep-dark);
        z-index: 10;
        right: 60px;
        left: auto;
        top: 0;
        transform: translateY(50%);
        color: var(--gray-1);
        border-radius: 8px;
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 2rem;
    }
    @media only screen and (max-width: 768px) {
        .projects__allItems {
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            margin-top: 7rem;
            gap: 5rem;
            .projectItem__img {
                width: 100%;
            }
        }
    }
`;

export default function ProjectsSection() {
    return (
        <ProjectSectionStyle>
            <div className="container">
                <SectionTitle 
                    heading="Projects"
                    subheading="some of my recent works"
                />
                <div className="projects__allItems">
                    <Swiper spaceBetween={30} slidesPerView={1} navigation 
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            }
                        }}
                    >
                    {
                        projects.map((project, index) => {
                            
                            return(
                                <SwiperSlide key={project.id}>
                                    <ProjectItem 
                                        img={project.img}
                                        title={project.name}
                                        desc={project.desc}
                                        link={project.link}
                                    />
                                </SwiperSlide>
                            );
                            
                        })
                    }
                    </Swiper>
                </div>

                <a href="https://github.com/ProgrammingGeek02?tab=repositories" className="button"><i className="fab fa-github" style={{fontSize: '25px', marginRight: '10px'}}></i>Ver mas</a>
            </div>
        </ProjectSectionStyle>
    )
}
