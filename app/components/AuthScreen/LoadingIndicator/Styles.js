import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  loadingContainer: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#000000',
    opacity: 0.5,
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
  }
})
