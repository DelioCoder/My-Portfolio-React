import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import PText from './PText';
import styled from 'styled-components';

const ItemStyles = styled.div`
    text-align: center;
    .servicesItem__icon {
        svg {
            width: 3rem;
        }
    }
    .servicesItem__title{
        font-size: 2.5rem;
        font-family: 'Montserrat SemiBold';
    }
    .para {
        margin-top: 2rem;
    }
`;

export default function ServicesSectionItems({
    icon = <MdDesktopMac />,
    title = 'Web design',
    desc = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In minima, nesciunt eius atque quasi doloremque voluptates nemo ullam sed placeat assumenda distinctio error, rem facere culpa fugiat blanditiis? Soluta, nesciunt!'
}) {
    return (
        <ItemStyles>
            <div className="servicesItem__icon">
                {icon}
                <div className="servicesItem__title">
                {title}
                </div>
                <div className="para"></div>
                <PText>
                    {desc}
                </PText>
            </div>
        </ItemStyles>
    )
}
