import React from 'react';
import styled from 'styled-components';

const GlassCard = (props) => {
    const { number, heading, text, link="#" } = props;
    return (
            <Card>
                <div className="content">
                    <h2>{number}</h2>
                    <h3>{heading}</h3>
                    <p>{text}</p>
                    <a href={link}>Read More</a>
                </div>
            </Card>
    )
}

const Card = styled.div`
    position: relative;
    width: 260px;
    height: 350px;
    box-shadow: 30px 20px 50px rgba(0,0,0,0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    display: flex;
    margin: 15px;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(4px);
    color: black;
    font-family: 'Poppins', sans-serif;
    &:hover .content {
        transform: translateY(0px);
        opacity: 1;
        h2 {
            color: rgba(255, 255, 255, 0.2);
        }

    }
    .content {
        padding: 20px;
        text-align: center;
        transition: 200ms ease-in;
        transform: translateY(3px);
        opacity: 0.7;
        backdrop-filter: blur(1px);

        h2 {
            position: absolute;
            top: -40px;
            right: 30px;
            font-size: 8em;
            color: rgba(255, 255, 255, 0.1);
            transition: 200ms ease-in;

        }
        h3 {
            font-size: 1.8em;
            color: #fff;
            z-index: 1;
            padding-bottom: 1rem;
        }
        p {
            font-size: 1em;
            color: #fff;
            font-weight: 200;
            line-height: 1.1rem;
            text-align: justify;
        }
        a {
            position: relative;
            display: inline-block;
            padding: 8px 20px;
            margin-top: 15px;
            background: #fff;
            color: #000;
            border-radius: 20px;
            text-decoration: none;
            font-weight: 500;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);

        }
    }


`;

export default GlassCard;
