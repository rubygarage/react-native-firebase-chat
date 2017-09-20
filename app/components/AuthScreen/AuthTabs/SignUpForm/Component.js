import React from 'react'
import PropTypes from 'prop-types'

import BasicForm from '../BasicForm'

import translations from '../../../../i18n'

const SignUpFormComponent = props =>
  <BasicForm
    buttonTitle={translations.t('signup')}
    onButtonPress={props.signup} />

SignUpFormComponent.propTypes = {
  signup: PropTypes.func.isRequired
}

export default SignUpFormComponent
