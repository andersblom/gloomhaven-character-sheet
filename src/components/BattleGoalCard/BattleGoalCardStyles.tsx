import styled, { css } from 'styled-components'
import CardFront from './goal_card_front.png'
import CardBack from './goal_card_back.png'

interface CardProps {
    flipped: boolean
}

export const Card = styled.div<CardProps>`
    height: 260px;
    width: 220px;
    cursor: pointer;
    display: flex;

    ${props =>
        props.flipped &&
        css`
            .inner {
                transform: rotateY(180deg);
            }
        `}

    .inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    /* Position the front and back side */
    .front,
    .back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 6px;
        background-size: cover;
        background-position: center;
    }

    /* Style the front side (fallback if image is missing) */
    .front {
        background-image: url(${CardFront});
        display: flex;
        flex-direction: column;
        padding: 50px 44px;
        box-sizing: border-box;
    }

    /* Style the back side */
    .back {
        background-image: url(${CardBack});
        transform: rotateY(180deg);
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
