import React from 'react'
import {
    formValueSelector,
    Field,
    FieldArray,
    InjectedFormProps,
    reduxForm,
} from 'redux-form'
import { connect } from 'react-redux'

import ItemsList from 'components/ItemsList/ItemsList'

import { CHARACTERS } from 'lib/constants'

import { StyledForm } from './CharacterSheet.styles'

interface Props {
    character: string
    experience: string
}

const CharacterSheet: React.FC<InjectedFormProps<{}, Props> & Props> = ({
    handleSubmit,
    character,
    experience,
}) => {
    const onSubmit = (values: any) => {
        /**
         * @TODO: Buttons that aren't the input type="submit"
         * shouldn't trigger the submit event
         */
        localStorage.setItem('gloomy_bois', JSON.stringify(values))
        alert('saved!')
    }

    const selectedCharacter = CHARACTERS.find(i => i.name === character)

    const characterLevel =
        selectedCharacter &&
        selectedCharacter.levels.reduce((prev, current, index, array) => {
            if (array[index].experience <= Number(experience)) {
                return prev + 1
            }
            return prev
        }, 0)

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div className="sheet-inner">
                <div className="column left">
                    <div className="input-field">
                        <label htmlFor="character">Character:</label>
                        <Field
                            name="character"
                            component="select"
                            type="select"
                        >
                            <option />
                            {CHARACTERS.map(character => (
                                <option
                                    key={character.name}
                                    value={character.name}
                                >
                                    {character.name}
                                </option>
                            ))}
                        </Field>
                        (level {characterLevel})
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
                        <label htmlFor="reputation">Reputation:</label>
                        <Field
                            name="reputation"
                            component="input"
                            type="number"
                            placeholder="Reputation"
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
                </div>
                <div className="column right">
                    <div className="section">
                        <h1>Perks</h1>
                        {selectedCharacter &&
                            selectedCharacter.perks.map((perk, index) => (
                                <div>
                                    <label>{perk.label}</label>
                                    {Array.from(Array(perk.uses).keys()).map(
                                        (use, idx) => (
                                            <Field
                                                name={`perk[${index}].use[${idx}]`}
                                                component="input"
                                                type="checkbox"
                                            />
                                        )
                                    )}
                                </div>
                            ))}
                    </div>
                    <div className="section">
                        <div className="input-field">
                            <label htmlFor="notes">Notes:</label>
                            <Field
                                name="notes"
                                component="textarea"
                                placeholder="Notes"
                                rows="10"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <input type="submit" className="submit-button" />
        </StyledForm>
    )
}

const CharacterSheetForm = reduxForm<{}, Props>({
    form: 'character_sheet',
})(CharacterSheet)

const selector = formValueSelector('character_sheet')

const mapStateToProps = (state: any) => ({
    initialValues: JSON.parse(localStorage.getItem('gloomy_bois') || '{}'),
    character: selector(state, 'character'),
    experience: selector(state, 'experience'),
})

export default connect(
    mapStateToProps,
    {}
)(CharacterSheetForm)
