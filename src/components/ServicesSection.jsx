import React from 'react';
import SectionTitle from './SectionTitle';
import ServicesSectionItems from './ServicesSectionItems';

import styled from 'styled-components';

import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';

const ServicesItemStyles = styled.div`
    padding: 10rem 0;
    .services__allItems {
        display: flex;
        gap: 10rem;
        justify-content: space-between;
        margin-top: 5rem;
    }
    @media only screen and (max-width: 768px){
        .services__allItems{
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 5rem;
            gap: 5rem;
        }
    }
`;

export default function ServicesSection() {
    return (
        <ServicesItemStyles>
            <div className="container">
                <SectionTitle heading="Servicios" subheading="Que haré por ti" />
                
                <div className="services__allItems">
                    <ServicesSectionItems 
                        icon={<MdDesktopMac />}
                        title="Website Design"
                        desc="Hago diseños UI/UX para sitios web y aplicaciones que ayuden a tener un look unico."
                    />
                    <ServicesSectionItems
                        icon={<MdCode />}
                        title="Web Dev"
                        desc="También desarrollo websites. Creo sitios webs de alto rendimiento gracias a los frameworks que uso :D"                    
                    />
                    {/* <ServicesSectionItems 
                        icon={<MdPhonelinkSetup />}
                        title="App Dev"
                        desc="I develop mobile application. I create mobile app with React Native"
                    /> */}
                </div>
            </div>
        </ServicesItemStyles>
    )
}
