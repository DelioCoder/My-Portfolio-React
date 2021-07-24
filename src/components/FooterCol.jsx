import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ColStyles = styled.div`
    .heading {
        font-size: 2.4rem;
        margin-bottom: 2rem;
    }
    li {
        margin-bottom: 1rem;
    }
    a {
        font-size: 1.8rem;
    }
`;

export default function FooterCol({
    heading = 'col heading',
    links = [
        {
            type : "Link",
            title : "Home",
            path : "/home"
        },
        {
            type : "Link",
            title : "About",
            path : "/about"
        }
    ]
}) {
    return (
        <ColStyles>
            <h1 className="heading">{heading}</h1>
            <ul>
                {
                    links.map((item, index) => (
                        <li key={index}>
                            {item.type === 'Link' ? 
                                <Link to={item.path}>{item.title}</Link> : 
                                <a href={item.path} target="_blank" rel="noreferrer" >{item.title === 'Linkedin' && <i className="fab fa-linkedin"></i>}{item.title === 'Github' && <i className="fab fa-github"></i>} {item.title}</a>
                            }
                        </li>
                    ))
                }
            </ul>
        </ColStyles>
    )
}

//Link form react router dom
// a