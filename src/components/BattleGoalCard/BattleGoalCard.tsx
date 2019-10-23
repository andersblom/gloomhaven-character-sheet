import React, { useState } from 'react'
import { Card } from './BattleGoalCardStyles'

import { BattleGoalCard } from 'lib/interfaces'
interface Props {
    card: BattleGoalCard
}

const BattleGoal = ({ card }: Props) => {
    const [flipped, setFlipped] = useState(true)
    return (
        <Card flipped={flipped} onClick={() => setFlipped(!flipped)}>
            <div className="inner">
                <div className="front">
                    <div className="name">{card.name}</div>
                    <div className="goal">{card.goal}</div>
                    <div className="reward">
                        {Array(card.reward)
                            .fill({})
                            .map((item, index) => (
                                <div key={index}>√</div>
                            ))}
                    </div>
                </div>
                <div className="back" />
            </div>
        </Card>
    )
}

export default BattleGoal
