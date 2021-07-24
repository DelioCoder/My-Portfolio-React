import React from 'react';
import FooterCol from './FooterCol';
import PText from './PText';
import styled from 'styled-components';

const FooterStyles = styled.div`
    padding-top: 10rem;
    background-color: var(--deep-dark);
    .container {
        display: flex;
        gap: 3rem;
    }
    .footer__col1 {
        flex: 2;
    }
    .footer__col2,
    .footer__col3,
    .footer__col4 {
        flex: 1;
    }
    .footer__col1__title {
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .copyright {
        background-color: var(--dark-bg);
        text-align: left;
        padding: 1rem 0;
        margin-top: 5rem;
        .para {
            margin-left: 0;
            font-size: 1.5rem;
        }
    }
    @media only screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            gap: 0rem;
            & > div {
                margin-top: 5rem;
            }
        }
        .footer__col1 .para {
            max-width: 100%;
        }
        .copyright {
            .container {
                div {
                    margin-top: 0;
                }
            }
        }
    }
`;

export default function Footer() {
    return (
        <FooterStyles>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">
                        Elio David
                    </h1>
                    <PText>
                        Soy un creador y diseñador freelance website de 
                        Lima, Perú. 
                        Hago grandiosas websites y servidores. 
                        Amo diseñar, crear y siempre intento sacar lo mejor
                        de mi en mis trabajos.
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol 
                        heading="Important Links"
                        links={
                            [
                                {
                                    title:"Home",
                                    path:"/home",
                                    type:"Link"
                                },
                                {
                                    title: 'About',
                                    path: '/about',
                                    type: 'Link',
                                },
                                {
                                    title: 'Projects',
                                    path: '/projects',
                                    type: 'Link',
                                },
                                {
                                    title: 'Contact',
                                    path: '/contact',
                                    type: 'Link'
                                }
                            ]
                        }
                    />
                </div>
                <div className="footer__col3">
                    <FooterCol 
                        heading="Contact info"
                        links={
                            [
                                {
                                    title: '(+51)923538579',
                                    path: 'tel:+923538579'
                                },
                                {
                                    title: 'davideveriwhere@gmail.com',
                                    path: 'mailto:davideveriwhere@gmail.com',
                                }
                            ]
                        }
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol 
                        heading="Links"
                        links={
                            [
                                {
                                    title: 'Github',
                                    path: 'https://github.com/ProgrammingGeek02',
                                },
                                {
                                    title: 'Linkedin',
                                    path: 'https://www.linkedin.com/in/david-saavedra-1b395b203/'
                                }
                            ]
                        }
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>
                        © 2021 - Elio David | Diseñado por PogrammingGeek02
                    </PText>
                </div>
            </div>
        </FooterStyles>
    )
}
