import React from 'react'
import PropTypes from 'prop-types'

import BasicForm from '../BasicForm'

import translations from '../../../../i18n'

const LoginFormComponent = props =>
  <BasicForm
    buttonTitle={translations.t('login')}
    onButtonPress={props.login} />

LoginFormComponent.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginFormComponent
