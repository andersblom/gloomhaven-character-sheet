import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import CharacterSheet from 'components/CharacterSheet/CharacterSheet'

const CharacterSheetForm = reduxForm({
    form: 'character_sheet',
})(CharacterSheet)

const mapStateToProps = (state: any) => ({
    initialValues: JSON.parse(localStorage.getItem('gloomy_bois') || '{}'),
})

export default connect(
    mapStateToProps,
    {}
)(CharacterSheetForm)
