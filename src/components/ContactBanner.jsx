import React from 'react';
import Button from './Button';
import PText from './PText';
import styled from 'styled-components';

const ContactBannerStyled = styled.div`
    padding: 10rem 0;
    .contactBanner__wrapper {
        background-color: var(--deep-dark);
        border-radius: 12px;
        padding: 5rem 0rem;
        text-align: center;
    }
    .contactBanner__heading {
        font-size: 4rem;
        margin-bottom: 2rem;
    }
    @media only screen and (max-width: 768px) {
        .contactBanner__heading {
            font-size: 2.8rem;
        }
    }
`;

export default function ContactBanner() {
    return (
        <ContactBannerStyled>
            <div className="container">
                <div className="contactBanner__wrapper">
                    <PText>
                        Have a project in mind
                    </PText>
                    <h3 className="contactBanner__heading">
                        Let me help you
                    </h3>
                    <Button btnText="Contact Now" btnLink="/contact" ></Button>
                </div>
            </div>
        </ContactBannerStyled>
    )
}
