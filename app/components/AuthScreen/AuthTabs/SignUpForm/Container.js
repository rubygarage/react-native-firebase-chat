import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

import { connect } from 'react-redux'

import { signupUser } from '../../../../store/session'

import SignUpFormComponent from './Component'

import translations from '../../../../i18n'

class SignUpFormContainer extends Component {

  static navigationOptions = {
    tabBarLabel: translations.t('signup'),
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../../../images/ic_person_add.png')}
        style={{tintColor: tintColor}}
      />
    )
  }

  render() {
    return (
      <SignUpFormComponent
        signup={this.props.signup} />
    )
  }
}

SignUpFormContainer.propTypes = {
  screenProps: PropTypes.shape({
    signup: PropTypes.func.isRequired,
  })
}

const mapDispatchToProps = {
  signup: signupUser
}

export default connect(null, mapDispatchToProps)(SignUpFormContainer)
