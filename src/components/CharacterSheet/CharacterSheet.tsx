import React from 'react'
import { Field, FieldArray, InjectedFormProps } from 'redux-form'

import ItemsList from 'components/ItemsList/ItemsList'
import { StyledForm } from './CharacterSheet.styles'

interface Props {
    foo?: string
}

const CharacterSheet: React.FC<InjectedFormProps<Props>> = ({
    handleSubmit,
}) => {
    const onSubmit = (values: any) => {
        /**
         * @TODO: Buttons that aren't the input type="submit"
         * shouldn't trigger the submit event
         */
        localStorage.setItem('gloomy_bois', JSON.stringify(values))
        alert('saved!')
    }
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div className="input-field">
                <label htmlFor="character">Character:</label>
                <Field name="character" component="select" type="select">
                    <option />
                    <option value="spellweaver">Spellweaver</option>
                    <option value="tinkerer">Tinkerer</option>
                    <option value="scoundrel">Scoundrel</option>
                    <option value="brute">Brute</option>
                </Field>
            </div>
            <div className="input-field">
                <label htmlFor="prospherity">Prospherity:</label>
                <Field
                    name="prospherity"
                    component="input"
                    type="number"
                    placeholder="Prospherity"
                />
            </div>
            <div className="input-field">
                <label htmlFor="level">Level:</label>
                <Field
                    name="level"
                    component="input"
                    type="number"
                    placeholder="Level"
                />
            </div>
            <div className="input-field">
                <label htmlFor="health">Health:</label>
                <Field
                    name="health"
                    component="input"
                    type="number"
                    placeholder="Health"
                />
            </div>
            <div className="input-field">
                <label htmlFor="experience">Experience:</label>
                <Field
                    name="experience"
                    component="input"
                    type="number"
                    placeholder="Experience"
                />
            </div>
            <div className="input-field">
                <label htmlFor="notes">Notes:</label>
                <Field name="notes" component="textarea" placeholder="Notes" />
            </div>
            <div className="input-field">
                <label htmlFor="gold">Gold:</label>
                <Field
                    name="gold"
                    component="input"
                    type="number"
                    placeholder="Gold"
                />
            </div>
            <div className="input-field">
                <label htmlFor="items">Items:</label>
                <FieldArray name="items" component={ItemsList} />
            </div>
            <input type="submit" className="submit-button" />
        </StyledForm>
    )
}

export default CharacterSheet
