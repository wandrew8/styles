import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt';

const GlassCard = (props) => {
    const { number, heading, text, link="#" } = props;
    return (
        <Tilt options={{ max: 15, speed: 400, scale: 1, glare: true, "max-glare": 1 }} style={{ backdropFilter: "blur(4px)", backgroundColor: "transparent", padding: "0px", margin: "15px" }}>
            <Card>
                <div className="content">
                    <h2>{number}</h2>
                    <h3>{heading}</h3>
                    <p>{text}</p>
                    <a href={link}>Read More</a>
                </div>
            </Card>
        </Tilt>
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
        transition: 0.2s;
        transform: translateY(5px);
        opacity: 0.7;
        backdrop-filter: blur(1px);

        h2 {
            position: absolute;
            top: -40px;
            right: 30px;
            font-size: 8em;
            color: rgba(255, 255, 255, 0.1);
            pointer-events: none;
            transition: 0.2s;

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
