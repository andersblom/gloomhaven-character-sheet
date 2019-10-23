export interface Level {
    health: number
    experience: number
}

export interface Perk {
    label: string
    uses: number
}

export interface Character {
    name: string
    levels: Level[]
    perks: Perk[]
}

export interface BattleGoalCard {
    name: string
    goal: string
    reward: number
}
