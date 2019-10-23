import React, { useState } from 'react'
import { Card } from './BattleGoalCardStyles'

import { BattleGoalCard } from 'lib/interfaces'
interface Props {
    card?: BattleGoalCard
}

const BattleGoal = ({ card }: Props) => {
    const [flipped, setFlipped] = useState(false)
    if (!card) return null
    return (
        <Card flipped={flipped} onClick={() => setFlipped(!flipped)}>
            <div className="inner">
                <div className="front">
                    <div className="name">{card.name}</div>
                    <div className="goal">{card.goal}</div>
                    <div className="reward">
                        {Array(card.reward)
                            .fill({})
                            .map(reward => (
                                <div>√</div>
                            ))}
                    </div>
                </div>
                <div className="back">test</div>
            </div>
        </Card>
    )
}

export default BattleGoal
