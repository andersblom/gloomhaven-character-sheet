import React, { useEffect } from 'react'
import { WrappedFieldArrayProps, Field } from 'redux-form'

const items = [
    { name: 'Minor Mana Potion', cost: 10 },
    { name: 'Cloak of Invisibility', cost: 20 },
    { name: 'Boots of Striding', cost: 20 },
    { name: 'Winged Shoes', cost: 20 },
    { name: 'Hide Armor', cost: 10 },
    { name: 'Eagle-Eye Goggles', cost: 30 },
    { name: 'Iron Helmet', cost: 10 },
    { name: 'Heater Shield', cost: 20 },
    { name: 'Piercing Bow', cost: 30 },
    { name: 'War Hammer', cost: 30 },
    { name: 'Poison Dagger', cost: 20 },
    { name: 'Minor Healing Potion', cost: 10 },
    { name: 'Minor Stamina Potion', cost: 10 },
    { name: 'Empowering Talisman', cost: 45 },
    { name: 'Minor Power Potion', cost: 10 },
    { name: 'Boots of Speed', cost: 30 },
    { name: 'Cloak of Pockets', cost: 20 },
    { name: 'Battle Axe', cost: 20 },
    { name: 'Weighted Net', cost: 20 },
    { name: 'Stun Powder', cost: 20 },
]
const ItemsList: React.FC<WrappedFieldArrayProps<{}>> = ({ fields }) => {
    useEffect(() => {
        if (!fields.length) {
            fields.push({})
        }
    }, [fields])
    const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        fields.push({})
    }
    const handleRemoveItem = (
        e: React.MouseEvent<HTMLButtonElement>,
        index: number
    ) => {
        e.preventDefault()
        fields.remove(index)
    }
    return (
        <div>
            {fields.map((name, index) => (
                <div key={index}>
                    <button onClick={e => handleRemoveItem(e, index)}>-</button>
                    <Field component="select" name={`${name}.itemName`}>
                        <option></option>
                        {items.map(item => (
                            <option key={item.name} value={item.name}>
                                {item.name} ({item.cost})
                            </option>
                        ))}
                    </Field>
                    <Field
                        name={`${name}.lost`}
                        component="input"
                        type="checkbox"
                    />
                </div>
            ))}
            <button onClick={handleAddItem}>+</button>
        </div>
    )
}

export default ItemsList
