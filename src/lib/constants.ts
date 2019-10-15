import { Character } from './interfaces'

export const CHARACTERS: Character[] = [
    {
        name: 'Orchid Spellweaver',
        levels: [
            {
                health: 6,
                experience: 0,
            },
            {
                health: 7,
                experience: 45,
            },
            {
                health: 8,
                experience: 95,
            },
            {
                health: 9,
                experience: 150,
            },
            {
                health: 10,
                experience: 210,
            },
            {
                health: 11,
                experience: 275,
            },
            {
                health: 12,
                experience: 345,
            },
            {
                health: 13,
                experience: 420,
            },
            {
                health: 14,
                experience: 500,
            },
        ],
        perks: [
            {
                label: 'Remove four +0 cards',
                uses: 1,
            },
            {
                label: 'Replace one -1 card with one +1 card',
                uses: 2,
            },
            {
                label: 'Add two +1 cards',
                uses: 2,
            },
            {
                label: 'Add one +0 STUN card',
                uses: 1,
            },
            {
                label: 'Add one +1 WOUND card',
                uses: 1,
            },
            {
                label: 'Add one +1 IMMOBILIZE',
                uses: 1,
            },
            {
                label: 'Add one +1 CURSE',
                uses: 1,
            },
            {
                label: 'Add one +2 FIRE ELEMENT',
                uses: 2,
            },
            {
                label: 'Add one +2 FROZEN ELEMENT',
                uses: 2,
            },
            {
                label: 'Add one LEAF card and one AIR card',
                uses: 1,
            },
            {
                label: 'Add one SUN card and one BLACK/WHITE card',
                uses: 1,
            },
        ],
    },
]
