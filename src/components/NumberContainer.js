import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import Colors from '../constantes/Colors'

const NumberContainer = ({ children }) => {
  const { children } = Props;

  return (
    <View style={styles.comtainer}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}
export default NumberContainer
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius: 10,
        margiVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',    
  },
      number: {
        color: Colors.primary,
        fontSize: 22,

        }
})