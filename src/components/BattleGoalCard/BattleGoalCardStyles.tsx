import styled, { css } from 'styled-components'
import CardBack from './goal_card_back.png'

interface CardProps {
    flipped: boolean
}

export const Card = styled.div<CardProps>`
    height: 260px;
    width: 192px;
    background-image: url(${CardBack});
    background-size: cover;
    background-position: center;
    display: flex;
    border-radius: 6px;
    cursor: pointer;
    backface-visibility: hidden;

    ${props =>
        props.flipped &&
        css`
            transform: rotateY(180deg);
        `}

    .front, .back {
        backface-visibility: hidden;
        width: 100%;
        height: 100%;
    }

    .back {
        transform: rotateY(180deg);
    }

    .inner {
        padding: 50px 44px;
        display: flex;
        flex-direction: column;

        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .name {
        text-align: center;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .goal {
        font-size: 12px;
    }

    .reward {
        margin-top: auto;
        display: flex;
        font-size: 18px;
        justify-content: center;
    }
`
